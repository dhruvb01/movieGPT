import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../Utils/userSlice'
import nowMovieReducer from '../Utils/nowMoviesSlice'
import gptsearchreducer from './gptSlice'
const appStore=configureStore({
    reducer:{
        user:userReducer,
        nowMovies:nowMovieReducer,
gptsearch:gptsearchreducer
       }
}
   
)
export default appStore