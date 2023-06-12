import './Body.css'
// import frame from '../assets/lines-bg.webp'
import aboutImg from '../assets/recycled-shoe-store-home-about-image.jpg'

export default function Body() {

    return (
        <div className='main-div'>
            <body className='body' >
                <div className='main-img' >
                    <div className='main-content'>
                        <h1>Love the Planet <br /> we walk on</h1>
                        <p>Bibendum fermentum, aenean donec pretium aliquam blandit <br /> tempor imperdiet arcu arcu ut nunc in dictum mauris at ut.</p>
                        <button>SHOP MEN</button>
                        <button>SHOP WOMEN</button>
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
                    

                </div>
            </body>
        </div>
    )
}