const {
  validateCred,
  findInvalidCards,
  idInvalidCompanies,
} = require("../main");
const assert = require("node:assert/strict");

describe(".validateCred", () => {
  it("Validates creditcard number", () => {
    // setup
    const testArray = [3, 7, 4, 2, 4, 5, 4, 5, 5, 4, 0, 0, 1, 2, 6];
    // execute
    const testedArray = validateCred(testArray);
    // verify
    assert.strictEqual(testedArray, true);
  });
});

describe(".findInvalidCards", () => {
  it("Finds invalid creditcard numbers within a batch", () => {
    // setup
    let validCreditCards = [
      [3, 7, 4, 2, 4, 5, 4, 5, 5, 4, 0, 0, 1, 2, 6],
      [6, 2, 5, 0, 9, 4, 1, 0, 0, 6, 5, 2, 8, 5, 9, 9],
    ];
    let invalidCreditCards = [
      [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3],
      [3, 7, 8, 2, 8, 2, 2, 4, 6, 3, 1, 0, 1, 0, 5],
    ];
    let batchOfCards = [
      validCreditCards[0],
      validCreditCards[1],
      invalidCreditCards[0],
      invalidCreditCards[1],
    ];

    // execute

    let testedCards = findInvalidCards(batchOfCards);

    // verify

    assert.deepStrictEqual(testedCards, invalidCreditCards);
  });
});

describe(".idInvalidCompanies", () => {
  it("Finds the company using their unique id, returns an array of all companies whom creditcards have been faked", () => {
    // setup
    let invalidCreditCards = [
      [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3],
      [3, 7, 8, 2, 8, 2, 2, 4, 6, 3, 1, 0, 1, 0, 5],
    ];
    let expectedResult = ["Mastercard", "Amex (American Express)"];
    // execute
    let companies = idInvalidCompanies(invalidCreditCards);
    // verify
    assert.deepStrictEqual(companies, expectedResult);
  });
});
