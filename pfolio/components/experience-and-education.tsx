"use client";

import {useState} from "react";

export default function ExperienceAndEducation () {

    const [showEducation, setshowEducation] = useState(false);   //false if Experience is selected

    const unselectedStyle: string = "text-[#cdd6f4] bg-black filter hover:brightness-150 focus:outline-none";
    const selectedStyle: string = "bg-[#cdd6f4] text-black transition duration-200 ease-in-out";


    return(
        <>

            <div className="w-full mt-[2rem] flex justify-center flex-col">
                <div className="flex gap-[2vw] justify-center w-full">
                    <button onClick={() => setshowEducation(false)}
                    className={`xl:px-4 xl:py-1 xl:rounded-lg px-3 py-1 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-[#cdd6f4]
                        ${showEducation ? unselectedStyle : selectedStyle}`}>
                        Experience
                    </button>
                    <button onClick={() => setshowEducation(true)}
                    className={`xl:px-5 xl:py-1 xl:rounded-lg px-3 py-1 rounded-md
                        focus:outline-none focus:ring-2 focus:ring-[#cdd6f4]
                        ${showEducation ? selectedStyle : unselectedStyle}`}>
                        Education
                    </button>
                </div>
                <div className="w-full border-t-2 border-[#cdd6f4] opacity-50 my-5"></div>
            </div>

        </>
    )

}