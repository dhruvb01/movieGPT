import React from "react";
import Header from "./Header";
import { useState,useRef } from "react";
import { Validate } from "../Utils/Validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../Utils/Firebase'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {adduser} from '../Utils/userSlice'
import { BGIMG } from "../Utils/Costants";
const Login = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [state, changeState] = useState(true);
 const [message, changemsg] = useState(null);
  const handleClick = () => {
    changeState(!state);
  };
  const email=useRef(null);
  const password=useRef(null)
  function addus(user) {
    dispatch(adduser({email:user.email,}))
  }
  // const handleForm = (e)=>{
  //   const form={...formdata,
  //     [e.target.name]:e.target.value
  //   }
  //  changeform(form)
  // };
function handleSubmit(e){
e.preventDefault()
const msg=Validate(email.current.value,password.current.value)
changemsg(msg)
if(msg) return;

if(!state){
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    changemsg(errorMessage)
  });
  if(!message){
    changeState(!state)
  }
}

if(state){
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 

    const user = userCredential.user;
    // dispatch(
    //   adduser(user)
    addus(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    changemsg(errorMessage)
  });
  if(!message){
    navigate('./browse')
  }

}
}
  return (
    <>
      <Header></Header>
      <div className="">
        <div className="absolute">
          <img
            src={BGIMG}
            alt=""
          />
        </div>
        <form
          action=""
          className="text-white w-3/12 absolute my-36 mx-auto right-0 left-0 p-12 bg-black opacity-85 "
        >
          <h1 className="font-bold py-4 text-3xl">
            {state ? "Sign In" : "Sign Up"}
          </h1>
          {!state && (
            <input
            
              type="text"
              name="first name"
              id="first name"
              placeholder="First Name"
              className=" rounded-md border-2 bg-transparent  p-4 my-2 w-full"
            />
          )}
          {!state && (
            <input
              type="text"
              name="last name"
              id="last name"
              placeholder="Last Name"
              className=" rounded-md border-2 bg-transparent  p-4 my-2 w-full"
            />
          )}
          <input
          // onChange={(e)=>handleForm(e)}
            type="email"
            name="email"
            id="email"
            // value={formdata.email}
            ref={email}
            placeholder="email address"
            className=" rounded-md border-2 bg-transparent  p-4 my-2 w-full"
          />
          <input
          // onChange={(e)=>handleForm(e)}
          // value={formdata.password}
          ref={password}
            type="password"
            name="password"
            id="password"
            placeholder="password"
            className="rounded-md bg-transparent border-2 p-4 my-2 w-full"
          />
          <button onClick={(e)=>handleSubmit(e)} className="p-4 my-4 rounded-md bg-red-700 w-full">
            {state ? "Sign in" : "Sign up"}
          </button>
          <p className="cursor-pointer hover:underline" onClick={handleClick}>
            {state
              ? "New to Netflix? Signup now"
              : "Already registered? Sign in now"}
          </p>
          
        <p className="font-semibold text-red-600">{message}</p>
        </form>
      </div>
    </>
  );
};

export default Login;
