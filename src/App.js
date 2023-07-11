import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import SignIn from './Pages/Signin';
import { useState } from 'react';
import MyContext from './MyContext';
import Home from './Pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
const App = () => {

    const [exist,setExist]=useState(false)
    const [display,setDisplay]=useState(false)
    const handleDisplay=()=>{
        setDisplay(true)
        console.log(display)
    }
    onAuthStateChanged(auth, (currentUser)=>{
        setExist(currentUser)
    });
    return(
        <>
            <MyContext.Provider value={{display,setDisplay,handleDisplay}}>

            { !exist ? <SignIn/>
             : 
             <Home/>
            }
            </MyContext.Provider>
        </>
    );
    
}
 
export default App;