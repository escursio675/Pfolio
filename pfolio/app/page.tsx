import NameReveal from "@/components/name-reveal"
import ExperienceAndEducation from "@/components/experience-and-education"
import Socials from "@/components/socials"
import Projects from "@/components/projects"

import { intro } from "@/data/text"

export default function Home(){

  return(
    <>

      <NameReveal />

      <p className="xl:max-w-[43vw] max-w-full xl:mt-[1vh] text-[1rem]"> {intro}</p>

      <Socials />

      <div className="xl:pl-[15%]">

        <ExperienceAndEducation />

        <Projects />

      </div>
    
    
    </>
  )

}