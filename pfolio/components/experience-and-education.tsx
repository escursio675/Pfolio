"use client";

import {Experience, experiences} from "@/data/experience";
import { Education, educations } from "@/data/education";

import {useState} from "react";
import Image from "next/image";

export default function ExperienceAndEducation () {

    const [showEducation, setshowEducation] = useState(false);   //false if Experience is selected

    const unselectedStyle: string = "bg-[#cdd6f4] text-black transition duration-200 ease-in-out";
    const selectedStyle: string = "text-[#cdd6f4] bg-black  focus:outline-none";


    return(
        <>
        {/*dont forget to check resonsiveness */}

            <div className="w-full mt-[2rem] flex justify-center flex-col">

                <div className="flex justify-center w-full h-8 mb-7 rounded-lg
                bg-[#cdd6f4]">
                    <button onClick={() => setshowEducation(false)}
                    className={`xl:px-5 xl:py-1 xl:rounded-lg px-3 py-1 m-0.5 rounded-md flex-1
                        focus:outline-none focus:ring-2 focus:ring-[#cdd6f4]
                        ${showEducation ? unselectedStyle : selectedStyle}`}>
                        Experience
                    </button>
                    <button onClick={() => setshowEducation(true)}
                    className={`xl:px-5 xl:py-1 xl:rounded-lg px-3 py-1 m-0.5 rounded-md flex-1
                        focus:outline-none focus:ring-2 focus:ring-[#cdd6f4]
                        ${showEducation ? selectedStyle : unselectedStyle}`}>
                        Education
                    </button>
                </div>

                <div className="h-64 overflow-y-auto border-2 rounded-lg p-4 text-[#cdd6f4]">
                    <div className="space-y-4">

                        {!showEducation && experiences.map((experience: Experience) => (
                            <div key={experience.id}
                            className="flex flex-col gap-5">
                                <div className="flex relative
                                xl:flex-row xl:gap-4 gap-7">
                                    <div className="xl:w-15 xl:h-15 h-15 w-15 xl:mt-0
                                    rounded-full flex-shrink-0 mt-10
                                    overflow-hidden">
                                        <Image className="h-full w-full object-cover"
                                            src={experience.companyLogo} alt="logo"/>                                
                                    </div>
                                    <div className="mt-7 mb-1 xl:mt-0 xl:mb-0">
                                        <h1>{experience.companyName}</h1>
                                        <h2>{experience.role}</h2>
                                        <p>{experience.description}</p>
                                    </div>
                                    <p className="ml-auto absolute top-0 left-0 xl:static">{experience.startDate} to {experience.endDate}</p>
                                </div>
                            </div>
                        ))
                        }

                        {showEducation && educations.map((education: Education) => (
                            <div key={education.id}
                            className="flex flex-col gap-5">
                                <div className="flex relative
                                xl:flex-row xl:gap-4 gap-7">
                                    <div className="xl:w-15 xl:h-15 h-15 w-15 xl:mt-0
                                    rounded-full flex-shrink-0 mt-10
                                    overflow-hidden">
                                        <Image className="h-full w-full object-cover"
                                            src={education.instituteLogo} alt ="logo"/> 
                                    </div>
                                    <div className="mt-7 mb-1 xl:mt-0 xl:mb-0">
                                        <h1>{education.instituteName}</h1>
                                        <h2>{education.degree}</h2>
                                        <p>{education.grades}</p>
                                    </div>
                                    <p className="ml-auto absolute top-0 left-0 xl:static">{education.startDate} to {education.endDate}</p>
                                </div>
                            </div>
                        ))
                        }

                    </div>
                </div>


            </div>

        </>
    )

}