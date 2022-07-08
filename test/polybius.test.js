const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const actual = polybius("thinkful");
        const expected = "4432423352125413";
        expect(actual).to.equal(expected);
    });
  
  it("should translate both 'i' and 'j' to 42", () => {
        const actual = polybius("jiggle");
        const expected = "424222221351";
        expect(actual).to.equal(expected);
    });

  it("should leave spaces as is", () => {
        const actual = polybius("my message");
        const expected = "2345 23513434112251";
        expect(actual).to.equal(expected);
    });
  
   it("should decode a message by translating each pair of numbers into a letter", () => {
        const actual = polybius("23513434112251", false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });
  
   it("should translate 42 to both 'i' and 'j'", () => {
        const actual = polybius("424222221351", false);
        const expected = "i/ji/jggle";
        expect(actual).to.equal(expected);
    });
  
   it("should leave spaces as is", () => {
        const actual = polybius("2345 23513434112251", false);
        const expected = "my message";
        expect(actual).to.equal(expected);
    });
  
   it("should return false if the length of all numbers is odd", () => {
        const actual = polybius("2351343411225", false);
        const expected = false;
        expect(actual).to.equal(expected);
    });
  
  

})