
import { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";


function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

      // 🔹 NEW: ensure each item has quantity
    const cartWithQty = cart.map(item => ({
      ...item,                                          //...items means all items
       quantity: item.quantity || 1
    }));



    setCartItems(cartWithQty);
  }, []);
  const increaseQty = (index) => {
    const temp = [...cartItems];
    temp[index].quantity = temp[index].quantity + 1;
    setCartItems(temp);
    localStorage.setItem("cart", JSON.stringify(temp));
  };

  // 🔹 NEW: decrease quantity
  const decreaseQty = (index) => {
    const temp = [...cartItems];
    if (temp[index].quantity > 1) {
      temp[index].quantity = temp[index].quantity - 1;
      setCartItems(temp);
      localStorage.setItem("cart", JSON.stringify(temp));
    }
  };

//total

let totalPrice=0;
cartItems.forEach(item => {
  totalPrice += item.price * item.quantity;
});
//delete item from cart
const removeItem  =(indextoRemove) =>{
  const updatedCart=cartItems.filter((_,index) => index!== indextoRemove);
  setCartItems(updatedCart);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}

  return (
    <>
      <Header />

      <div style={{ paddingTop: "120px", paddingBottom: "80px", textAlign: "center" }}>
        <h1>Your Cart</h1>

        {cartItems.length === 0 ? (
          <h3>No items in cart</h3>
        ) : (
          <div className="products">
            {cartItems.map((item, index) => (
              <div className="product" key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>  
                <div>
                 <button onClick={() => decreaseQty(index)}>-</button>
                  <span style={{ margin: "0 20px" }}>Item count: {item.quantity}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                <button onClick={() => removeItem(index)}>Clear Cart</button>
                </div>
              </div>
             
            ))}
          </div>
        )}
        <p>Total Price: ${totalPrice}</p>
      </div>

      <Footer
       />  
    </>
  );
}

export default Cart;