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
};

export const experiences: Experience[] = [
{
    id: 1,
    companyName: "IOCL, Digboi",
    companyLogo: iocl,
    description: "Worked in a team to create a Fullstack web application using the MERN stack for automation of the process of granting security clearance to certain personnel of the industry.",
    startDate: "Jan 2025",
    endDate: "Jan 2025",
    role: "Winter Intern - Fullstack Developer"
},

{
    id: 2,
    companyName: "Indian Institute of Technology, Guwahati",
    companyLogo: iitg,
    description: "Worked in a team to perform a comparative study of various CNN+RNN architectures targeted for Automatic Image Captioning using various standard techiniques including those of measurement of performance metrics",
    startDate: "June 2025",
    endDate: "Aug 2025",
    role: "Summer Intern - Automatic Image Captioning"
}

]