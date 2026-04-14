"use client";

import {Experience, experiences} from "@/data/experience";
import { Education, educations } from "@/data/education";

import {useState} from "react";

export default function ExperienceAndEducation () {

    const [showEducation, setshowEducation] = useState(false);   //false if Experience is selected

    const unselectedStyle: string = "text-[#cdd6f4] bg-black filter hover:brightness-150 focus:outline-none";
    const selectedStyle: string = "bg-[#cdd6f4] text-black transition duration-200 ease-in-out";


    return(
        <>
        {/*dont forget to check resonsiveness */}

            <div className="w-full mt-[2rem] flex justify-center flex-col">

                <div className="flex gap-[2vw] justify-center w-full mb-7">
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

                <div className="h-64 overflow-y-auto border-2 rounded-lg p-4 text-[#cdd6f4]">
                    <div className="space-y-4">

                        {!showEducation && experiences.map((experience: Experience) => (
                            <div key={experience.id}
                            className="flex flex-col gap-5">
                                <div className="flex flex-row gap-4">
                                    <div className="w-15 h-15 rounded-full overflow-hidden">
                                        <img className="h-full w-full object-cover"
                                            src={experience.companyLogo}>                                
                                        </img>
                                    </div>
                                    <div>
                                        <p>{experience.companyName}</p>
                                        <p>{experience.role}</p>
                                        <p>{experience.description}</p>
                                    </div>
                                    <p className="ml-auto">{experience.startDate} to {experience.endDate}</p>
                                </div>
                            </div>
                        ))
                        }

                        {showEducation && educations.map((education: Education) => (
                            <div key={education.id}
                            className="flex flex-col gap-5">
                                <div className="flex flex-row gap-4">
                                    <div className="w-15 h-15 rounded-full overflow-hidden">
                                        <img className="h-full w-full object-cover"
                                            src={education.instituteLogo}>                                
                                        </img>
                                    </div>
                                    <div>
                                        <p>{education.institureName}</p>
                                        <p>{education.degree}</p>
                                        <p>{education.grades}</p>
                                    </div>
                                    <p className="ml-auto">{education.startDate} to {education.endDate}</p>
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