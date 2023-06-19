import { useContext } from "react"
import './Men.css'
import { footContext } from "../Context"
import { IoIosMenu } from 'react-icons/io';
import { Link } from 'react-router-dom';


export default function Men() {
    const data = useContext(footContext);
    const { men } = data;
    const filteredShoe = men.filter((item) => item.Gender === 'Male')
    
    return (


        <div>
            <div className="men">
                <div className="men-box">

                    <h1>Men</h1>
                    <button><IoIosMenu />FILTER SHOES</button>
                </div>
                <div className="container2">

                    <div className="main">

                        {filteredShoe.map((item, index) => {

                            return (
                                <div key={index} className="shoe-box2">
                                    <img src={item.Image} />
                                    <div className="men-btn">
                                        <Link to={`/viewProduct/${item.id}`}><button>QUICK VIEW</button></Link>
                                        <h3>{item.Title}</h3>
                                        <h4 style={{ color: "darkgrey" }}>${item.Price}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </div>



        </div>
    )
}