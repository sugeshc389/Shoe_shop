import { useContext, useState } from 'react';
import { footContext } from '../Context';
import './AddToCart.css';

function AddToCart() {
  const data = useContext(footContext);
  const { men } = data;
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const updatedCartItems = [...cartItems];
    const existingItem = updatedCartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCartItems.push({ ...item, quantity: 1 });
    }
    setCartItems(updatedCartItems);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <div className="women">
        <div className="women-box">
          <h1>Cart</h1>
        </div>
        <div className="container4">
          <div className="main1">
            {cartItems.map((item, index) => {
              const totalItemPrice = item.Price * item.quantity;
              return (
                <div key={index} className="shoe-box3">
                  <img className="shoe-img" src={item.Image} alt={item.Title} />
                  <div className="women-btn">
                    <h3>{item.Title}</h3>
                    <h4>Quantity: {item.quantity}</h4>
                    <h2>Total Price: ${totalItemPrice}</h2>
                    <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="shoe-list">
            {men.map((item) => (
              <div key={item.id} className="shoe-box">
                <img className="shoe-img" src={item.Image} alt={item.Title} />
                <div className="women-btn">
                  <h3>{item.Title}</h3>
                  <h2>${item.Price}</h2>
                  <button onClick={() => addToCart(item)}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
