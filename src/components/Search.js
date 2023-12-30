import React ,{useState,useEffect} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cookie from 'js-cookie';
import {movies} from './Moviesdata'
export default function Search() {
    const navigate = useNavigate();
  
    var [srch,setsrch]=useState("");
    var [displaym,setdisplaym]=useState([]);
   
     
   
   
   
    useEffect(()=>{
      auth();
     //interv();
     // setInterval(() => {
     //   auth2();
     // },5000);
     

    
     
     },[]);

     // var auth2= ()=>{
     //   var c=localStorage.getItem('ashokcookie');
     //   if(c==null||c.length<5)navigate('/signin');
     // }
     var auth=async ()=>{
       var c=localStorage.getItem('ashokcookie');
       //console.log("=-",c);
       if(c==null||c.length<5||c=='random'){console.log('herefav');navigate('/login');}
       else{
       //c=c.substring(0);
       c=JSON.parse(c);
       //console.log("->",c);
       
       var d=await axios.post('/isauthenticated',c,
       {headers: {'content-type': 'application/x-www-form-urlencoded'}}
        
       );
       
      if(!d){
         navigate('/login');
       }
       else{
starter();
       }
     }
       
     }
   
    var starter=async()=>{
        console.log("starter");
    }

   var handlesrch=(e)=>{
   console.log(e.target.value);
   setsrch(e.target.value);
   }

   
   
   
  
   var handlesubmit=(e)=>{
    console.log("hp");
    e.preventDefault();
    if(srch==""){return;}

  var array=[];var t;var tosrch=srch.toLowerCase();
 
  movies.filter((m)=>{
   
  t=m.title.toLowerCase();
  if(t.includes(tosrch)){
    array.push(m);
   
  }
  })
  setTimeout(() => {
   
    setdisplaym([...array]);
  }, 200);
  setTimeout(() => {
         setsrch("");
       }, 250);

  
  
  
  }
   //=====
     return (
        <div className='ssflex'>
       <div className='sbox'>
         
       <form className="s-fav-form">
         <input className="s-inp" type="search" placeholder="Movie name" aria-label="Search" value={srch} onChange={handlesrch}/>
         <button className="s-btn " /*style={{outline:"none",borderRadius:"5px",height:"65%",border:"0px"}}*/ type="submit" onClick={handlesubmit}>Search</button>
         </form> 

       </div>
       <div className='s-mdata'>{
        displaym.map((mdata,index)=>(
            <div key={mdata.id} className='fav-movie'>
               <h6>{index+1}</h6>
               <img className="fav-img" src={`https://image.tmdb.org/t/p/original${mdata.backdrop_path}`}alt="Card"/>
              <h6 style={{width:"100%"}}>{mdata.title}</h6>
             <h6 style={{width:"100%",display:"flex",justifyContent:"end",marginRight:"1%"}}>Rating: {mdata.vote_average}</h6>
            </div>
           ))
    
          }
       </div>
       </div>
     )
 }


