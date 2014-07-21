 var Category = {
  items: [],
  total: function() {
    var grandTotal = 0;
      this.items.forEach(function(item) {
      grandTotal = grandTotal + item.total();
    })
    return grandTotal;
  }
};

var Purchase = {
  description: "",
  price: 0,
  quantity: 0,
  total: function(){
    return this.price * this.quantity;
  }
};

$(document).ready(function() {
  var category;
  var currentList;

//CLICK THE CATEGORY ADD BUTTON
  $("form#category-form").submit(function(event) {

    event.preventDefault();
    var catName = $("input#new-category").val();

    //appending to the lists list
    $("#category-list").append("<li class='category-list-item'>" + catName + "</li>");
    $(".selected-category").text(catName);

    //set the current list to this input
    currentList = catName;

    //build the category object
    category = Object.create(Category); // creates the object
    category.name = catName;

    $("input#new-category").val("");



//CLICK A LIST ITEM
    $(".category-list-item").last().click(function(event) {
      currentList = category;
      console.log(currentList);
      $(".selected-category").text(catName);
      //$("#purchase-table").text("");
      $("#purchase-total").text("");
      $("#table-info").text("");
      currentList.items.forEach(function(item) {
        $("#purchase-table").append("<tr><td>" + item.description + "</td><td>$" + item.price + "</td><td>" + item.quantity + "</td><td>$" + item.total() + "</td></tr>");
      });
      console.log(currentList)
      //populate the right side with the items in the object/array/whatever
    });
  });




//CLICK THE PURCHASE ADD BUTTON
  $("#purchase-add").click(function(event){
    var newDescription = $("#new-description").val();
    var newPrice = $("#new-price").val();
    var newQuantity = $("#new-quantity").val();

    //build the purchase object
    var purchase = Object.create(Purchase);
    purchase.description = $("#new-description").val();
    purchase.price = parseFloat($("#new-price").val());
    purchase.quantity = parseInt($("#new-quantity").val());
    category.items.push(purchase);
    console.log(category.items);


    //append to the purchases list
    $("#purchase-table").append("<tr><td>" + purchase.description + "</td><td>$" + purchase.price + "</td><td>" + purchase.quantity + "</td><td>$" + purchase.total() + "</td></tr>");

    //fill in the grand total box
    $("#purchase-total").text("Your total is $" + category.total() + ".")

    //clear the form
    $("input#new-description").val("");
    $("input#new-price").val("");
    $("#new-quantity").val("");
  })

});
