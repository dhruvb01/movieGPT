import React, { useState } from 'react'
import Gptsuggestion from './Gptsuggestion'
import Gptbar from './Gptbar'

import { useSelector } from 'react-redux'
import { BGIMG } from '../Utils/Costants'
const Gptsearch = () => {
 const [lang,chlang]=useState("English")
 
  function handlechange(event){
chlang(event.target.value)
  }
  
  const toggle=useSelector((store)=>store.gptsearch)
  return (
    <div>

     {toggle&& <select className='absolute z-50 right-56 mt-6 p-2 bg-black text-yellow-50 rounded-md' onChange={(event)=>handlechange(event)}>
        <option value="English">English</option>
        <option value="Hindi">Hindi</option>
      </select>}
      <div className='-z-50 absolute'>
      <img src={BGIMG} className='' alt="" />
      </div>
      <div className='md:p-0 pt-[30%]'>
<Gptbar lang={lang}></Gptbar>
<Gptsuggestion></Gptsuggestion>
    </div>
    </div>
  )
}

export default Gptsearch