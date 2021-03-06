const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return false if the substitution alphabet is missing", () => {
        const actual = substitution("message");
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const actual = substitution("message", "short");
        const expected = false;
        expect(actual).to.equal(expected);
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const actual = substitution("message","abcabcabcabcabcabcabcabcab");
        const expected = false;
        expect(actual).to.equal(expected);
    });
  
    it("should encode a message by using the given substitution alphabet", () => {
        const actual = substitution("message", "plmoknijbuhvygctfxrdzeswaq");
        const expected = "ykrrpik";
        expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
        const actual = substitution("message", ".waeszrdxtfcygvuhbijnokmpl");
        const expected = "ysii.rs";
        expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
        const actual = substitution("my message", ".waeszrdxtfcygvuhbijnokmpl");
        const expected = "yp ysii.rs";
        expect(actual).to.eql(expected);
    });
  
  
    it("should decode a message by using the given substitution alphabet", () => {
        const actual = substitution("ykrrpik", "plmoknijbuhvygctfxrdzeswaq",false);
        const expected = "message";
        expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
        const actual = substitution( "ysii.rs", ".waeszrdxtfcygvuhbijnokmpl",false);
        const expected ="message";
        expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
        const actual = substitution( "yp ysii.rs", ".waeszrdxtfcygvuhbijnokmpl",false);
        const expected = "my message";
        expect(actual).to.eql(expected);
    });

  
})