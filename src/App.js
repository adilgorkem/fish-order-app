import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";
import Footer from "./components/Footer/Footer";

function App() {
const [cartView, setCartView] = useState(false);

const showCartHandler = () => {
  setCartView(true);
}


const closeCartHandler = () => {
  setCartView(false);
}
  
  return (
    <CartProvider>
      {cartView && <Cart onClose={closeCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
      <Meals/>
      </main>
      <Footer/>
    </CartProvider>
  );
}

export default App;
