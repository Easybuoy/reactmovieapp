module.exports = {
    setupFilesAfterEnv: ["<rootDir>/src/config/setupTests.js"],
    testPathIgnorePatterns: [
        "<rootDir>/src/__tests__/__mocks__/"
    ],
    transformIgnorePatterns: ["/node_modules/"],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/__tests__/__mocks__/fileMock.js",
        "\\.(css|less)$": "<rootDir>/src/__tests__/__mocks__/styleMock.js"
      }
}