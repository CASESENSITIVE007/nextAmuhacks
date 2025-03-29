
"use client";
import React from "react";
import { ThemeCard } from "./ui/themeCard";


export default function Themes(){
    const cards = [
        {
          title: "Education",
          src: "/graduation.png",
          description:"Transform the way students and teachers interact with technology. Build AI-driven tutoring systems, smart learning platforms, gamified education tools, or innovative assessment methods that make education more engaging, accessible, and efficient."

        },
        {
          title: "community empowerment",
          src: "/empowerment.png",
          description:" Leverage technology to drive social impact. Develop solutions for digital literacy, skill development, rural connectivity, or applications that support underprivileged communities, NGOs, and local governance for a better society"
        },
        {
          title: "Cyber Crime Prevention",
          src: "/spyware.png",
          description:"Help build a safer digital world by creating tools for cyber awareness, fraud detection, secure authentication, privacy protection, and AI-powered threat analysis to combat cybercrime and protect individuals and businesses."
        },
        {
          title: "Smart City Development",
          src: "/smart-city1.png",
          description:" Envision the future of urban living by developing solutions for efficient traffic management, waste management, renewable energy integration, automated public services, or IoT-driven city planning to make cities smarter and more sustainable",
        },
        {
          title: "Health Care Innovation",
          src: "/cardiogram.png",
          description:" Improve healthcare access and efficiency through telemedicine, AI-based diagnosis, wearable health tech, mental health solutions, or blockchain for secure medical records, ensuring a healthier and more connected world."
        },
        {
          title: "Finance",
          src: "/salary.png",
          description:" Innovate in fintech by designing secure and accessible digital payment systems, AI-based financial planning tools, fraud prevention mechanisms, decentralized finance (DeFi) platforms, or smart investment solutions to make financial services seamless and inclusive.",
        },
            ]
    return (
        <div id="themes" className="min-h-screen  mt-20 " >
            <h1 className="mx-auto flex justify-center text-6xl text-white " >THEMES</h1>
        <div className="flex text-2xl justify-around overflow-auto  flex-wrap m-10 mt-10 mb-10 p-10 " >

       
       <ThemeCard cards={cards} />
 
        </div>

        </div>
        
    )
}