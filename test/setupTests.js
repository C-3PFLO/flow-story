/* global __dirname */

import path from 'path';
import {
    init,
    emulator,
    getAccountAddress,
    deployContractByName,
} from '@onflow/flow-js-testing';

// Instantiate emulator and path to Cadence files
beforeEach(async () => {
    // Configure
    const basePath = path.resolve(__dirname, '../cadence');
    await init(basePath);
    // Start
    await emulator.start({
        logging: true,
        flags: '--skip-version-check',
    });
    // Deploy
    const Alice = await getAccountAddress('Alice');
    await deployContractByName({ to: Alice, name: 'Person' });
});

// Stop emulator, so it could be restarted
afterEach(async () => {
    await emulator.stop();
});
