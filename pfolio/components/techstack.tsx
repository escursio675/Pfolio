import { TailwindIcon } from "@/icons/techstack-icons"

import Image from "next/image"

export default function Techstack(){
    return(
        <>
            <div className="w-full mt-10">
                <h1 className="text-[2.5rem]">My Techstack</h1>
                <div>
                    <TailwindIcon className="w-10 h-10"/>
                </div> 
            </div>
        </>
    )
}