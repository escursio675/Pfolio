import { CIcon, CppIcon, CSSIcon, ExpressIcon, GitIcon, HTMLIcon, JSIcon, MongoIcon, NextIcon, NodeIcon, ReIcon, TailwindIcon, TSIcon } from "@/icons/techstack-icons"

import Image from "next/image"

export default function Techstack(){
    return(
        <>
            <div className="w-full xl:mt-20 xl:mb-20 mt-15">
                <h1 className="text-[2.5rem]">My Techstack</h1>
                <div className="mt-5
                flex flex-row flex-wrap gap-5 xl:justify-between">
                    <MongoIcon className="w-10 h-10"/>
                    <ExpressIcon className="w-10 h-10"/>
                    <ReIcon className="w-10 h-10"/>
                    <NodeIcon className="w-10 h-10"/>

                    <NextIcon className="w-10 h-10"/>
                    <TailwindIcon className="w-10 h-10"/>

                    <HTMLIcon className="w-10 h-10"/>
                    <CSSIcon className="w-10 h-10"/>

                    <GitIcon className="w-10 h-10"/>

                    <TSIcon className="w-10 h-10"/>
                    <JSIcon className="w-10 h-10"/>
                </div> 
            </div>
        </>
    )
}