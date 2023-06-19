import { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { footContext } from '../Context';

function AddToCart() {
    const { id } = useParams();
    const data = useContext(footContext);
    const [quantity, setQuantity] = useState(1);
    const { men } = data;
    const filteredShoe = men.filter((item) => item.id === parseInt(id));
    const item = filteredShoe[0]; 

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const calculateTotalPrice = () => {
        return item.Price * quantity;
    };

    return (
        <div>
            <div className="women">
                <div className='women-box'>
                    <h1>Cart</h1>
                </div>
                <div className='container3'>
                    <div className='main1'>
                        {filteredShoe.map((item, index) => {
                            return (
                                <div key={index} className='shoe-box3'>
                                    <img src={item.Image} />
                                    <div className='women-btn'>
                                        <h3>{item.Title}</h3>
                                        <h1 ></h1>
                                        <h4>Quantity: {quantity}</h4>
                                        <h2>Total Price: ${calculateTotalPrice()}</h2>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <button onClick={incrementQuantity}>+</button>
                    <button onClick={decrementQuantity}>-</button>
                </div>
            </div>
        </div>
    );
}

export default AddToCart;
