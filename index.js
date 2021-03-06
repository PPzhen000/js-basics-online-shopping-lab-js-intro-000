var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 // write your code here
 var obj = {};
 var price = Math.floor(Math.random() * (100 - 1) + 1);
 obj['itemName'] = item;
 obj['itemPrice'] = price;
 cart.push(obj);
 return `${item} has been added to your cart.`;
}

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return "Your shopping cart is empty.";
  }
  if(cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
  }
  var result = [];
  for(var i = 0; i < cart.length-1; i++){
    result.push(`${cart[i].itemName} at $${cart[i].itemPrice},`);
  }
  result = result.join(' ');
  return `In your cart, you have ${result} and ${cart[cart.length-1].itemName} at $${cart[cart.length-1].itemPrice}.`
}

function total() {
  // write your code here
  var sum = 0;
  for(var i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice;
  }
  return sum;
}

function removeFromCart(item) {

  for(var i = 0; i < cart.length; i++){
    console.log(cart[i].itemName);
    if(cart[i].itemName == item){
      cart.splice(i, 1);
      return cart;
    }
    // else{
    //   return "That item is not in your cart.";
    // }
  }
  return "That item is not in your cart.";
}

function placeOrder(cardNumber) {
  // write your code here
  if(cardNumber === undefined){
    return "Sorry, we don't have a credit card on file for you.";
  }
  var price = total();
  cart.length = 0;
  return `Your total cost is $${price}, which will be charged to the card ${cardNumber}.`;
}
