"use client";

import { Experience, experiences } from "@/data/experience";
import { Education, educations } from "@/data/education";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";

export default function ExperienceAndEducation() {
  const [showEducation, setShowEducation] = useState(false); // false if Experience is selected

  const unselectedStyle: string =
    "bg-[#cdd6f4] text-black transition duration-200 ease-in-out";
  const selectedStyle: string = "text-[#cdd6f4] bg-black focus:outline-none";

  type EntryProps = {
    id: string | number;
    logo: string | StaticImageData;
    logoAlt: string;
    title: string;
    subtitle: string;
    detail: string;
    detailClassName?: string;
    startDate: string;
    endDate: string;
  };

  const renderEntry = (
    {
      id,
      logo,
      logoAlt,
      title,
      subtitle,
      detail,
      detailClassName,
      startDate,
      endDate,
    }: EntryProps,
    isLast: boolean
  ) => (
    <div key={id} className="relative flex gap-4 pb-8">
      {/* Timeline line + node */}
      <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#689bec] flex-shrink-0 bg-[#1e1e2e] z-10">
          <Image className="h-full w-full object-cover" src={logo} alt={logoAlt} width={48} height={48} />
        </div>
        {!isLast && <div className="w-px flex-1 bg-[#689bec]/30 mt-1" />}
      </div>

      {/* Content card */}
      <div className="flex-1 bg-[#2a2f45] rounded-lg p-4 min-w-0">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
          <h1 className="text-base font-semibold">{title}</h1>
          <span className="text-xs px-2 py-0.5 rounded-full bg-[#1e1e2e] text-[#cdd6f4] whitespace-nowrap">
            {startDate} – {endDate}
          </span>
        </div>
        <h2 className="text-sm text-[#689bec] mb-2">{subtitle}</h2>
        <p className={`text-sm text-[#c3c9d5] ${detailClassName || ""}`}>{detail}</p>
      </div>
    </div>
  );

  const entries = showEducation
    ? educations.map((education: Education, i) =>
        renderEntry(
          {
            id: education.id,
            logo: education.instituteLogo,
            logoAlt: `${education.instituteName} logo`,
            title: education.instituteName,
            subtitle: education.degree,
            detail: education.grades,
            startDate: education.startDate,
            endDate: education.endDate,
          },
          i === educations.length - 1
        )
      )
    : experiences.map((experience: Experience, i) =>
        renderEntry(
          {
            id: experience.id,
            logo: experience.companyLogo,
            logoAlt: `${experience.companyName} logo`,
            title: experience.companyName,
            subtitle: experience.role,
            detail: experience.description,
            detailClassName: "text-justify",
            startDate: experience.startDate,
            endDate: experience.endDate,
          },
          i === experiences.length - 1
        )
      );

  return (
    <div className="w-full mt-10 flex justify-center flex-col">
      <div className="flex justify-center w-full h-8 mb-7 rounded-lg bg-[#cdd6f4]">
        <button
          onClick={() => setShowEducation(false)}
          className={`xl:px-5 xl:py-1 xl:rounded-lg px-3 py-1 m-0.5 rounded-md flex-1
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#689bec]
          ${showEducation ? unselectedStyle : selectedStyle}`}
        >
          Experience
        </button>
        <button
          onClick={() => setShowEducation(true)}
          className={`xl:px-5 xl:py-1 xl:rounded-lg px-3 py-1 m-0.5 rounded-md flex-1
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#689bec]
          ${showEducation ? selectedStyle : unselectedStyle}`}
        >
          Education
        </button>
      </div>

      <div
        key={showEducation ? "education" : "experience"}
        className="max-h-[28rem] overflow-y-auto pr-2 text-[#cdd6f4] animate-[fadeIn_0.3s_ease-out]"
      >
        {entries}
      </div>
    </div>
  );
}