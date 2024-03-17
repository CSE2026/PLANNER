
"use client";
import Style from "./page.module.css";
import React from "react"
import { motion } from "framer-motion";
import SignUp from "./pages/signup/pages";
export default function Home() {
  
  return (
    <section className=" h-dvh flex justify-center items-center">
      <SignUp/>
    </section>
  );
}
