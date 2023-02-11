/* global __dirname */

import path from 'path';
import {
    init,
    emulator,
    getAccountAddress,
} from '@onflow/flow-js-testing';
import { safeDeployContractByName } from './common';

// Instantiate emulator and path to Cadence files
beforeEach(async () => {
    // Configure
    const basePath = path.resolve(__dirname, '../cadence');
    await init(basePath);
    await emulator.start();
    // Deploy
    const admin = await getAccountAddress('admin');
    await safeDeployContractByName({ to: admin, name: 'Story' });
});

// Stop emulator, so it could be restarted
afterEach(async () => {
    await emulator.stop();
});
