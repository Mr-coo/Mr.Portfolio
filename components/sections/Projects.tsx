import { asciiTitle } from '@/lib/asciiTitle'
import { ProjectCard } from '../cards/ProjectCard'
import { Reveal } from '../motion/Reveal'
import { content } from '@/lib/content'

export function Projects(){
    const Title = asciiTitle(content.projects.title)

    return (
        <div id="projects" className="flex w-full min-h-screen items-center justify-center overflow-x-hidden scroll-mt-10 snap-start">
            <div className="flex justify-start items-start gap-3 flex-col py-10 w-full">
                <Reveal direction="left">
                    <pre className="font-mono text-cmdlet whitespace-pre text-[10px]">{Title}</pre>
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
