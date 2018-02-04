module.exports = {
	globals: {
		"ts-jest": {
			tsConfigFile: "tsconfig.spec.json"
		}
	},
	bail: true,
	verbose: true,
	collectCoverage: true,
	preset: "jest-preset-angular",
	moduleFileExtensions: [ "ts", "js" ],
	transform: {
		"\\.(ts|tsx)$": "ts-jest"
	},
	setupTestFrameworkScriptFile: "<rootDir>setup-jest.ts"

}