import { DateFormatter } from "../src/task04-date-formatter";

describe("parse, formats, and display relative dates using native JavaScript only", () => {
    it("returns 31-10-2011 string after putting 31102011", () => {
        expect(DateFormatter.format("31102011")).toBe("31-10-2011");
    });
    it("returns 31 October 2011 string after putting '31102011', 'DDMMYYYY', 'DD Month YYYY'", () => {
        expect(DateFormatter.format("31102011", "DDMMYYYY", "DD Month YYYY")).toBe("31 October 2011");
    });
    /*
    it("", () => {
        expect(DateFormatter.fromNow("01032023", "DDMMYYYY")).toBe("2 years 17 days ago");
    });
    */

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

    /*
    it("", () => {
        expect(DateFormatter.fromNow("01-01-2027", "DD-MM-YYYY")).toBe("in 1 year 9 months 11 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("01-12-2027", "DD MM YYYY")).toBe("in 2 years 8 months 11 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("01122027", "DDMMYYYY")).toBe("in 2 years 8 months 11 days");
    });


    it("", () => {
        expect(DateFormatter.fromNow("01-December-2028", "DD-Month-YYYY")).toBe("in 3 years 8 months 11 days");
    });
    it("'", () => {
        expect(DateFormatter.fromNow("01 December 2028", "DD Month YYYY")).toBe("in 3 years 8 months 11 days");
    });
    it("", () => {
        expect(DateFormatter.fromNow("01December2028", "DDMonthYYYY")).toBe("in 3 years 8 months 11 days");
    });
    */
});