/* global module */
module.exports = {
    reporters: [
        'default',
        'jest-junit',
    ],
    coverageDirectory: 'artifacts/coverage',
    testEnvironment: 'jsdom',
    collectCoverageFrom: [
        'src/**/*.js',
    ],
    moduleDirectories: ['node_modules', 'src'],
};
