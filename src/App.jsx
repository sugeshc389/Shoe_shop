import './Components/User/Registration';
import './App.css'
// import Registration from './Components/User/Registration';
// import { Login } from './Components/User/Login';
import { useState } from 'react';
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import MocCollection from "./Components/MocCollection.jsx"
import { footContext } from "./Context";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Men from './Components/Men';
import Women from './Components/Women';
import Collection from './Components/Collection';

function App() {
  // const [currentForm, setCurrentForm] = useState('login');
  const [men, setMen] = useState(MocCollection);
  const menCollection = { men, setMen };

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }


  return (
    <>
      <BrowserRouter>
        <footContext.Provider value={menCollection}>
            <div className='app'>
              <NavBar />
          <Routes>
              {/* {
              currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Registration onFormSwitch={toggleForm} />
            }
          */}
             
              <Route path='/' Component={Body}/>
              <Route path='/men' Component={Men}/>
              <Route path='/women' Component={Women}/>
              <Route path='/collection' Component={Collection}/>

          </Routes>
            </div>
        </footContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
