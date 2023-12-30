// import React ,{useEffect,useState} from 'react'

// export default function Banner() {
  


//   return (
// //   <div class="card bg-dark text-white">
// //   <img class="card-img" src="https://image.tmdb.org/t/p/original/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg" alt="Card image"/>
// //   <div class="card-img-overlay">
// //     <h5 class="card-title">Card title</h5>
// //     <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
// //     <p class="card-text">Last updated 3 mins ago</p>
// //   </div>
// // </div>

// <div className="Banner">
//   <img className="Banner-img" src="https://image.tmdb.org/t/p/original/5YZbUmjbMa3ClvSW1Wj3D6XGolb.jpg" alt="Card image cap"/>
//   <p className="Banner-title">Guardians of the Galaxy Vol. 3</p>
//   <p className="Banner-info">Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defen
// d the universe along with protecting one of their own.A mission that, if not completed successfully, could 
// quite possibly lead to the end of the Guardians as we know them.</p>
// </div>

//   )
// }

//  ===============================================
import React, { Component } from 'react'
import axios from 'axios';
//import { movies } from './Moviesdata'
export default class Banner extends Component {
    constructor(){
      super();
      this.state={
       bnarr:[],
       i:0
       
      }
    }
     async componentDidMount(){
      var j=Math.floor(
        Math.random() * (20 - 3 + 1) + 3
      );
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${j}`);
      let r=res.data;
      this.setState({
          bnarr:[...r.results],
      });
     }


  render() {
   // let movie=movies.results[0]
    return (
      <div classname='bannerout' >
        {
        this.state.bnarr.length==0?
<div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
:
<div  ClassName='banner' onClick={()=>this.setState({i:(this.state.i+1)%5})}>
   <img src={`https://image.tmdb.org/t/p/original${this.state.bnarr[this.state.i].backdrop_path}`}   className="card-img-top cardimgb" /> 
  {/* <div className="card-body"> */}
    <h2 className="card-title card-name">{this.state.bnarr[this.state.i].original_title}</h2>
    <p className="card-text card-overview">{this.state.bnarr[this.state.i].overview}</p>
    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
  {/* </div> */}
</div>
        }
        
      </div>
    )
  }
}