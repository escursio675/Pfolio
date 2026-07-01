import jec from "@/public/jec.jpeg";
import lss from "@/public/lss.jpg"

import { StaticImageData } from "next/image";

export type Education = {
    id: number,
    instituteLogo: StaticImageData;
    instituteName: string;
    degree: string;
    grades: string;
    startDate: string;
    endDate: string;
};

export const educations: Education[] = [
{
    id: 1,
    instituteLogo: jec,
    instituteName: "Jorhat Engineering College",
    degree: "Bachelor's in Technology, Computer Science and Engineering",
    grades: "9.19 CGPA",
    startDate: "Oct 2023",
    endDate: "Aug 2027"
},

{
    id: 2,
    instituteLogo: lss,
    instituteName: "The Little Stars Senior Secondary School",
    degree: "Higher Secondary Certificate, Science",
    grades: "95.20%",
    startDate: "May 2021",
    endDate: "May 2023"
}

];