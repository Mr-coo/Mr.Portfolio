import { asciiTitle } from '@/lib/asciiTitle'
import { ProjectCard } from '../cards/ProjectCard'
import { Reveal } from '../motion/Reveal'
import { content } from '@/lib/content'
import { AsciiArt } from '../ascii/AsciiArt'

export function Projects(){
    const Title = asciiTitle(content.projects.title)

    return (
        <div id="projects" className="flex w-full min-h-screen items-center justify-center overflow-x-hidden scroll-mt-10 snap-start">
            <div className="flex justify-start items-start gap-3 flex-col py-10 w-full">
                <Reveal direction="left" className="w-full max-w-full">
                    <AsciiArt art={Title} className="font-mono text-cmdlet text-[10px]" />
                </Reveal>
                <div className="w-full border-t-2 border-dashed mb-10"></div>
                <div className="flex flex-col gap-24 w-full">
                    {content.projects.items.map((project) => (
                        <Reveal key={project.title} direction="up">
                            <ProjectCard {...project} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
