import iocl from "@/public/iocl.png"
import iitg from "@/public/iitg.png"
import { StaticImageData } from "next/image";

export type Experience = {
    id: number;
    companyName: string;
    companyLogo: StaticImageData;
    description: string;
    startDate: string;
    endDate: string;
    role: string;
    link: string;
};

export const experiences: Experience[] = [
{
    id: 1,
    companyName: "IOCL, Digboi",
    companyLogo: iocl,
    description: "Worked in a team as winter intern",
    startDate: "Jan 2025",
    endDate: "Jan 2025",
    role: "Fullstack Developer",
    link: "https://www.google.com"
},

{
    id: 2,
    companyName: "IOCL, Digboi",
    companyLogo: iitg,
    description: "Worked in a team as winter intern",
    startDate: "June 2025",
    endDate: "Aug 2025",
    role: "Fullstack Developer",
    link: "https://www.google.com"
}

]