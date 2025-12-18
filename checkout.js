document.getElementById("checkout-form").addEventListener("submit" ,
function(e){
    e.preventDefault();

    // clear cart after order
    localStorage.removeItem("cart");
    
document.getElementById("order-message").textContent= "✅ Order placed successfully! Our team will contact you soon.";

    this.reset();
});