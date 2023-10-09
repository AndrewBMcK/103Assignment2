let product;
let price = 20;
let quantity = 0;
let cart = 0;
let tax = 0.04;
let total  = 0;

function Checkout(){
    product = prompt ("What product would you like to purchase?");
    quantity = prompt ("How many would you like?");
    cart = price*quantity;
    total = (cart*tax) + cart;
    console.log(product , quantity , cart , total);
}
function displayInfo(){
    document.write(`
    <p>Product: ${product}</p>
    <p>Quantity: ${quantity}</p>
    <p>Cart: ${cart}</p>
    <p>Tax: ${tax}</p>
    <p>Total: ${total}</p>
    `)
}
Checkout()
displayInfo()