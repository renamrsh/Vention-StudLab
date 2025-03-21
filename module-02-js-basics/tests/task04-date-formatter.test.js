import { DateFormatter } from "../src/task04-date-formatter";

describe("parse, formats, and display relative dates using native JavaScript only", () => {
    beforeAll(() => {
        vi.useFakeTimers()
        vi.setSystemTime(new Date("2025-03-16"));
    })
    afterAll(() => {
        vi.useRealTimers()
    })

    it("", () => {
        expect(DateFormatter.format("31102011")).toBe("31-10-2011");
    });
    it("", () => {
        expect(DateFormatter.format("31102011", "DDMMYYYY", "DD Month YYYY")).toBe("31 October 2011");
    });
    it("", () => {
        expect(DateFormatter.format("31 10 2011", "DD MM YYYY", "DD Month YYYY")).toBe("31 October 2011");
    });

    it("", () => {
        expect(DateFormatter.format("01December2023", "DDMonthYYYY", "DD-MM-YYYY")).toBe("01-12-2023");
    });
    it("", () => {
        expect(DateFormatter.format("01 December 2023", "DD Month YYYY", "DD MM YYYY")).toBe("01 12 2023");
    });
    it("", () => {
        expect(DateFormatter.format("01-January-2023", "DD-Month-YYYY", "DDMMYYYY")).toBe("01012023");
    });
    it("", () => {
        expect(DateFormatter.format("01122023", "DDMMYYYY", "DD-Month-YYYY")).toBe("01-December-2023");
    });
    it("", () => {
        expect(DateFormatter.format("01-03-2023", "DD MM YYYY", "DD Month YYYY")).toBe("01 March 2023");
    });
    it("", () => {
        expect(DateFormatter.format("01-08-2023", "DD-MM-YYYY", "DDMonthYYYY")).toBe("01August2023");
    });


    it("", () => {
        expect(DateFormatter.fromNow("01012027",)).toBe("in 1 year 9 months 16 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("01-01-2027", "DD-MM-YYYY")).toBe("in 1 year 9 months 16 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("01 01 2028", "DD MM YYYY")).toBe("in 2 years 9 months 16 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("01012027", "DDMMYYYY")).toBe("in 1 year 9 months 16 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("01-December-2028", "DD-Month-YYYY")).toBe("in 3 years 8 months 16 days");
    });
    it(() => {
        expect(DateFormatter.fromNow("01 December 2028", "DD Month YYYY")).toBe("in 3 years 8 months 16 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("01December2028", "DDMonthYYYY")).toBe("in 3 years 8 months 16 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("14May2033", "DDMonthYYYY")).toBe("in 8 years 1 month 29 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("01April2033", "DDMonthYYYY")).toBe("in 8 years 16 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("17April2033", "DDMonthYYYY")).toBe("in 8 years 1 day");
    });
    it("", () => {
        expect(DateFormatter.fromNow("16April2033", "DDMonthYYYY")).toBe("in 8 years");
    });


    it("", () => {
        expect(DateFormatter.fromNow("01032023", "DDMMYYYY")).toBe("2 years 15 days ago");
    });
    it("", () => {
        expect(DateFormatter.fromNow("01032025", "DDMMYYYY")).toBe("15 days ago");
    });

});