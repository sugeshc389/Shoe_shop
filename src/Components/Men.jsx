import { useContext } from "react"
import './Men.css'
import { footContext } from "../Context"
import { IoIosMenu } from 'react-icons/io';


export default function Men() {

    const data = useContext(footContext);
    const { men } = data;
    const filteredShoe = men.filter((item) => item.Gender === 'Male')
    console.log(filteredShoe);
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
                                    <button>QUICK VIEW</button>
                                    <h3>{item.Title}</h3>
                                    <h4 style={{color:"darkgrey"}}>${item.Price}</h4>
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