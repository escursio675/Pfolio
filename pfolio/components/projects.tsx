"use client";

import { Project, projects } from "@/data/project"

import { useState } from "react"
import Image from "next/image"


export default function Projects(){
    return(
        <>
            <div className="w-full mt-10">
                <h1 className="text-[2.5rem]">Projects</h1>
                <div className="w-full h-[90%] grid xl:grid-cols-2 grid-cols-1 gap-6">
                    <div className="bg-[#2a2f45] w-full h-ful rounded-lg">
                        <div className="w-full  overflow-hidden">
                            <Image
                            src="/lofe.png"
                            alt="project"
                            width={800}
                            height={400}
                            className="object-cover w-full h-auto p-1 rounded-lg"
                            />
                            <h1 className="m-3">LOFe</h1>
                            <div className="text-[#1e1e2e] flex gap-3 m-3">
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#61DAFB]
                                shadow-[0_0_8px_#8fb3ff]">React</p>
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#38BDF8]
                                shadow-[0_0_8px_#8fb3ff]">Tailwind</p>
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#F7DF1E]
                                shadow-[0_0_8px_#8fb3ff]">Javascript</p>
                            </div>
                            <p className="m-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus neque a laudantium culpa omnis soluta illum quos praesentium tenetur adipisci facere iure qui debitis esse deleniti, perspiciatis quod molestiae eius.</p>
                            <div className="text-[#c3c9d5] flex gap-3 m-3">
                                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"
                                className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#1e1e2e]
                                transition-all duration-150 ease-out hover:text-black hover:bg-[#cdd6f4]">
                                    Github
                                </a>
                                <a href="https://www.github.com" target="_blank" rel="noopener noreferrer"
                                className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#1e1e2e]
                                transition-all duration-150 ease-out hover:text-black hover:bg-[#cdd6f4]">
                                    Live Preview
                                </a>
                            </div>                            
                        </div>
                    </div>
                    

                </div>
            </div>
        </>
    )
}
