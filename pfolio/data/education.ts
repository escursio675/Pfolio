import jec from "@/public/jec.jpeg";

import { StaticImageData } from "next/image";

export type Education = {
    id: number,
    instituteLogo: StaticImageData;
    institureName: string;
    degree: string;
    grades: string;
    startDate: string;
    endDate: string;
};

export const educations: Education[] = [
{
    id: 1,
    instituteLogo: jec,
    institureName: "Jorhat Engineering College",
    degree: "Bachelor's in Technology, Computer Science and Engineering",
    grades: "9.7 CGPA",
    startDate: "Oct 2023",
    endDate: "Aug 2027"
},

{
    id: 2,
    instituteLogo: jec,
    institureName: "Jorhat Engineering College",
    degree: "Bachelor's in Technology, Computer Science and Engineering",
    grades: "9.7 CGPA",
    startDate: "Oct 2023",
    endDate: "Aug 2027"
}

];