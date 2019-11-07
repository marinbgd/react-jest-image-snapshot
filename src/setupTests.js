const { toMatchImageSnapshot } = require('jest-image-snapshot');

expect.extend({ toMatchImageSnapshot });

module.exports = {
    testEnvironment: 'jsdom',
    preset: 'jest-puppeteer',
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/assetsTransformer.js",
        "\\.(css|scss)$": "<rootDir>/test/assetsTransformer.js"
    },
    transform: {
        "^.+\\.js$": "babel-jest"
    }
    // testRegex: './*\\.test\\.js$'
};