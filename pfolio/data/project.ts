import { StaticImageData } from "next/image"

import lofe from "@/public/lofe.png"

type Techstack = {
    tech: string;
    hue: string;
}

export type Project = {
    ss: StaticImageData;
    title: string;
    techstack: Techstack[];
    description: string;
    github: string;
    live: string;
};

const LOFeTech: Techstack[] = [
    {tech: "React", hue: "#689bec"},
    {tech: "Tailwind", hue: "#cdd6f4"},
    {tech: "JavaScript", hue: "#ffff00"},
]

export const projects: Project[] = [
{
    ss: lofe,
    title: "LOFe",
    techstack: LOFeTech,
    description: "Sicks tunes",
    github: "https://www.github.com",
    live: "https://www.google.com"

    
},
{
    ss: lofe,
    title: "LOFe",
    techstack: LOFeTech,
    description: "Sicks tunes",
    github: "https://www.github.com",
    live: "https://www.google.com"
    
},
{
    ss: lofe,
    title: "LOFe",
    techstack: LOFeTech,
    description: "Sicks tunes",
    github: "https://www.github.com",
    live: "https://www.google.com"
    
},
{
    ss: lofe,
    title: "LOFe",
    techstack: LOFeTech,
    description: "Sicks tunes",
    github: "https://www.github.com",
    live: "https://www.google.com"
    
}
]