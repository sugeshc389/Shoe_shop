import { useContext } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { footContext } from '../Context';
import './Women.css'

export default function Women() {
    const data = useContext(footContext)
    const { men } = data;
    const filteredShoe = men.filter((item) => item.Gender === 'Female')


    console.log(men);
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
                                    <img src={item.Image}  />
                                    <div className='women-btn'>
                                    <button>QUICK VIEW</button>

                                    <h3>{item.Title}</h3>
                                    <h4 style={{color:"darkgray"}}>${item.Price}</h4>
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