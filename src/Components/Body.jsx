import './Body.css'
// import frame from '../assets/lines-bg.webp'
import aboutImg from '../assets/recycled-shoe-store-home-about-image.jpg'
import { useContext } from 'react'
import { footContext } from '../Context'
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Body() {
    const data = useContext(footContext);
    const { men } = data;

    return (
        <div className='main-div'>
            <body className='body' >
                <div className='main-img' >

                    <div className='main-content'>
                        <h1>Love the Planet <br /> we walk on</h1>
                        <p>Bibendum fermentum, aenean donec pretium aliquam blandit <br /> tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
                        <Link to='/men'><button>SHOP MEN</button></Link>
                        <Link to='/women'><button>SHOP WOMEN</button></Link>
                    </div>

                </div>
                <div>

                    {/* <img src={frame} /> */}
                    <div className='about'>
                        <div className='2nd-img'>
                            <img src={aboutImg} />
                        </div>
                        <div className='about-us'>
                            <h6 className='aboutUs'>ABOUT US</h6>
                            <h2 className='about-head'>Selected materials<br /> designed for comfort<br /> and sustainability</h2>
                            <p>Nullam auctor faucibus ridiculus dignissim sed et auctor sed eget auctor nec sed elit nunc, magna non urna amet ac neque ut quam enim pretium risus gravida ullamcorper adipiscing at ut magna.</p>
                            <span className='read-more'>READ MORE</span>
                            <div className='line'>

                            </div>

                        </div>

                    </div>

                </div>
                <div className='see-how'>
                    <div >

                    </div>

                </div>
                <div className='our-best-seller'>

                    <h4 style={{ fontSize: '30px' }}>Our Best Sellers</h4>
                    <h4>VIEW ALL BEST SELLERS <div className='line2'></div></h4>

                </div>

                <div className="container">

                    {men.map((item, index) => {

                        return (

                            <div className='shoe ' key={index}>
                                <img src={item.Image} />
                                <div className='shoe-box'>
                                    <Link to={`/viewProduct/${item.id}`}> <button>QUICK VIEW</button></Link>
                                    <h2>{item.Title}</h2>
                                    <h4>${item.Price}</h4>
                                    <h3><CiStar />
                                        <CiStar />
                                        <CiStar />
                                        <CiStar />
                                        <CiStar /></h3>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </body>
        </div>
    )
}