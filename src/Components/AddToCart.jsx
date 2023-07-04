import { useContext } from 'react';
import { footContext } from '../Context';
import './AddToCart.css';

function AddToCart() {
  const data = useContext(footContext);
  const { cartItems, setCartItems,login } = data;

  console.log(login);

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  const incrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        return {
          ...item,
          quantity: item.quantity + 1
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decrementQuantity = (itemId) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === itemId) {
        const updatedQuantity = item.quantity - 1;
        return {
          ...item,
          quantity: updatedQuantity >= 1 ? updatedQuantity : 1
        };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;

    cartItems.forEach((item) => {
      totalPrice += item.Price * item.quantity;
    });

    return totalPrice;
  };

  return (
    <div>
      <div className="car">
        <div className="women-box">
          <h1>Cart</h1>
        </div>
        <div className="container4">
          <div className="cart">
            {cartItems.map((item, index) => {
              const totalItemPrice = item.Price * item.quantity;

              return (
                <div key={index} className="shoe-box3">
                  <img className="cart-img" src={item.Image} alt={item.Title} />
                  <div className="women-btn">
                    <h3>{item.Title}</h3>
                    <h4>Quantity: {item.quantity}</h4>
                    <h2>Total Price: ${totalItemPrice}</h2>
                    <button onClick={() => incrementQuantity(item.id)}>+</button>
                    <button onClick={() => decrementQuantity(item.id)}>-</button>
                    <button onClick={() => removeItemFromCart(item.id)}>Remove</button>
                  </div>
                </div>
              );
            })}
            
            <div className="total-price">Total Cart Price: ${calculateTotalPrice()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddToCart;
