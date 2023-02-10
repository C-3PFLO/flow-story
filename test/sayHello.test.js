import path from "path"
import {
    init,
    emulator,
    executeScript,
} from "@onflow/flow-js-testing"

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
        // Turn on logging from begining
        emulator.setLogging(true)
        const [result, error, logs] = await executeScript('sayHello', null);
        expect(result).toEqual('Hello from Cadence!');
    });
});
