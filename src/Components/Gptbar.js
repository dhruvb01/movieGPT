import React, { useRef } from 'react'
import {main} from '../Utils/openai'
const Gptbar = ({lang}) => {
    const searchText=useRef(null)
    const language={
        English:{
    ph:"what would you like to watch?",
    btn:"Search"
        },
        Hindi:{
          ph:"आप क्या देखना चाहेंगे?",
          btn:"खोजे"
        }
      }

    const handleclick=()=>{
        const gptQuery =
        "Act as a Movie Recommendation system and suggest some movies for the query : " +
        searchText.current.value +
        ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
       
       main(gptQuery)
      }
  return (
    <div className='pt-[20%] flex justify-center z-50'>
        <form className=' w-1/2 bg-black grid grid-cols-12' action="" onSubmit={(e)=>e.preventDefault()}>
      <input ref={searchText} type="text" className='p-4 m-4 col-span-9' placeholder={language[lang].ph} />
<button  className='py-2 px-4 m-4 bg-red-700 col-span-3 text-white rounded-lg' onClick={handleclick}>{language[lang].btn}</button>
        </form>
    </div>
  )
}

export default Gptbar