import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../Utils/Costants";
const useTrailor=(id)=>{
const [trailer,settrailer]=useState(null)
async function getMoviedetail() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const trailers = json.results.filter((result) => {
      return result.type == "Trailer";
    });
    const trailer = trailers[0];
    settrailer(trailer);
  }
  
  useEffect(() => {
    !trailer&&getMoviedetail();
  }, []);

return trailer
}
export default useTrailor;