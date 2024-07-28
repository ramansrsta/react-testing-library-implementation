module.exports = {
  transform: {
    "^.+\\.[t|j]sx?$": "babel-jest",
  },
  extensionsToTreatAsEsm: [".ts", ".tsx", ".js", ".jsx"],
  preset: "ts-jest",
  testEnvironment: "node",
  setupFiles: ["./jest.polyfills.js"],
};
