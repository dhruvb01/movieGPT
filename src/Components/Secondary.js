import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './Movielist';
const Secondary = () => {
  
  const movies = useSelector((store) => store.nowMovies);
 
  return (
    movies.nowPlaying && (
      <div className="bg-black">
        <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlaying} />
          <MovieList
            title={"Upcoming Movies"}
            movies={movies.upcm}
          />
          <MovieList title={"popular"} movies={movies.pop} />
        </div>
      </div>
  )
)
}

export default Secondary