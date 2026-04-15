import { GitHubIcon, LinkedInIcon, GmailIcon, InstagramIcon, XIcon  } from "@/icons/socials-icons"

export default function Socials(){
    return(
        <>
            <div className="flex flex-col gap-2">
                <div className="flex gap-4">
                    <GitHubIcon className="text-[#c3c9d5] mt-[1rem]
                    hover:text-[#689bec] transition duration-150 ease-in" />
                    <LinkedInIcon className="text-[#c3c9d5] mt-[1.1rem]
                    hover:text-[#689bec] transition duration-150 ease-in" />
                    <GmailIcon className="text-[#c3c9d5] mt-[1.1rem] 
                    hover:text-[#689bec] transition duration-150 ease-in" />
                    <InstagramIcon className="text-[#c3c9d5] mt-[1.1rem] 
                    hover:text-[#689bec] transition duration-150 ease-in" />
                    <XIcon className="text-[#c3c9d5] mt-[1.2rem] 
                    hover:text-[#689bec] transition duration-150 ease-in" />
                </div>
                <button className="bg-[#cdd6f4] text-black 
                transition duration-200 ease-in-out hover:bg-[#689bec]
                xl:rounded-lg rounded-md xl:px-2 xl:py-1 px-2 py-1 xl:mt-2 mt-2
                focus:outline-none focus:ring-2 focus:ring-[#cdd6f4]">
                    Download my Resume!
                </button>
            </div>
        </>
    )
}