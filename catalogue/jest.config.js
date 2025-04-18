// jest.config.js
export default {
    "testEnvironment": "node",
    "transform": {
        "^.+\\.js$": "babel-jest"
    },
    "testRegex": "/__tests__/.*\\.(test|spec)\\.(js)$",
    "moduleFileExtensions": [
        "js",
        "json",
        "node"
    ]
};
