
"use client";
import React from "react";
import { FocusCards } from "./ui/focus-cards";


export default function Themes(){
    const cards = [
        {
          title: "Education",
          src: "/graduation.png",
        },
        {
          title: "community empowerment",
          src: "/empowerment.png",
        },
        {
          title: "Cyber Crime Prevention",
          src: "/spyware.png",
        },
        {
          title: "Smart City Development",
          src: "/smart-city1.png",
        },
        {
          title: "Health Care Innovation",
          src: "/cardiogram.png",
        },
        {
          title: "Finance",
          src: "/salary.png",
        },
            ]
    return (
        <div id="themes" className="min-h-screen  mt-20 " >
            <h1 className="mx-auto flex justify-center text-6xl text-white " >THEMES</h1>
        <div className="flex justify-around overflow-auto  flex-wrap m-10 mt-10 mb-10 p-10 " >

       
       <FocusCards cards={cards} />
 
        </div>

        </div>
        
    )
}