import dummy from '../../public/dummy.png'
import { ImageFrame } from '../Frames/ImageFrame'
import { SmallCard } from '../cards/SmallCard'
import { Button } from '../buttons/Button'
import { SiGithub } from 'react-icons/si';
import { Reveal } from '../motion/Reveal'
import { asciiTitle } from '@/lib/asciiTitle';

const experiences = [
    {
        title: "Experience 1",
        description: "Full-Stack Developer",
        body: "Built and maintained scalable web applications using modern frameworks. Collaborated with cross-functional teams to deliver features on tight deadlines while ensuring code quality through testing and reviews.",
        tags: ["Nest.js", "React", "Docker", "gRPC", "Postgres SQL"],
    },
    {
        title: "Experience 2",
        description: "Backend Engineer",
        body: "Designed and implemented RESTful APIs and microservices architecture. Optimized database queries and improved system reliability through monitoring, alerting, and automated deployment pipelines.",
        tags: ["Go", "Kubernetes", "Redis", "MongoDB", "Kafka"],
    },
    {
        title: "Experience 3",
        description: "Frontend Developer",
        body: "Developed responsive user interfaces and interactive dashboards. Worked closely with designers to translate Figma mockups into pixel-perfect components with smooth animations and accessibility support.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
        title: "Experience 4",
        description: "DevOps Engineer",
        body: "Managed CI/CD pipelines and cloud infrastructure across multiple environments. Automated provisioning and deployment processes, reducing release cycles and improving overall system uptime.",
        tags: ["AWS", "Terraform", "GitHub Actions", "Docker", "Linux"],
    },
];

export function Experience(){
    const Title = asciiTitle("Experience")

    return (
        <div id="experience" className="flex w-full min-h-screen items-center justify-center overflow-x-hidden scroll-mt-10 snap-start">
            <div className="flex justify-start items-start gap-3 flex-col py-10">
                <Reveal direction="left">
                    <pre className="font-mono text-cmdlet whitespace-pre text-[10px]">{Title}</pre>
                </Reveal>
                <div className="w-full border-t-2 border-dashed mb-10"></div>
                <div className='flex flex-col justify-center gap-20'>
                    {experiences.map((exp, i) => {
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
                                    <h3 className="text-lg py-5 text-param">{exp.description}</h3>
                                    <p>{exp.body}</p>
                                    <div className="py-5 flex flex-wrap gap-x-5 justify-start items-center">
                                        {exp.tags.map((tag) => (
                                            <SmallCard key={tag} text={tag} />
                                        ))}
                                    </div>
                                    <div className={`flex ${isEven ? "justify-end" : "justify-start"}`}>
                                        <Button text="Github" logo={<SiGithub size={18} />} />
                                    </div>
                                </div>
                                <ImageFrame src={dummy} alt={exp.title} classname="w-[45%]" />
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}
