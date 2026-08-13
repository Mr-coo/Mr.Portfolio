import dummy from '../../public/dummy.png'
import { asciiTitle } from '@/lib/asciiTitle'
import { ProjectCard, type Project } from '../cards/ProjectCard'
import { Reveal } from '../motion/Reveal'

const projects: Project[] = [
    {
        title: "JeTe Knight",
        period: "Nov 2022 - Jan 2023",
        starred: true,
        images: [dummy, dummy, dummy],
        description:
            "Achieved the creation of a game website, serving as a clone of the renowned Hollow Knight game, complete with a functioning prototype. This project was developed with the primary purpose of facilitating learning for assistantship entrance exams, showcasing my skills in game development and problem-solving.",
    },
    {
        title: "Portfolio Terminal",
        period: "Feb 2023 - Apr 2023",
        images: [dummy, dummy, dummy],
        description:
            "Built a terminal-inspired developer portfolio with figlet-rendered headings, scroll-spy navigation, and reusable ASCII-styled UI components. Focused on a cohesive design system and smooth, accessible interactions across every section.",
    },
]

export function Projects(){
    const Title = asciiTitle("Projects")

    return (
        <div id="projects" className="flex w-full min-h-screen items-center justify-center overflow-x-hidden scroll-mt-10 snap-start">
            <div className="flex justify-start items-start gap-3 flex-col py-10 w-full">
                <Reveal direction="left">
                    <pre className="font-mono text-cmdlet whitespace-pre text-[10px]">{Title}</pre>
                </Reveal>
                <div className="w-full border-t-2 border-dashed mb-10"></div>
                <div className="flex flex-col gap-24 w-full">
                    {projects.map((project) => (
                        <Reveal key={project.title} direction="up">
                            <ProjectCard {...project} />
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>
    )
}
