// Cart
let cartIcon = document.querySelector('#cart-icon');
let cart = document.querySelector('.cart');
let closeCart = document.querySelector('#close-cart');
const icon = document.querySelector(".icon")
const bx = document.querySelector(".bx-x")
// Open Cart
// cartIcon.onclick = () =>{
//     // cart.classList.add('active')
// }
icon.addEventListener("click", function(){
    cart.classList.remove('inactive')
})
bx.addEventListener("click", function(){
    cart.classList.add("inactive")
})

// cart working JS
if (document.readystate == 'loading'){
    document.addEventListener ('DOMContentLoaded', ready)
}else{
    ready();
}
// Making Function

   // Remove Items From Cart 
   var removeCartItemButtons = document.getElementsByClassName('cart-remove')
   console.log(removeCartItemButtons)
   for (var i = 0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButton[i]
    button.addEventListener("click", function(event){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
    })
}