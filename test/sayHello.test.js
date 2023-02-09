import path from "path"
import {
    init,
    emulator,
    executeScript,
} from "@onflow/flow-js-testing"

// We need to set timeout for a higher number, because some transactions might take up some time
jest.setTimeout(1000000);

describe('sayHello', () => {
    // Instantiate emulator and path to Cadence files
    beforeEach(async () => {
        const basePath = path.resolve(__dirname, "../cadence");
        await init(basePath);
        await emulator.start();
    });

    // Stop emulator, so it could be restarted
    afterEach(async () => {
        await emulator.stop();
    });

    it('executeScript', async () => {
        const [result, error, logs] = await executeScript('sayHello', null);
        expect(result).toEqual('Hello from Cadence!');
    });
});
