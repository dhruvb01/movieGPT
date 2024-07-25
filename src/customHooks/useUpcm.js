
import { API_OPTIONS } from '../Utils/Costants';
import { useEffect } from 'react';
import { addupcm } from '../Utils/nowMoviesSlice';
import { useDispatch ,useSelector} from "react-redux";
const useUpcm = () => {
  
  const now=useSelector((store)=>store.nowMovies.upcm)
    const dispatch=useDispatch()
    const getNowPlayingMovies = async () => {
      console.log("1")
      const data = await fetch(
        'https://api.themoviedb.org/3/movie/upcoming?page=1',
        API_OPTIONS
      );
      const json = await data.json();
     dispatch(addupcm(json.results))
    };
  
    useEffect(() => {
      !now&&getNowPlayingMovies()
    }, [])
}

export default useUpcm