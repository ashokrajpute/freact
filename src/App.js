import Banner from './components/Banner';
import Favourites from './components/Favourites';
import Footer from './components/Footer';
import Lists from './components/Lists';
import Logout from './components/Logout';
import Navbar from './components/Navbar';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Trending from './components/Trending';
import Notfound from './components/Notfound';
import Random from './components/Random';


import { Routes, Route } from "react-router-dom";
import React from "react"
import './App.css';
import Search from './components/Search';

function App() {
  return (
    <div className='outer-div'>
   <Navbar/>
   <Routes>
       
        <Route exact path='/'element={< Lists />} />
        <Route exact path="/favourites" element={<Favourites/>} />
        <Route exact path="/login" element={<Signin/>} />
        <Route exact path="/signup" element={<Signup/>} />
        <Route exact path="/trending" element={<Trending/>} />
        <Route exact path="/logout" element={<Logout/>}/>
        <Route exact path="/Search" element={<Search/>}/>
        <Route exact path="/random" element={<Random/>}/>
        <Route path="*" element ={<Notfound/>}/>
        
      </Routes>
   <Footer/>
   
   </div>
  );
}

export default App;
