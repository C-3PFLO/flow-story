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
        const [result, error] = await executeScript({ code });
        expect(error).toEqual(null);
        expect(result).toEqual('Hello, my name is Alice');
    });
    it('makeFriends', async () => {
        const Alice = await getAccountAddress('Alice');
        const code = `
            import Person from ${Alice}
            transaction() {
                prepare(acct: AuthAccount) {
                    let friendship <- Person.makeFriends()
                    friendship.yaay()
                    destroy friendship
                }
            }
        `;
        const [result, error] = await sendTransaction({ code, Alice });
        expect(error).toEqual(null);
        expect(result.statusCode).toEqual(0);
    });
});
