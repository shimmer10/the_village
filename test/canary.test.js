/********************************
 * Test file for The Village
 * 
 * @author The Village People
 * 
 * 2019-07-13
 ********************************/

var expect = require("chai").expect;

describe("canary test", function () {
  // A "canary" test is one we set up to always pass
  // This can help us ensure our testing suite is set up correctly before writing real tests
  it("should pass this canary test", function () {
    expect(true).to.be.true;
  });
});
