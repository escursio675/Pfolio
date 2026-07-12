import { StaticImageData } from "next/image"

import lofe from "@/public/lofe.webp"
import urlambda from "@/public/urlambda.webp"
import rados from "@/public/rados.webp"
import clock from "@/public/clock.webp"
import counterapi from "@/public/counterapi.webp"

export type Techstack = {
    tech: string;
    hue: string;
}

export type Project = {
    id: number
    ss: StaticImageData;
    title: string;
    techstack: Techstack[];
    description: string;
    github?: string;
    live?: string;
};

export const projects: Project[] = [
{
    id: 1,
    ss: urlambda,
    title: "URLambda",
    techstack: [{tech: "Web Development", hue: "#7dc4e4"}, {tech: "MERN", hue: "#8d95ef"}, {tech: "CRUD", hue: "#8d95ef"}, {tech: "REST API", hue: "#8d95ef"}, {tech: "Authentication", hue: "#8bd5a3"}],
    description: "A Fullstack URL shortener complete with Dashboard analytics and Google Sign-in",
    github: "https://github.com/escursio675/URLambda",
    live: "https://urlambda.netlify.app/"

    
},
{
    id: 2,
    ss: rados,
    title: "RADos 1.0",
    techstack: [{tech: "Operating Systems", hue: "#d1697a"}, {tech: "x86 Assembly", hue: "#689bec"}, {tech: "C Programming", hue: "#689bec"}, {tech: "Kernel Development", hue: "#d1697a"}, {tech: "Driver Development", hue: "#dba96b"}, {tech: "Low-Level Programming", hue: "#dba96b"}],
    description: "A Bare-Metal Single Unikernal x86 Operating System",
    github: "https://github.com/escursio675/RADos_1.0"
    
},
{
    id: 3,
    ss: counterapi,
    title: "CounterAPI",
    techstack: [{tech: "Web Development", hue: "#7dc4e4"}, {tech: "MERN", hue: "#8d95ef"}, {tech: "REST API", hue: "#8d95ef"}, {tech: "CRUD", hue: "#8d95ef"}, {tech: "Authentication", hue: "#8bd5a3"}],
    description: "A lightweight REST API for tracking custom counters across multiple personal websites, with per-site API keys, rate-limiting and admin-managed site provisioning",
    github: "https://github.com/escursio675/CounterAPI"
    
},
{
    id: 4,
    ss: lofe,
    title: "LOFe",
    techstack: [{tech: "Web Development", hue: "#7dc4e4"}, {tech: "UI/UX", hue: "#cba6f7"}, {tech: "REST API", hue: "#8d95ef"}, {tech: "Productivity", hue: "#8bd5a3"}, {tech: "Multimedia", hue: "#8bd5a3"}],
    description: "A Music/Video Player with custom UI built using the Youtube iFrame API",
    github: "https://github.com/escursio675/LOFe",
    live: "https://lo-fe.vercel.app/"
    
},

{
    id: 5,
    ss: clock,
    title: "ClOCK",
    techstack: [{tech: "Web Development", hue: "#7dc4e4"}, {tech: "UI/UX", hue: "#cba6f7"}, {tech: "Animations", hue: "#9f8cff"}, {tech: "Productivity", hue: "#8bd5a3"}],
    description: "A collection of custom clock interfaces with from-scratch animations",
    github: "https://github.com/escursio675/ClOCK",
    live: "https://cl-ock.vercel.app/"
    
}
]