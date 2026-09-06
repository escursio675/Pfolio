import {
  CSSIcon,
  ExpressIcon,
  GitIcon,
  HTMLIcon,
  JSIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  ReIcon,
  TailwindIcon,
  TSIcon,
} from "@/icons/techstack-icons";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const techstack = [
  { Icon: MongoIcon, label: "MongoDB" },
  { Icon: ExpressIcon, label: "Express.js" },
  { Icon: ReIcon, label: "React.js" },
  { Icon: NodeIcon, label: "Node.js" },
  { Icon: NextIcon, label: "NextJS" },
  { Icon: TailwindIcon, label: "TailwindCSS" },
  { Icon: HTMLIcon, label: "HTML5" },
  { Icon: CSSIcon, label: "CSS3" },
  { Icon: GitIcon, label: "Git" },
  { Icon: TSIcon, label: "Typescript" },
  { Icon: JSIcon, label: "Javascript" },
];

export default function Techstack() {
  return (
    <>
      <div className="w-full xl:mt-20 xl:mb-20 mt-15">
        <h1 className="text-[2.5rem]">My Techstack</h1>
        <div className="mt-5 flex flex-row flex-wrap gap-5 xl:justify-between">
          {techstack.map(({ Icon, label }) => (
            <HoverCard key={label} openDelay={70} closeDelay={70}>
              <HoverCardTrigger aria-label={label}>
                <Icon className="w-10 h-10" />
              </HoverCardTrigger>
              <HoverCardContent>{label}</HoverCardContent>
            </HoverCard>
          ))}
        </div>
      </div>
    </>
  );
}