"use client"
import React from "react";
// import { BackgroundBeams } from "./ui/background-beams";
import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes";
import {useState,useEffect} from "react"
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";
import { Cover } from "./ui/cover";

export default function Hero() {

    const targetDate = new Date(2025, 3, 2, 0, 0, 0);
  targetDate.setDate(targetDate.getDate() + 10); // 10 days from now

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate - now;

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []); // Re-run when timeLeft changes
    
    return (
        <div className="min-h-screen flex flex-col align-middle justify-center items-center " >
      <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased items-center justify-center   ">
        <div
          className={cn(
            "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none",
            "[background-image:linear-gradient(to_right,#171717_1px,transparent_1px),linear-gradient(to_bottom,#171717_1px,transparent_1px)]",
          )}
        />
        {/* <Boxes/> */}
   
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
          AMUHACKS 4.O <br /> <Cover>11-April-25</Cover>
          </h1>
          <div className=" flex  justify-center m-2 " >
          <Button
        borderRadius="1.75rem"
        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 flex mx-auto justify-center items-center  "
      >
        Apply Here
      </Button>
          </div>
        
          <div className="text-4xl p-4 mx-auto justify-center rounded-lg shadow-lg flex  ">
          <span className="mr-3 rounded-lg shadow-lg bg-gray-700 text-indigo-500 text-5xl font-bold  flex font-serif items-center justify-center opacity-70  h-20 w-20 ">
            {timeLeft.days}d
          </span>
          <span className="mr-3 rounded-lg shadow-lg bg-gray-700   flex items-center text-4xl font-bold font-serif justify-center h-20 w-20 opacity-70 text-fuchsia-600 ">
            {timeLeft.hours}h
          </span>
          <span className="mr-3 rounded-lg shadow-lg bg-gray-700 text-amber-600 text-3xl font-bold font-serif  flex items-center opacity-70 justify-center h-20 w-20    ">
            {timeLeft.minutes}m
          </span>
          <span className="rounded-lg shadow-lg bg-gray-700 text-emerald-500 text-2xl font-bold font-serif flex items-center opacity-70 justify-center h-20 w-20 ">
            {timeLeft.seconds}s
          </span>
        </div>
        </div>
      </div>
      {/* <BackgroundBeams/> */}
      </div>
    );
  }
 