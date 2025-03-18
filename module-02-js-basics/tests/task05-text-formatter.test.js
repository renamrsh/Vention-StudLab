import { formatText } from "../src/task05-text-formatter";

describe("formats text according to given constraints", () => {
    it("", () => {
        expect(formatText("Hello world, this is JavaScript", 10, 2, "word")).toBe("Hello\nworld,...");
    });
    it("", () => {
        expect(formatText("Hello world!", 5, 3, "character")).toBe("H\ne\nl...");
    });
});

