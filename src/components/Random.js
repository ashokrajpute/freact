import React from 'react'
import {useSelector} from "react-redux";

export default function Random() {
    const movie=useSelector((state)=> state.list.movieData)
    console.log(movie)
  return (
    <div className='frandom'>
    <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="randomimg 
    "></img> 
      <div>
        <div>
            <div className='movie-title'>{movie.title}</div>
            <div className='movie-desc'>Description</div>
            <div className='movie-over'>{movie.overview}</div>
            <div className='movie-Rede'>Release Date : <span>{movie.release_date}</span></div>
            
            <div className='movie-rating'>IMDB Rating : <span>{movie.vote_average}/10</span></div>
            <div className='movie-lang'>Language : <span >{movie.original_language}</span></div>
        </div>
      </div>
    </div>
  )
}
