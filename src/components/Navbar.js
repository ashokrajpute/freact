import React ,{useState,useEffect}from 'react'
import { Link } from "react-router-dom";
import cookie from 'js-cookie';
export default function Navbar() {
  
  var [useremail,setuseremail]=useState('123456789');
  var [username,setusername]=useState('123456789');
useEffect(()=>{
  changeNavbar();
  setInterval(() => {
    changeNavbar();
  }, 2000);
  
});
    

function changeNavbar(){
  // console.log('show',show);
  var c=localStorage.getItem('ashokcookie');
   //console.log("=>",c);
   if(c==null||c.length<5){
   // console.log("h");
   console.log("nav");
    //if(useremail!=='123456789'){setuseremail('123456789');console.log('bar');}
    localStorage.setItem('ashokcookie','random');
    setuseremail('123456789');
   }
   else if(c=='random'){
   console.log('nochange');
   }
   else{
     c=JSON.parse(c);
     //console.log("->",c);
    setuseremail(c.e);
    setusername(c.e.substr(0,c.e.length - 10));
 
   }
 
  }

  return (
   
    <nav className="navbar navbar-expand-lg  navbar-dark bg-primary" style={{padding:"0.2rem",margin:"0rem"}}>
        <Link to="/" className="navbar-brand nav-link"style={{fontSize:"x-large",padding:"0.3rem  0.3rem 0.3rem 2rem",fontWeight:"bold"}}>Movies</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
    <li className="nav-item ">
      <Link to="/Search" className="nav-link " style={{fontSize:"1.1rem",padding:"0.5rem"}}>Search</Link>
      </li>
      <li className="nav-item ">
      <Link to="/favourites" className="nav-link " style={{fontSize:"1.1rem",padding:"0.5rem"}}>Favourites</Link>
      </li>
      <li className="nav-item">
      <Link to="/trending" className="nav-link"style={{fontSize:"1.1rem",padding:"0.5rem"}}>  Trending</Link>
      </li>{
useremail!=='123456789'?
<>
<li className="nav-item">
<Link to="/logout" className="nav-link"style={{fontSize:"1.1rem",padding:"0.5rem"}}> logout</Link>
</li> 
<li className="nav-item">
<Link to="/logout" className="nav-link"style={{fontSize:"1.1rem",padding:"0.5rem",color:'white'}}>{username}</Link>
</li> 
</>  :
<>
<li className="nav-item">
<Link to="/login" className="nav-link"style={{fontSize:"1.1rem",padding:"0.5rem"}}> Sign In</Link>
</li>
<li className="nav-item">
<Link to="/signup" className="nav-link"style={{fontSize:"1.1rem",padding:"0.5rem"}}> Sign Up</Link>
</li>

</>


      }
          
    </ul>
  </div>
</nav>

   
  )
}
