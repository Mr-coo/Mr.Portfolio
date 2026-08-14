import { ImageFrame } from '../Frames/ImageFrame'
import { SmallCard } from '../cards/SmallCard'
import { Button } from '../buttons/Button'
import { SiGithub } from 'react-icons/si';
import { Reveal } from '../motion/Reveal'
import { asciiTitle } from '@/lib/asciiTitle';
import { content } from '@/lib/content';

export function Experience(){
    const Title = asciiTitle(content.experience.title)

    return (
        <div id="experience" className="flex w-full min-h-screen items-center justify-center overflow-x-hidden scroll-mt-10 snap-start">
            <div className="flex justify-start items-start gap-3 flex-col py-10">
                <Reveal direction="left">
                    <pre className="font-mono text-cmdlet whitespace-pre text-[10px]">{Title}</pre>
                </Reveal>
                <div className="w-full border-t-2 border-dashed mb-10"></div>
                <div className='flex flex-col justify-center gap-10'>
                    {content.experience.items.map((exp, i) => {
                        const isEven = i % 2 === 0;
                        return (
                            <Reveal
                                key={i}
                                direction="up"
                                className={`py-4 flex justify-between items-center w-full gap-10 ${
                                    isEven ? "flex-row" : "flex-row-reverse"
                                }`}
                            >
                                <div className="w-[45%]">
                                    <div className="flex items-baseline gap-3">
                                        <h1 className="text-3xl font-bold border-b-2 p-2 text-cmdlet">
                                            {exp.title}
                                        </h1>
                                    </div>
                                    <h3 className="text-lg py-5 text-param">{exp.role}</h3>
                                    <p>{exp.body}</p>
                                    <div className="py-5 flex flex-wrap gap-x-5 justify-start items-center">
                                        {exp.tags.map((tag) => (
                                            <SmallCard key={tag} text={tag} />
                                        ))}
                                    </div>
                                    <div className={`flex ${isEven ? "justify-end" : "justify-start"}`}>
                                        <Button text="Github" href={exp.href || undefined} logo={<SiGithub size={18} />} />
                                    </div>
                                </div>
                                <ImageFrame src={exp.image} alt={exp.title} classname="w-[45%]" />
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
