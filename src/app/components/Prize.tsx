
"use client";
import React from "react";
import { FocusCards } from "./ui/focus-cards";
import { BackgroundGradient } from "./ui/background-gradient";
import { IconAppWindow } from "@tabler/icons-react";
import Image from "next/image";

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
            {/* <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/winner.png`}
          alt="1st"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Seven Thousand
        </p>
 
        
       
      </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/first.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Five Thousand
        </p>
 
      </BackgroundGradient>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
        <Image
          src={`/third.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          Three Thousand
        </p>
 
     
      </BackgroundGradient> */}
        </div>

        </div>
        
    )
}