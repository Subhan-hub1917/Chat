import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'

import SignIn from './Pages/Signin';
import { useState } from 'react';
import MyContext from './MyContext';
import Home from './Pages/Home';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import VideoPage from './Components/VideoPage.js';


const App = () => {

    const [userName,setUserName]=useState('User')

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
        <BrowserRouter>
            <MyContext.Provider value={{display,setDisplay,handleDisplay}}>
            <Routes>
                <Route exact path='/' element={<SignIn setUserName={setUserName}/>} />
                <Route  path='/Home' element={<Home/>} />
                <Route  path='/VideoPage/:room' element={<VideoPage userName={userName}/>  } />
            </Routes>
                </MyContext.Provider>
        </BrowserRouter>
        </>
    );
    
}

export default App;
