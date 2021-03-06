module.exports = {
    rootDir: '../../',
    "roots": [
        "<rootDir>/src"
    ],
    "preset": "jest-puppeteer",
    "collectCoverageFrom": [
        "src/**/*.{js,jsx,ts,tsx}",
        "!src/**/*.d.ts"
    ],
    "setupFiles": [
        "react-app-polyfill/jsdom"
    ],
    "setupFilesAfterEnv": [
        "<rootDir>/config/jest/setupTests.js"
    ],
    "testMatch": [
        "<rootDir>/src/**/__itests__/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/src/**/*.{ispec,itest}.{js,jsx,ts,tsx}"
    ],
    "transform": {
        "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
        "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
    },
    "transformIgnorePatterns": [
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
        "^.+\\.module\\.(css|sass|scss)$"
    ],
    "modulePaths": [],
    "moduleNameMapper": {
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    "moduleFileExtensions": [
        "web.js",
        "js",
        "web.ts",
        "ts",
        "web.tsx",
        "tsx",
        "json",
        "web.jsx",
        "jsx",
        "node"
    ],
    "watchPlugins": [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
    ]
};