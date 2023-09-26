import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cookie from 'js-cookie';


export default function Trending() {
  var [Trending,setTrending]=useState([]);
  var [top,setTop]=useState(0);
   var [topmovie,setTopmovie]=useState([]);

   const navigate = useNavigate();
   useEffect(()=>{
    auth();
    setInterval(() => {
      auth2();
    }, 5000);
    },[]);

    var auth2= ()=>{
      var c=localStorage.getItem('ashokcookie');
      if(c==null||c.length<5)navigate('/signin');
    }
    var auth=async ()=>{
      var c=localStorage.getItem('ashokcookie');
  //console.log("=",c);
  if(c==null||c.length<5)navigate('/signin');
  else{
  //c=c.substring(0);
  c=JSON.parse(c);
 // console.log("->",c);
      
      var d=await axios.post('https://mernmovieashokbk.onrender.com/isauthenticated',c,
      {headers: {'content-type': 'application/x-www-form-urlencoded'}}
       
      );
      if(!d){
        navigate('/signin');
      }}
    }

  useEffect(()=>{
    starter();
  },[])
  var starter=async()=>{
 
    var d=await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=1");
  
  d=d.data;
  d=d.results;
  //console.log(d);
  d.sort(function(a, b){return b.vote_average - a.vote_average});
  //console.log(d);
  setTimeout(() => {
    setTrending([...d]);
  setTop(3);
  }, 50);
  
  }

  useEffect(()=>{
    var array=[];
   for(var i=0;i<top;i++){
   array.push(Trending[i]);
   }
   setTimeout(() => {
    setTopmovie([...array]);
   }, 100);
  
  },[top])

function handleTop(t){
if(t>10)t=1;
if(t<1)t=10;
setTop(t);
}
  return (
    <div>
       <h1 className='tren-h1'>TOP:{top}</h1>
       <div className='tren-div'>
      {
       topmovie.map((mdata,index)=>(
        <div key={mdata.id} className='fav-movie'>
           <h6>{index+1}</h6>
           <img className="fav-img" src={`https://image.tmdb.org/t/p/original${mdata.backdrop_path}`}alt="Card"/>
          <h6 style={{width:"100%"}}>{mdata.title}</h6>
         <h6 style={{width:"100%",display:"flex",justifyContent:"end",marginRight:"1%"}}>Rating: {mdata.vote_average}</h6>
        </div>
       ))

      }
    </div>
    {/* <div className='tren-div'><button onClick={()=>setTop(top-1)}>-</button><button onClick={()=>setTop(top+1)}>+</button></div> */}
    <nav aria-label="Page navigation example " className='List-page'>
    <div className="page">
    <button className="List-page-link" onClick={()=>handleTop(top-1)}>-</button>
    <button className="List-page-link" onClick={()=>handleTop(top+1)}>+</button>
      </div>
</nav>
    
    </div>
  )
}
