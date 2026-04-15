"use client";

import { useState } from "react"

export default function NameReveal(){

    const [mobileReveal, setmobileReveal] = useState(false);

    return(
        <>
            <h1 className="group inline-flex flex-wrap items-center text-[2.5rem]">

              <span className="inline-flex items-center">

                <span aria-hidden="true">
                  Heyo!&nbsp;
                  <span className="text-[#689bec] inline-flex flex-wrap">Abhiman
                    <button onClick={() => {setmobileReveal(v => !v)}}
                      className=" xl:hidden inline underline decoration-dashed decoration-accent/30 text-[#5983c7] ml-1">
                      YU
                    </button>
                </span>
                </span>

                <span className="hidden xl:inline underline decoration-dashed decoration-accent/30 opacity-85 text-[#689bec]">
                  YU
                </span>
                

                {/* Desktop reveal */}
                <span className="hidden xl:inline ml-1 overflow-hidden max-w-0 opacity-0 
                  xl:group-hover:max-w-[10rem] xl:group-hover:opacity-100 
                  transition-all duration-500 ease-in-out text-[#689bec]">
                  'yu'
                </span>

              </span>

              <span className="w-full xl:w-auto xl:ml-2">
                <span className="text-[#689bec] inline-flex items-baseline whitespace-nowrap">
                  
                  <span
                    className={`inline-block overflow-hidden whitespace-nowrap
                    transition-all duration-500 ease-in-out
                    ${mobileReveal ? "max-w-[8rem] opacity-100 mr-5" : "max-w-0 opacity-0"}
                    xl:hidden`}>
                    'yu'
                  </span>
                  Saikia
                </span>&nbsp;here!
              </span>

            </h1>

      {/* Alternate version of reveal animation*/}
      {/*<h1>
        Abhiman
        <span className="group inline-block">yu
          <span className="max-w-[0%] absolute whitespace-nowrap group-hover:max-w-[100%] overflow-hidden
          opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-500">
            'yu'
          </span>
          <span className="transition-all duration-500 group-hover:translate-x-20
          inline-block">
            &nbsp;Saikia
          </span>
        </span>
      </h1>*/}

        </>
    )
}