const { getMethod, postMethod, deletemethod } = require("./apiserver/apiobjects");

//test suites
describe("Testing API restful", function () {
  // Test case 1
  it("Test GET from Function", async function () {
    await getMethod();
  });
  it("Test POST from Function", async function () {
    await postMethod();
  });
  it("Test DELETE from Function", async function () {
    await deletemethod();
  }); 
});
