import './Components/User/Registration';
import './App.css'
import { useState } from 'react';
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import MocCollection from "./Components/MocCollection.jsx"
import { footContext } from "./Context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Men from './Components/Men';
import Women from './Components/Women';
import Collection from './Components/Collection';
import ViewProduct from './Components/ViewProduct';
import AddToCart from './Components/AddToCart';
import Registration from './Components/User/Registration';
import Login from './Components/User/Login';


function App() {

  const [men, setMen] = useState(MocCollection);
  const [password, setPassword] = useState([]);
  const user = { password, setPassword, men, setMen }


  return (
    <>
      <BrowserRouter>
        <footContext.Provider value={user}>
          <div className='app'>

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

            </Routes>
          </div>
        </footContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
