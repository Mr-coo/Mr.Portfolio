import dummy from '../../public/dummy.png'
import { ImageFrame } from '../Frames/ImageFrame'
import { SmallCard } from '../cards/SmallCard'
import { Reveal } from '../motion/Reveal'
import { asciiTitle } from '@/lib/asciiTitle'

const position = "Full-Stack Developer"

const description =
    "I build reliable web applications end to end, from clean and accessible interfaces to well-structured APIs and services. I care about maintainable code, thoughtful architecture, and shipping features that hold up in production."

const expertise = [
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Go",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
]

export function About(){
    const Title = asciiTitle("About")

    return (
        <div id="about" className="flex w-full min-h-screen items-center justify-center overflow-x-hidden scroll-mt-10">
            <div className="flex justify-start items-start gap-3 flex-col py-10 w-full">
                <pre className="font-mono text-cmdlet whitespace-pre text-[10px]">{Title}</pre>
                <div className="w-full border-t-2 border-dashed mb-10"></div>
                <div className="flex justify-between items-stretch w-full gap-10">
                    <Reveal direction="left" className="w-[45%] flex">
                        <ImageFrame src={dummy} alt="Portrait" classname="w-full" frameClass="h-auto" />
                    </Reveal>
                    <Reveal direction="right" className="w-[45%]">
                        <h1 className="text-3xl font-bold border-b-2 p-2 text-cmdlet w-min whitespace-nowrap">
                            {position}
                        </h1>
                        <p className="py-5 text-foreground">{description}</p>
                        <h3 className="text-lg text-param">Expertise</h3>
                        <div className="py-5 flex flex-wrap gap-x-5 gap-y-3 justify-start items-center">
                            {expertise.map((tag) => (
                                <SmallCard key={tag} text={tag} />
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}
