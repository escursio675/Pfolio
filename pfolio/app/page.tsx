import NameReveal from "@/components/name-reveal";
import Intro from "@/components/intro";
import ExperienceAndEducation from "@/components/experience-and-education";
import Socials from "@/components/socials";
import Projects from "@/components/projects";
import Techstack from "@/components/techstack";
import ToolBox from "@/components/tool-box";
import Glance from "@/components/glance";
import Reveal from "@/components/ui/reveal";

export default function Home() {
  return (
    <>
      <NameReveal />
      <Intro />
      <Socials />

      <div className="xl:pl-[15%]">
        <Reveal><ExperienceAndEducation /></Reveal>
        <Reveal delay={100}><Projects /></Reveal>
        <Reveal delay={100}><Techstack /></Reveal>
        <Reveal delay={100}><ToolBox /></Reveal>
        <Reveal delay={100}><Glance /></Reveal>
      </div>
    </>
  );
}