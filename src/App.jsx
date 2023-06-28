import './Components/User/Registration';
import './App.css'
import { useState } from 'react';
import { footContext } from "./Context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MocCollection from "./Components/MocCollection.jsx"
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import Men from './Components/Men';
import Women from './Components/Women';
import Collection from './Components/Collection';
import ViewProduct from './Components/ViewProduct';
import AddToCart from './Components/AddToCart';
import Registration from './Components/User/Registration';
import Login from './Components/User/Login';
import Footer from './Components/Footer';
import AdminPage from './Components/Admin/AdminPage';
import Products from './Components/Admin/Products';
import AddProducts from './Components/Admin/AddProducts';
import Users from './Components/Admin/Users';
import AdminLogin from './Components/Admin/AdminLogin';



function App() {
  const [cartItems, setCartItems] = useState([]);
  const [men, setMen] = useState(MocCollection);
  const [password, setPassword] = useState([]);
  const [addProduct, setAddProduct] = useState([]);
  const user = { password, setPassword, men, setMen, setCartItems, cartItems, addProduct, setAddProduct }


  return (
    <>
      <div className='app'>
        <BrowserRouter>
          <footContext.Provider value={user}>

            <NavBar />
            <Routes>

              <Route path='/' Component={Body} />
              <Route path='/men' Component={Men} />
              <Route path='/women' Component={Women} />
              <Route path='/collection' Component={Collection} />
              <Route path='/viewProduct/:id' Component={ViewProduct} />
              <Route path='/addToCart/:id' Component={AddToCart} />
              <Route path='/cart' Component={AddToCart} />
              <Route path='/register' Component={Registration} />
              <Route path='/login' Component={Login} />
              <Route path='/admin' Component={AdminPage} />
              <Route path='/products' Component={Products} />
              <Route path='/addproducts' Component={AddProducts} />
              <Route path='/users' Component={Users}/>
              <Route path='/adminlogin' Component={AdminLogin}/>

            </Routes>
            <Footer />
          </footContext.Provider>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
