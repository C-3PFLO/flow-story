import {
    executeScript,
} from '@onflow/flow-js-testing';

describe('cadence/scripts/sayHello', () => {
    it('main', async () => {
        const [result, error] = await executeScript('sayHello', null);
        expect(error).toEqual(null);
        expect(result).toEqual('Hello, my name is Alice');
    });
});
