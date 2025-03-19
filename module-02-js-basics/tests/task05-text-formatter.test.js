import { formatText } from "../src/task05-text-formatter";

describe("formats text according to given constraints", () => {
    it("return invalid input when text is not string", () => {
        expect(() => formatText(null)).toThrowError();
        expect(() => formatText("")).toThrowError();
    });
    it("", () => {
        expect(formatText("Hello world, this is JavaScript", 10, 2, "word")).toBe("Hello\nworld,...");
    });
    it("", () => {
        expect(formatText("Hello world!", 5, 3, "character")).toBe("H\ne\nl...");
    });
    it("", () => {
        expect(formatText("Hello world. I'm Human. Are you?", null, 3, "sentence")).toBe("Hello world.\nI'm Human.\nAre you?...");
    });
    it("", () => {
        expect(formatText("Who are you?", 6, 3, "none")).toBe("Who ar\ne you?");
    });
    it("", () => {
        expect(formatText("Who are you? I'm a human. You?", null, 2, "sentence")).toBe("Who are you?\nI'm a human...");
    });
});

