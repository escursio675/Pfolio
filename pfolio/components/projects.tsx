"use client";

import { Project, projects } from "@/data/project"

import { useState } from "react"
import Image from "next/image"


export default function Projects(){
    return(
        <>
            <div className="w-full mt-10">
                <h1 className="text-[2.5rem]">Projects</h1>
                <div className="w-full h-full grid xl:grid-cols-2 grid-cols-1 gap-6">
                    <div className="bg-[#101018] w-full h-full rounded-lg ">
                        <div className="w-full  overflow-hidden">
                            <Image
                            src="/lofe.png"
                            alt="project"
                            width={800}
                            height={400}
                            className="object-cover w-full h-auto p-1 rounded-lg"
                            />
                            <div className="text-black flex gap-3 m-2
                            ">
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#689bec]
                                border border-white shadow-[0_0_10px_white]">React</p>
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#cdd6f4]
                                border border-white shadow-[0_0_10px_white]">Tailwind</p>
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-yellow-500
                                border border-white shadow-[0_0_10px_white]">Javascript</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#101018] w-full h-full rounded-lg ">
                        <div className="w-full  overflow-hidden">
                            <Image
                            src="/lofe.png"
                            alt="project"
                            width={800}
                            height={400}
                            className="object-cover w-full h-auto p-1 rounded-lg"
                            />
                            <div className="text-black flex gap-3 m-2
                            ">
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#689bec]
                                border border-white shadow-[0_0_10px_white]">React</p>
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#cdd6f4]
                                border border-white shadow-[0_0_10px_white]">Tailwind</p>
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-yellow-500
                                border border-white shadow-[0_0_10px_white]">Javascript</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#101018] w-full h-full rounded-lg ">
                        <div className="w-full  overflow-hidden">
                            <Image
                            src="/lofe.png"
                            alt="project"
                            width={800}
                            height={400}
                            className="object-cover w-full h-auto p-1 rounded-lg"
                            />
                            <div className="text-black flex gap-3 m-2
                            ">
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#689bec]
                                border border-white shadow-[0_0_10px_white]">React</p>
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#cdd6f4]
                                border border-white shadow-[0_0_10px_white]">Tailwind</p>
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-yellow-500
                                border border-white shadow-[0_0_10px_white]">Javascript</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#101018] w-full h-full rounded-lg ">
                        <div className="w-full  overflow-hidden">
                            <Image
                            src="/lofe.png"
                            alt="project"
                            width={800}
                            height={400}
                            className="object-cover w-full h-auto p-1 rounded-lg"
                            />
                            <div className="text-black flex gap-3 m-2
                            ">
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#689bec]
                                border border-white shadow-[0_0_10px_white]">React</p>
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-[#cdd6f4]
                                border border-white shadow-[0_0_10px_white]">Tailwind</p>
                                <p className="xl:rounded-lg rounded-md
                                xl:px-2 xl:py-1 px-2 py-1 bg-yellow-500
                                border border-white shadow-[0_0_10px_white]">Javascript</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </>
    )
}

{/*
    <div className="bg-[#cdd6f4] w-full h-full rounded-lg ">
                    </div>
                    <div className="bg-[#cdd6f4] w-full h-full rounded-lg ">
                    </div>
                    <div className="bg-[#cdd6f4] w-full h-full rounded-lg ">
                    </div>
*/}