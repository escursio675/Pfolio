import { Project, projects, Techstack } from "@/data/project";

import { GitHubIcon } from "@/icons/socials-icons";

import Image from "next/image";
import Reveal from "@/components/ui/reveal";

export default function Projects() {
  return (
    <>
      <div className="w-full mt-10">
        <h1 className="text-[2.5rem]">Projects</h1>
        <div className="w-full h-[90%] grid xl:grid-cols-2 grid-cols-1 gap-6">
          {projects.map((project: Project, index: number) => {
            const isFeatured = index === 0;

            return (
              <Reveal key={project.id} delay={index * 80} className={isFeatured ? "xl:col-span-2" : ""}>
                <div
                  className={`group bg-[#2a2f45] w-full h-full rounded-lg overflow-hidden
                  transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(104,155,236,0.15)]
                  border border-transparent hover:border-[#689bec]/30
                  ${isFeatured ? "xl:flex xl:flex-row" : ""}`}
                >
                  <div className={`overflow-hidden ${isFeatured ? "xl:w-1/2" : "w-full"}`}>
                    <Image
                      src={project.ss}
                      alt={`${project.title} preview screenshot`}
                      width={800}
                      height={400}
                      sizes="(min-width: 1280px) 50vw, 100vw"
                      placeholder="blur"
                      className="object-cover w-full h-auto p-1 rounded-lg transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className={isFeatured ? "xl:w-1/2 flex flex-col justify-center" : ""}>
                    <div className="flex items-center gap-2 m-3">
                      <h1 className={isFeatured ? "text-xl font-semibold" : ""}>{project.title}</h1>
                      {isFeatured && (
                        <span className="text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full bg-[#689bec]/15 text-[#689bec] border border-[#689bec]/30">
                          Featured
                        </span>
                      )}
                    </div>

                    <div className="text-[#1e1e2e] flex flex-wrap gap-3 m-3">
                      {project.techstack.map((technology: Techstack) => (
                        <p
                          key={technology.tech}
                          className="rounded-md border-2 text-xs px-1 py-1"
                          style={{
                            backgroundColor: `${technology.hue}20`,
                            borderColor: technology.hue,
                            color: technology.hue,
                          }}
                        >
                          {technology.tech}
                        </p>
                      ))}
                    </div>

                    <p className="ml-3 mr-3">{project.description}</p>

                    <div className="text-[#c3c9d5] flex gap-3 m-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="xl:rounded-full rounded-md px-1 py-1 bg-[#1e1e2e] transition-all duration-150 ease-out hover:text-black hover:bg-[#cdd6f4]"
                        >
                          <GitHubIcon />
                        </a>
                      )}

                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="xl:rounded-md rounded-xs px-2 py-1 bg-[#1e1e2e] transition-all duration-150 ease-out hover:text-black hover:bg-[#cdd6f4]"
                        >
                          Live Preview
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </>
  );
}