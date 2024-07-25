import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import {removeuser} from '../Utils/userSlice'
import {  useNavigate } from 'react-router-dom';
import { LOGO } from '../Utils/Costants'
import { change } from '../Utils/gptSlice';
const Header = () => {
  const Navigate=useNavigate()
  const dispatch=useDispatch()
  const user = useSelector((store)=>store.user)

  function handleDispatch(){
    dispatch(removeuser())
  }
  function handletoggle(){
dispatch(change())
  }

  
  function handleClick(){
    handleDispatch()
    Navigate('/')
  }
  
  const toggle=useSelector((store)=>store.gptsearch)
  
  return (
    <div className='absolute  z-50 w-[100%] px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between'>
        <img className='w-44 mx-auto md:mx-0' src={LOGO} alt="" />
        {user&&<div className='flex'>
          <button className='py-2 px-4 mx-4 hover:bg-opacity-70 my-2 bg-purple-800 text-white rounded-md' onClick={handletoggle}>{toggle?"Go Back":"GPT Search"}</button>
    <button className='bg-red-600 z-30  right-2 my-5 p-2 text-white font-bold rounded-md' onClick={handleClick}>signout</button>
    </div>}
      </div> )
}

export default Header