import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		globals: true,
		coverage: {
			provider: "v8",
			exclude: [
				"dist/**",
				"vitest.config.ts",
				"example/**",
			],
			reporter: ['text', 'json-summary', 'json'],
			reportOnFailure: true,
		},
	},
});
