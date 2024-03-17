"use client"
import { motion } from "framer-motion"
import { useState } from "react"
import { FaGoogle,FaGithub } from 'react-icons/fa';
export default function SignUp()
{
    const [sign,setSign]=useState(true)
    return <section className=" h-dvh w-dvw flex justify-center items-center ">
       {sign? <div
         className=" bg-planarDark backdrop-opacity-55 backdrop-blur-md  w-3/4 max-w-96 rounded-xl"> 
         <form className=" text-planarWhite  px-6 pb-3 gap-y-5 flex flex-col " action=""><h1 className=" text-planarOrange  font-medium py-5 text-3xl ">Log In</h1>
        <input className=" bg-planarOrange pl-3 rounded-md placeholder:text-slate-900 placeholder:opacity-75 placeholder:text-lg h-11 focus:border-none focus:scale-x-105 focus:scale-y-110 focus:shadow-lg ease-in-out duration-300" required type="email" name="" id="" placeholder="email"/>
         <input className=" bg-planarOrange  pl-3 border-none rounded-md placeholder:text-slate-900 placeholder:opacity-75 placeholder:text-lg h-11 focus:scale-x-105 focus:scale-y-110 focus:shadow-lg  ease-in-out duration-300" required type="password" name="" id="" placeholder="password"/>
         <button type="submit" className=" bg-blue-600 p-2 rounded-lg text-lg font-bold text-white hover:bg-blue-700 ">submit</button>
         <div className="flex justify-around w-24 self-center"><FaGithub size={25}/>| <FaGoogle size={25}/> </div>
        <div className=" text-planarWhite">Dont have an account? <button onClick={()=>setSign(false)} className="text-planarViolet hover:opacity-80 underline font-semibold"> SignUp</button></div> </form></div>:
        <div
         className=" bg-planarDark backdrop-opacity-55 backdrop-blur-md border-y-blue-700 w-3/4 max-w-96 rounded-xl"> 
         <form className="text-planarWhite px-6 pb-3 gap-y-5 flex flex-col " action=""><h1 className=" text-planarViolet font-medium py-5 text-3xl ">SignUp</h1>
         <input className=" bg-planarViolet pl-3 rounded-md placeholder:text-slate-900 placeholder:opacity-75 placeholder:text-lg h-11 focus:border-none focus:scale-x-105 focus:scale-y-110 focus:shadow-lg ease-in-out duration-300" required type="text" name="" id="" placeholder="name"/>
        <input className="  bg-planarViolet pl-3 rounded-md placeholder:text-slate-900 placeholder:opacity-75 placeholder:text-lg h-11 focus:border-none focus:scale-x-105 focus:scale-y-110 focus:shadow-lg ease-in-out duration-300" required type="email" name="" id="" placeholder="email"/>
         <input className="  bg-planarViolet  pl-3 border-none rounded-md placeholder:text-slate-900 placeholder:opacity-75 placeholder:text-lg h-11 focus:scale-x-105 focus:scale-y-110 focus:shadow-lg  ease-in-out duration-300" required type="password" name="" id="" placeholder="password"/>
         <button type="submit" className=" bg-blue-600 p-2 rounded-lg text-lg font-bold text-white hover:bg-blue-700 ">submit</button>
         <div className="flex justify-around w-24 self-center"><FaGithub size={25}/>| <FaGoogle size={25}/> </div>
         <div className="text-planarWhite ">Already have an account? <button onClick={()=>setSign(true)} className="text-planarOrange underline font-semibold hover:opacity-80"> LogIn</button></div> </form></div>}
    </section>
}