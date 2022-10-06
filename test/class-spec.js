const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {

    let word;
    beforeEach(() => {
      word = new Word("awesome");
  });

    it('should have a "word" property', function () {

      expect(word).to.exist;
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word).to.have.ownPropertyDescriptor('word');
    });
  });

  describe("removeVowels function", function () {
    let word;
    beforeEach(() => {
      word = new Word("awesome");
  });
   
    it("should return a the word with all vowels removed", function () {
      let expected = 'wsm';
      let actual = word.removeVowels();
      expect(actual).to.equal(expected);
    });
  });

  describe("removeConsonants function", function () {
    let word;
    beforeEach(() => {
      word = new Word("awesome");
  });
    it("should return the word with the consonants removed", function () {
      let expected = 'aeoe';
      let actual = word.removeConsonants();
      expect(actual).to.eq(expected);

    }); 
  });
  
  describe("pigLatin function", function () {
    let sentence = new Word("this is a sentence");
    it("should return the word converted to pig latin", function () {
      let expected = "is is a sentencethay";
      let actual = sentence.pigLatin();
      expect(actual).to.equal(expected);
    });
  });
});