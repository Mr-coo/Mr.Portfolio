import { Button } from "../buttons/Button"
import { Download } from 'lucide-react';
import { asciiTitle } from "@/lib/asciiTitle";
import { SocialButton } from "../socials/SocialButton";
import { Reveal } from "../motion/Reveal";
import { content } from "@/lib/content";
import { SocialIcon } from "@/lib/icons";
import { AsciiArt } from "../ascii/AsciiArt";

export function Hero(){
    const { greeting, name, intro, resume } = content.hero
    const heroTitle = asciiTitle(name)

    return (
        <div id="hero" className="flex w-full min-h-screen items-center justify-center py-24 scroll-mt-10 snap-start">
            <div className="flex justify-center items-start gap-3 flex-col w-full max-w-full">
                <Reveal direction="up">
                    <h2 className="text-xl sm:text-2xl">{greeting}</h2>
                </Reveal>
                <Reveal direction="left" delay={0.1} className="w-full max-w-full">
                    <AsciiArt art={heroTitle} className="font-mono text-cmdlet text-xs" />
                </Reveal>
                <Reveal direction="up" delay={0.25}>
                    <p>{intro}</p>
                </Reveal>
                <Reveal direction="up" delay={0.35}>
                    <div className="flex items-center gap-4">
                        {content.socials.map((social) => (
                            <SocialButton
                                key={social.label}
                                href={social.href}
                                label={social.label}
                                icon={<SocialIcon name={social.icon} size={18} />}
                            />
                        ))}
                    </div>
                </Reveal>
                <Reveal direction="up" delay={0.45} className="w-full">
                    <div className="flex justify-end w-full">
                        <Button text={resume.label} href={resume.href || undefined} download disabled={!resume.href} logo={<Download size={18}/>}></Button>
                    </div>
                </Reveal>
            </div>
        </div>
    )
}
