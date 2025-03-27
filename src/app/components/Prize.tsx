
"use client";
import React from "react";
import { FocusCards } from "./ui/focus-cards";


export default function Prize(){
    const cards = [
        {
          title: "7,000",
          src: "/winner.png",
        },
        {
          title: "5,000",
          src: "/first.png",
        },
        {
          title: "3,000",
          src: "/third.png",
        },
            ]
    return (
        <div id="prizes" className="min-h-screen  mt-20 " >
            <h1 className="mx-auto flex justify-center text-6xl text-white " >PRIZES</h1>
        <div className="flex justify-around overflow-auto  flex-wrap m-10 mt-10 mb-10 p-10 " >

       
       <FocusCards cards={cards} />
 
        </div>

        </div>
        
    )
}