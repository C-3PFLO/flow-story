import {
    getAccountAddress,
    executeScript,
    sendTransaction,
} from '@onflow/flow-js-testing';

describe('cadence/contracts/Person', () => {
    it('sayHello', async () => {
        const Alice = await getAccountAddress('Alice');
        const code = `
            import Person from ${Alice}
            pub fun main(): String {
                return Person.sayHello()
            }
        `;
        const [result, error, logs] = await executeScript({ code });
        // expect on error and logs since any differences
        // are typically test errors and logged to console
        expect(error).toEqual(null);
        expect(logs).toEqual([]);
        expect(result).toEqual('Hello, my name is Alice');
    });
    xit('makeFriends', async () => {
        const Alice = await getAccountAddress('Alice');
        const code = `
            import Person from ${Alice}
            transaction() {
                prepare(acct: AuthAccount) {
                    let friendship <- Person.makeFriends()
                    log(friendship.yaay())
                    destroy friendship
                }
            }
        `;
        const [result, error, logs] = await sendTransaction({ code, Alice });
        // expect on error and logs since any differences
        // are typically test errors and logged to console
        expect(error).toEqual(null);
        expect(logs).toEqual([
            'such a nice friend',
        ]);
        expect(result.statusCode).toEqual(0);
    });
});
