import { StringCalculator } from "../src/task06-string-calculator";

describe("evaluate arithmetic expressions provided as strings", () => {
    it("return invalid input when empty array given", () => {
        expect(() => StringCalculator.calculate(5)).toThrowError()
    });
    
    it("", () => {
        expect(StringCalculator.calculate("2 + 3")).toBe("5");
    });
    it("", () => {
        expect(StringCalculator.calculate("2.5 * 4")).toBe("10");
    });
    it("", () => {
        expect(StringCalculator.calculate("10 / 4")).toBe("2.5");
    });
    it("", () => {
        expect(StringCalculator.calculate("(2 + 3) * 4")).toBe("20");
    });
    it("", () => {
        expect(StringCalculator.calculate("2 + 3 * 4")).toBe("14");
    });
    it("", () => {
        expect(StringCalculator.calculate("(10/(4*5*2)*3)*(8-4)")).toBe("3");
    });
});

