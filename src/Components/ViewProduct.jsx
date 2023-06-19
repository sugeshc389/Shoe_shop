// import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext } from "react"
import { footContext } from "../Context"
import { Link, useParams } from "react-router-dom";
import './ViewProduct.css'

export default function ViewProduct() {
    const { id } = useParams();
    const data = useContext(footContext);
    const { men } = data;
    const filteredShoe = men.filter((item) => item.id === parseInt(id));

    return (

        <div className="container3">
            {filteredShoe.map((item, index) =>

                <div className="row d-flex justify-content-center" key={index}>
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4"> <img id="main-image" src={item.Image} width="250" /> </div>
                                        <div className="thumbnail text-center"> <img src={item.Image} width="70" /> <img src={item.Image} width="70" /> </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">{item.Gender}</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                                        </div>
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{item.Category}</span>
                                            <h5 className="text-uppercase">{item.Title}</h5>
                                            <div className="price d-flex flex-row align-items-center"> <span className="act-price">${item.Price}</span>
                                                <div className="ml-2"> <small className="dis-price">${item.Price}</small> <span>40% OFF</span> </div>
                                            </div>
                                        </div>
                                        <p className="about">Shop from a wide range of Shoes from Foot Island. </p>
                                        <div className="sizes mt-5">

                                        </div>
                                        <div className="cart mt-4 align-items-center"> <Link to={`/addToCart/${item.id}`}><button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button></Link>  <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </div>
    )
}