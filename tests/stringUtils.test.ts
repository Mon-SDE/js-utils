import {capitalize, toTitleCase} from "../src/stringUtils";

test("capitalize() should capitalize first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("WORLD")).toBe("World");
    expect(capitalize("")).toBe("");
});

test("toTitleCase() should capitalize first letter", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
});