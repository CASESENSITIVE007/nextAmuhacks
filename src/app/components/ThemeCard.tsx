"use client"
import Image from "next/image"

function ThemeCard({icon,size}) {
  return (
    <div className='size-50 m-5 flex-col flex  items-center justify-center bg-gray-950 rounded-2xl'>
        <icon/>
        <h1 className='text-white text-2xl'>{size}</h1>
    </div>
  )
}

export default ThemeCard