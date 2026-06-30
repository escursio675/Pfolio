import { StaticImageData } from "next/image"

import lofe from "@/public/lofe.png"

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
    ss: lofe,
    title: "URLambda",
    techstack: [{tech: "Web Development", hue: "#7dc4e4"}, {tech: "MERN", hue: "#73daca"}, {tech: "JavaScript", hue: "#e08a79"}, {tech: "CRUD", hue: "#e08a79"}, {tech: "REST API", hue: "#e08a79"}, {tech: "Authentication", hue: "#e08a79"}],
    description: "Sicks tunes",
    github: "https://www.github.com",
    live: "https://www.google.com"

    
},
{
    id: 2,
    ss: lofe,
    title: "RADos 1.0",
    techstack: [{tech: "Operating Systems", hue: "#d1697a"}, {tech: "x86 Assembly", hue: "#9f8cff"}, {tech: "C Programming", hue: "#dba96b"}, {tech: "Kernel Development", hue: "#dba96b"}, {tech: "Driver Development", hue: "#dba96b"}, {tech: "Low-Level Programming", hue: "#dba96b"}],
    description: "Sicks tunes",
    live: "https://www.google.com"
    
},
{
    id: 3,
    ss: lofe,
    title: "LOFe",
    techstack: [{tech: "Web Development", hue: "#d89bb8"}, {tech: "UI/UX", hue: "#8bd5a3"}, {tech: "REST API", hue: "#a6d189"}, {tech: "Productivity", hue: "#a6d189"}, {tech: "Multimedia", hue: "#a6d189"}],
    description: "Sicks tunes",
    github: "https://www.github.com",
    
},

{
    id: 4,
    ss: lofe,
    title: "ClOCK",
    techstack: [{tech: "Web Development", hue: "#e5c76b"}, {tech: "UI/UX", hue: "#cba6f7"}, {tech: "Animations", hue: "#8d95ef"}, {tech: "Productivity", hue: "#8d95ef"}],
    description: "Sicks tunes",
    github: "https://www.github.com",
    
}
]