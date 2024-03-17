"use client"
import { motion } from "framer-motion"
export default function SignUp()
{
    return <section className=" h-dvh w-dvw flex justify-center items-center">
        <div
         className=" bg-green-400 border-y-blue-700 w-3/4 max-w-96 rounded-xl "> 
         <form className=" px-6 pb-3 gap-y-5 flex flex-col" action=""><h1 className=" text-slate-900 font-bold py-5 text-3xl ">Sign up</h1>
        <input className=" pl-3 rounded-md placeholder:text-slate-900 placeholder:opacity-75 placeholder:text-lg h-11 focus:scale-x-105 focus:scale-y-110 focus:border-none focus:shadow-lg ease-in-out duration-300" required type="email" name="" id="" placeholder="email"/>
         <input className="  pl-3 rounded-md placeholder:text-slate-900 placeholder:opacity-75 placeholder:text-lg h-11 focus:scale-x-105 focus:scale-y-110 focus:shadow-lg  ease-in-out duration-300" required type="password" name="" id="" placeholder="password"/>
         <button type="submit" className=" bg-blue-600 p-2 rounded-lg text-lg font-bold text-white hover:bg-blue-700 ">submit</button>
        <div className="text-slate-900">already have an account? <button className=" underline font-semibold text-slate-700 hover:text-slate-900"> login</button></div> </form></div>
    </section>
}