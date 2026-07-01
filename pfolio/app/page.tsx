import NameReveal from "@/components/name-reveal"
import Intro from "@/components/intro"
import ExperienceAndEducation from "@/components/experience-and-education"
import Socials from "@/components/socials"
import Projects from "@/components/projects"
import Techstack from "@/components/techstack"
import ToolBox from "@/components/tool-box"
import Glance from "@/components/glance"


export default function Home(){

  return(
    <>

      <NameReveal />

      <Intro/>

      <Socials />

      <div className="xl:pl-[15%]">

        <ExperienceAndEducation />

        <Projects />

        <Techstack/>

        <ToolBox/>

        <Glance/>

      </div>
    
    
    </>
  )

}