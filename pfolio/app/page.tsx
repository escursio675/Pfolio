"use client";

import { useState } from "react"

export default function Home(){

  const [mobileReveal, setmobileReveal] = useState(false);

  return(
    <>

    <h1 className="group inline-flex flex-wrap items-center text-accent">

      <span className="inline-flex items-center">

        <span aria-hidden="true">
          Heyo!&nbsp;
          <span className="text-[#689bec] inline-flex whitespace-nowrap">Abhiman
            <button onClick={() => {setmobileReveal(v => !v)}}
              className=" md:hidden inline underline decoration-dashed decoration-accent/30 !text-[#5983c7] ml-1">
              YU
            </button>
        </span>
        </span>

        <span className="hidden md:inline underline decoration-dashed decoration-accent/30 opacity-85 text-[#689bec]">
          YU
        </span>
        

        {/* Desktop reveal */}
        <span className="hidden md:inline ml-1 overflow-hidden max-w-0 opacity-0 
          md:group-hover:max-w-[10rem] md:group-hover:opacity-100 
          transition-all duration-500 ease-in-out text-[#689bec]">
          'yu'
        </span>

      </span>

      <span className="w-full md:w-auto md:ml-2">
      <span className="text-[#689bec] inline-flex items-baseline whitespace-nowrap">
        
        <span
          className={`inline-block overflow-hidden whitespace-nowrap
          transition-all duration-500 ease-in-out
          ${mobileReveal ? "max-w-[8rem] opacity-100 mr-5" : "max-w-0 opacity-0"}
          md:hidden`}>
          'yu'
        </span>

        Saikia
      </span>&nbsp;here!
    </span>

</h1>


    <p className="md:max-w-[43vw] 
    max-w-full">
      Currently in my 4th year of Bachelor's in Computer Science and 
      Engineering @ `JEC`, Assam. I primarily work in fullstack(MERN) 
      and also in the field of Embedded Systems.
    </p>

    </>
  )

}