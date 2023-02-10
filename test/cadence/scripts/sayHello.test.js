import {
    executeScript,
} from '@onflow/flow-js-testing';

describe('cadence/scripts/sayHello', () => {
    it('main', async () => {
        const [result, error, logs] = await executeScript('sayHello', null);
        expect(error).toEqual(null);
        expect(logs).toEqual([]);
        expect(result).toEqual('Hello, my name is Alice');
    });
});
