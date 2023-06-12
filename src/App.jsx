import './Components/User/Registration';
import './App.css'
// import Registration from './Components/User/Registration';
// import { Login } from './Components/User/Login';
import { useState } from 'react';
import NavBar from './Components/NavBar';
import Body from './Components/Body';
import MocCollection from "./Components/MocCollection.jsx"
import { footContext } from "./Context";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');
  const [men, setMen] = useState(MocCollection);
  const menCollection = { men, setMen };

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }


  return (
    <>
      <footContext.Provider value={menCollection}>

        <div className='app'>
          <NavBar />
          {/* {
          currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Registration onFormSwitch={toggleForm} />
        }
      */}

          <Body />
        </div>
      </footContext.Provider>
    </>
  )
}

export default App
