"use client";

import { useState } from "react";

import { GitHubIcon, LinkedInIcon, GmailIcon, InstagramIcon, XIcon  } from "@/icons/socials-icons"

export default function Socials(){

    const [mailModel, setmailModel] = useState(false);

    return(
        <>
            <div className="flex flex-col gap-2 mt-2">
                { mailModel && (
                    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                        
                        <div className="bg-[#2a2f45] p-6 rounded-lg w-[90%] max-w-md 
                        flex flex-col items-center justify-center">
                            <h2 className="text-lg mb-4">Shoot me an email at</h2>

                            <p>abhisaikia675@gmail.com</p>

                            <button
                                onClick={() => setmailModel(false)}
                                className="mt-4 px-3 py-1 bg-[#1e1e2e] rounded-md
                                transition-all duration-200  ease-in-out 
                                hover:bg-[#cdd6f4] hover:text-[#1e1e2e]">
                                Close
                            </button>
                        </div>

                    </div>
                )

                }

                <div className="flex gap-4">

                    <a href="https://github.com/escursio675" target="_blank" rel="noopener noreferrer"
                    aria-label="GitHub">
                        <GitHubIcon className="text-[#c3c9d5] mt-[1rem]
                        hover:text-[#689bec] transition duration-150 ease-in" />
                    </a>

                    <a href="https://www.linkedin.com/in/saikia-abhimanyu/" 
                    target="_blank" rel="noopener noreferrer"
                    aria-label="LinkedIn">
                        <LinkedInIcon className="text-[#c3c9d5] mt-[1.1rem]
                        hover:text-[#689bec] transition duration-150 ease-in" />
                    </a>

                        <button onClick={() => setmailModel(true)}>
                            <GmailIcon className="text-[#c3c9d5] mt-[1.1rem] 
                            hover:text-[#689bec] transition duration-150 ease-in" />
                        </button>

                    <a href="https://www.instagram.com/escursio675/" target="_blank" rel="noopener noreferrer"
                    aria-label="Instagram">
                        <InstagramIcon className="text-[#c3c9d5] mt-[1.1rem] 
                        hover:text-[#689bec] transition duration-150 ease-in" />
                    </a>

                    <a href="https://x.com/yu_workss" target="_blank" rel="noopener noreferrer"
                    aria-label="Twitter">
                        <XIcon className="text-[#c3c9d5] mt-[1.2rem] 
                        hover:text-[#689bec] transition duration-150 ease-in" />
                    </a>

                </div>

                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer"
                className="bg-[#cdd6f4] text-black 
                    transition duration-200 ease-in-out hover:bg-[#689bec]
                    xl:rounded-lg rounded-md xl:px-2 xl:py-1 px-2 py-1 xl:mt-2 mt-2
                    focus:outline-none focus:ring-2 focus:ring-[#cdd6f4]">
                    Download my Resume!
                </a>
            </div>
        </>
    )
}