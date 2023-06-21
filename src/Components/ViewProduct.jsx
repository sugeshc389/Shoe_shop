import { useContext,useState } from "react";
import { footContext } from "../Context";
import {  useParams } from "react-router-dom";
import './ViewProduct.css';


export default function ViewProduct() {
  const { id } = useParams();
  const data = useContext(footContext);
  const { men } = data;
  const filteredShoe = men.filter((item) => item.id === parseInt(id));
  const item = filteredShoe[0];
  const [cartItems, setCartItems] = useState([]);
  const updatedCartItems = [...cartItems];

  const addToCart = (item) => {
    
    const existingItem = updatedCartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCartItems.push({ ...item, quantity: 1 });
    }
    setCartItems(updatedCartItems);
    console.log(updatedCartItems);
  };

  return (
   
    <div className="container3">
     
      <div className="row d-flex justify-content-center">
        <div className="col-md-10">
          <div className="card">
            <div className="row">
              <div className="col-md-6">
                <div className="images p-3">
                  <div className="text-center p-4">
                    <img id="main-image" src={item.Image} width="250" alt={item.Title} />
                  </div>
                  <div className="thumbnail text-center">
                    <img src={item.Image} width="70" alt={item.Title} />
                    <img src={item.Image} width="70" alt={item.Title} />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product p-4">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="fa fa-long-arrow-left"></i>
                      <span className="ml-1">{item.Gender}</span>
                    </div>
                    <i className="fa fa-shopping-cart text-muted"></i>
                  </div>
                  <div className="mt-4 mb-3">
                    <span className="text-uppercase text-muted brand">{item.Category}</span>
                    <h5 className="text-uppercase">{item.Title}</h5>
                    <div className="price d-flex flex-row align-items-center">
                      <span className="act-price">${item.Price}</span>
                      <div className="ml-2">
                        <small className="dis-price">${item.Price}</small>
                        
                      </div>
                    </div>
                  </div>
                  <p className="about">Shop from a wide range of Shoes from Foot Island. </p>
                  <div className="sizes mt-5"></div>
                  <div className="cart mt-4 align-items-center">
                    
                    {/* <Link to={`/cart/${item.id}`}> */}
                      <button onClick={() => addToCart(item)} className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button>
                      
                      
                    {/* </Link> */}
                    <i className="fa fa-heart text-muted"></i>
                    <i className="fa fa-share-alt text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
