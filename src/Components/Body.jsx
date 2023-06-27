import './Body.css'
// import frame from '../assets/lines-bg.webp'
import aboutImg from '../assets/recycled-shoe-store-home-about-image.jpg'
// import mainImg from '../assets/recycled-shoe-store-hero-image-bg.jpg'
import { useContext } from 'react'
import { footContext } from '../Context'
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

export default function Body() {
    const data = useContext(footContext);
    const { men } = data;

    return (
            <div className='body' >
        <div className='main-div'>
           
            
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
                        <h1 className='seehow-head'>See how your shoes are made</h1>
                        <p>Urna, felis enim orci accumsan urna blandit egestas mattis egestas feugiat viverra ornare donec <br /> adipiscing semper aliquet integer risus leo volutpat nulla enim ultrices</p>
                    </div>
                    <div className='seehow-2'>
                        <div className='seehow-left'>
                            {/* <div className='seehowleft'>
                                <h6>01.</h6>
                                <span>Pet canvas</span>
                                <p>Morbi eget bibendum sit adipiscing morbi ac nisl vitae maecenas nulla cursus</p>
                            </div> */}
                            {/* <div className='seehowleft'>
                                <h6>02.</h6>
                                <span>Algae foam + vegan glue</span>
                                <p>Enim tincidunt donec vulputate magna pharetra mattis in</p>
                            </div> */}

                        </div>
                        <div className='seehow-img'>
                            <img src='https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/recycled-shoe-store-how-shoes-are-made-image.png' />
                        </div>
                        <div className='seehow-right'>
                            {/* <div>
                                <h6>03.</h6>
                                <span>Organic cotton</span>
                                <p>A vel ipsum, sed dignissim elementum ultrices amet</p>
                            </div> */}
                                {/* <div>
                                    <h6>04.</h6>
                                    <span>Upcycled plastic bottles</span>
                                    <p>Pellentesque viverra amet netus facilisis amet felis odio tortor orci cursus est</p>
                                </div> */}


                        </div>

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
        </div>
            </div>
    )
}