import React, { useState, useEffect } from 'react';

const AddCartHook = () => {
  const [counter, setCounter] = useState(1);
  const [cartItems, setCartItems] = useState(0);

  useEffect(() => {
    console.log(`You added ${cartItems} items to your cart.`);
  }, [cartItems]);

  const handlePlus = () => {
    setCounter(counter + 1);
  };

  const handleMinus = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const handleAddToCart = () => {
    setCartItems(counter);
  };

  return (
    <div>
      <button onClick={handleMinus}>-</button>
      <span>{counter}</span>
      <button onClick={handlePlus}>+</button>
      <br />
      <button onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
};

export default AddCartHook;