import { describe, it, expect } from "vitest";
import { echo, hello } from ".";

describe("hello", () => {
	it("should return 'Hello, World!'", () => {
		expect(hello()).toBe("Hello, World!");
	});
});

describe("echo", () => {
	it("should return the message", () => {
		expect(echo("hello")).toBe("hello");
	});
});
