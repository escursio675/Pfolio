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
    title: "LOFe",
    techstack: [{tech: "React", hue: "#689bec"}, {tech: "Tailwind", hue: "#cdd6f4"}, {tech: "JavaScript", hue: "#ffff00"}],
    description: "Sicks tunes",
    github: "https://www.github.com",
    live: "https://www.google.com"

    
},
{
    id: 2,
    ss: lofe,
    title: "LOFe",
    techstack: [{tech: "React", hue: "#689bec"}, {tech: "Tailwind", hue: "#cdd6f4"}, {tech: "JavaScript", hue: "#ffff00"}],
    description: "Sicks tunes",
    live: "https://www.google.com"
    
},
{
    id: 3,
    ss: lofe,
    title: "LOFe",
    techstack: [{tech: "React", hue: "#689bec"}, {tech: "Tailwind", hue: "#cdd6f4"}, {tech: "JavaScript", hue: "#ffff00"}],
    description: "Sicks tunes",
    github: "https://www.github.com",
    
}
]