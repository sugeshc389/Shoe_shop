import { useContext } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { footContext } from '../Context';
import './Women.css'
import { Link } from 'react-router-dom';

export default function Women() {
    const data = useContext(footContext)
    const { men } = data;
    const filteredShoe = men.filter((item) => item.Gender === 'Female')


    return (
        <div>
            <div className="women">
                <div className='women-box'>
                    <h1>Women</h1>
                    <button><IoIosMenu />FILTER SHOES</button>
                </div>
                <div className='container3'>


                    <div className='main1'>

                        {filteredShoe.map((item, index) => {
                            return (
                                <div key={index} className='shoe-box3'>
                                    <img src={item.Image} />
                                    <div className='women-btn'>
                                        <Link to={`/viewProduct/${item.id}`}><button>QUICK VIEW</button></Link>

                                        <h3>{item.Title}</h3>
                                        <h4 style={{ color: "darkgray" }}>${item.Price}</h4>
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