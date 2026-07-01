import { CIcon, CppIcon, CSSIcon, ExpressIcon, GitIcon, HTMLIcon, JSIcon, MongoIcon, NextIcon, NodeIcon, ReIcon, TailwindIcon, TSIcon } from "@/icons/techstack-icons"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

export default function Techstack(){
    return(
        <>
            <div className="w-full xl:mt-20 xl:mb-20 mt-15">
                <h1 className="text-[2.5rem]">My Techstack</h1>
                <div className="mt-5
                flex flex-row flex-wrap gap-5 xl:justify-between">

                    
                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><MongoIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        MongoDB
                    </HoverCardContent>
                    </HoverCard>

                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><ExpressIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        Express.js
                    </HoverCardContent>
                    </HoverCard>

                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><ReIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        React.js
                    </HoverCardContent>
                    </HoverCard>

                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><NodeIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        Node.js
                    </HoverCardContent>
                    </HoverCard>

                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><NextIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        NextJS
                    </HoverCardContent>
                    </HoverCard>

                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><TailwindIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        TailwindCSS
                    </HoverCardContent>
                    </HoverCard>

                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><HTMLIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        HTML5
                    </HoverCardContent>
                    </HoverCard>

                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><CSSIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        CSS3
                    </HoverCardContent>
                    </HoverCard>

                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><GitIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        Git
                    </HoverCardContent>
                    </HoverCard>

                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><TSIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        Typescript
                    </HoverCardContent>
                    </HoverCard>

                    <HoverCard openDelay={70} closeDelay={70}>
                    <HoverCardTrigger><JSIcon className="w-10 h-10"/></HoverCardTrigger>
                    <HoverCardContent>
                        Javascript
                    </HoverCardContent>
                    </HoverCard>

                </div> 
            </div>
        </>
    )
}