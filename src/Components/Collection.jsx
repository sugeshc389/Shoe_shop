import { IoIosMenu } from 'react-icons/io';
import './Collection.css'
import { useContext } from 'react';
import { footContext } from '../Context';

export default function Collection() {
    const data = useContext(footContext)
    const { men } = data;
    return (
        <div>
            <div className="collection">
                <div className='coll-box'>
                    <h1>Shop</h1>
                    <button><IoIosMenu />FILTER SHOES</button>
                </div>
                <div className='containder4'>
                    <div className='main2'>
                        {
                            men.map((item, index) => {
                                return (
                                    <div key={index} className='shoe-box4'>
                                        <img src={item.Image} />
                                        <div className='coll-btn'>
                                            <button>QUICK VIEW</button>
                                            <h3>{item.Title}</h3>
                                            <h4 style={{ color: 'darkgray' }}>${item.Price}</h4>
                                        </div>
                                    </div>
                                )
                            })
                        }


                    </div>

                </div>
            </div>
        </div>
    )
}