
import { API_OPTIONS } from '../Utils/Costants';
import { useEffect } from 'react';
import { addpop } from '../Utils/nowMoviesSlice';
import { useDispatch ,useSelector} from "react-redux";
const usePopular = () => {
  
  const now=useSelector((store)=>store.nowMovies.pop)
    const dispatch=useDispatch()
    const getNowPlayingMovies = async () => {
      
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=1",
        API_OPTIONS
      );
      const json = await data.json();
     dispatch(addpop(json.results))
    };
  
    useEffect(() => {
      !now&&getNowPlayingMovies()
    }, [])
}

export default usePopular