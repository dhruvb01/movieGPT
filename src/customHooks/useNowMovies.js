
import { API_OPTIONS } from '../Utils/Costants';
import { useEffect } from 'react';
import { addnow } from '../Utils/nowMoviesSlice';
import { useDispatch ,useSelector} from "react-redux";
const useNowMovies = () => {
    const dispatch=useDispatch()
    const now=useSelector((store)=>store.nowMovies.nowPlaying)
    const getNowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
      const json = await data.json();
     dispatch(addnow(json.results))
    };
  
    useEffect(() => {
      !now&&getNowPlayingMovies()
    }, [])
}

export default useNowMovies