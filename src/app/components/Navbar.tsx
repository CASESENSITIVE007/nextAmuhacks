"use client";
import React, { useState } from "react";
import {  Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link"

export default function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    

    
    return (
      <div
        className={cn(" top-10 fixed  inset-x-0 max-w-2xl mx-auto z-50", className)}
      >
        <Menu setActive={setActive}>
        <Link href="#about" ><MenuItem setActive={setActive} active={active}  item="ABOUT"/> </Link>
         <Link href="#timeline" > <MenuItem setActive={setActive} active={active} item="TIMELINE"/></Link>
         <Link href="#prizes" > <MenuItem setActive={setActive} active={active} item="PRIZES"/></Link>
         <Link href="#themes" > <MenuItem setActive={setActive} active={active} item="THEMES"/></Link>
         <Link href="#faq" > <MenuItem setActive={setActive} active={active} item="FAQ"/></Link>
       
        </Menu>
      </div>
    );
  }