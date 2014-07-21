describe('Purchase', function() {
  describe("total", function() {
    it("adds single amount to Purchase.total", function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.quantity = 2;
      testPurchase.price = 10;
      testPurchase.total().should.equal(20);
    });
    it("adds multiple amounts together in Purchase.total", function(){
      var testPurchase = Object.create(Purchase);
      testPurchase.quantity = 1;
      testPurchase.price = 10;
      testPurchase.total().should.equal(10);
    });
  });
});
describe('Category', function() {
  describe("total", function() {
    it("adds the total of all prices in the category", function(){
      var testCategory = Object.create(Category);
      testCategory.items = [{description: "fruit", price: 3, quantity: 2, total: 6},
                            {description: "veggies", price: 4, quantity: 3, total: 12}];
      testCategory.total().should.equal(18);
    });
  });
});
