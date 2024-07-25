import React from 'react'
import Video from './Video'
import Videotitle from './Videotitle'
import { useSelector } from 'react-redux'
const Pimary = () => {
    const nowmovie=useSelector((store)=>store.nowMovies?.nowPlaying)
 if(!nowmovie) return
//const random=Math.floor(Math.random()*(nowmovie.length))
const popular=nowmovie[0]
const {original_title,overview,id}=popular
  return (
    <div className="w-[100%] top-0 pt-0 bg-black md:pt-0">
        
        <Videotitle title={original_title} overview={overview}></Videotitle>
        <Video id={id}></Video>
    </div>
  )
}

export default Pimary