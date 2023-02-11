import {
    getAccountAddress,
    executeScript,
    sendTransaction,
    shallRevert,
} from '@onflow/flow-js-testing';
import {
    safeExecuteScript,
    safeSendTransaction,
} from '../../common';

describe('cadence/contracts/OurStory', () => {
    let admin;
    let user1;
    let user2;
    beforeEach(async () => {
        admin = await getAccountAddress('admin');
        user1 = await getAccountAddress('user1');
        user2 = await getAccountAddress('user2');
    });
    it('getCurrentAuthor', async () => {
        const [result] = await safeExecuteScript({ name: 'get_current_author' });
        expect(result).toEqual(admin);
    });
    it('appendToStory', async () => {
        let result;
        // first transaction
        [result] = await safeSendTransaction({
            name: 'append_to_story',
            args: [user1, 'This is the start of something great...'],
            signers: [admin],
        });
        expect(result.events.length).toEqual(1);
        expect(result.events[0].type).toContain('AppendedToStory');
        expect(result.events[0].data).toEqual({
            author: admin,
            nextAuthor: user1,
            storySnippet: 'This is the start of something great...',
        });
        // second transaction
        [result] = await safeSendTransaction({
            name: 'append_to_story',
            args: [user2, 'It is only the beginning'],
            signers: [user1],
        });
        expect(result.events.length).toEqual(1);
        expect(result.events[0].type).toContain('AppendedToStory');
        expect(result.events[0].data).toEqual({
            author: user1,
            nextAuthor: user2,
            storySnippet: 'It is only the beginning',
        });
        // run script to get result and validate
        [result] = await executeScript({ name: 'get_snippets' });
        expect(result).toEqual([
            {
                author: admin,
                nextAuthor: user1,
                storySnippet: 'This is the start of something great...',
            },
            {
                author: user1,
                nextAuthor: user2,
                storySnippet: 'It is only the beginning',
            },
        ]);
    });
    it('panics if not snippet > 2 characters', async () => {
        const [, error] = await shallRevert(
            sendTransaction({
                name: 'append_to_story',
                args: [user1, '.'],
                signers: [admin],
            }),
        );
        expect(error).toContain('snippet must be > 2 characters');
    });
    it('panics if not snippet <= 280 characters', async () => {
        const [, error] = await shallRevert(
            sendTransaction({
                name: 'append_to_story',
                args: [
                    user1,
                    '......................................................................' +
                    '......................................................................' +
                    '......................................................................' +
                    '......................................................................' +
                    ' more than 280 ...',
                ],
                signers: [admin],
            }),
        );
        expect(error).toContain('snippet must be <= 280 characters');
    });
    it('panics if submitting author is not current author address', async () => {
        const [, error] = await shallRevert(
            sendTransaction({
                name: 'append_to_story',
                args: [user1, 'a story snippet'],
                signers: [user2],
            }),
        );
        expect(error).toContain('submitting author is not current author address');
    });
    it('panics for next author cannot equal current author', async () => {
        const [, error] = await shallRevert(
            sendTransaction({
                name: 'append_to_story',
                args: [admin, 'a story snippet'],
                signers: [admin],
            }),
        );
        expect(error).toContain('next author cannot equal current author');
    });
});
