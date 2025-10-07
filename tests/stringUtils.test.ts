import { describe, expect, it } from "vitest";
import {capitalize, toTitleCase} from "../src/string-utils/stringUtils";

describe("capitalize", () => {
    it("should capitalize first letter", () => {
        expect(capitalize("hello")).toBe("Hello");
        expect(capitalize("WORLD")).toBe("World");
        expect(capitalize("")).toBe("");
    });
});

describe("toTitleCase", () => {
    it("should capitalize first letter of each word", () => {
        expect(toTitleCase("hello world")).toBe("Hello World");
    })
});