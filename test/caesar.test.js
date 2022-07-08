const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {
    it("should shift letters to the right, based on the typical alphabetic order", () => {
        const actual = caesar("thinkful", 3);
        const expected = "wklqnixo";
        expect(actual).to.equal(expected);
    });

    it("should shift letters to the left, based on the typical alphabetic order", () => {
        const actual = caesar("thinkful", -3);
        const expected = "qefkhcri";
        expect(actual).to.equal(expected);
    });

    it("should decode the message if encode is assigned 'false'", () => {
        const actual = caesar("wklqnixo", 3, false);
        const expected = "thinkful";
        expect(actual).to.equal(expected);
    });
  
    it("should return 'false' if the shift value is greater than 25", () => {
        const actual = caesar("thinkful", 99);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return 'false' if the shift value is less than -25", () => {
        const actual = caesar("thinkful", -26);
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should maintain spaces throughout", () => {
        const actual = caesar("think ful", 8);
        const expected = "bpqvs nct";
        expect(actual).to.eql(expected);
    });

  
})