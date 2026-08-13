import { Button } from "../buttons/Button"
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { asciiTitle } from "@/lib/asciiTitle";
import { SocialButton } from "../socials/SocialButton";

const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: <FaLinkedin size={18} /> },
    { label: "GitHub", href: "https://github.com/marcolinardi00", icon: <FaGithub size={18} /> },
    { label: "Instagram", href: "https://www.instagram.com/", icon: <FaInstagram size={18} /> },
]

export function Hero(){
    const heroTitle = asciiTitle("Marco Linardi")

    return (
        <div id="hero" className="flex w-full h-screen items-center justify-center scroll-mt-10">
            <div className="flex justify-center items-start gap-3 flex-col">
                <h2 className="text-2xl">Hello, I am</h2>
                <pre className="font-mono text-cmdlet whitespace-pre text-xs">{heroTitle}</pre>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi pariatur voluptatem ab, illum minus deserunt veritatis. Dolore consequatur adipisci voluptate deserunt impedit voluptatem animi. Odio deleniti vitae dolore atque soluta?</p>
                <div className="flex items-center gap-4">
                    {socials.map((social) => (
                        <SocialButton key={social.label} href={social.href} label={social.label} icon={social.icon} />
                    ))}
                </div>
                <div className="flex justify-end w-full">
                    <Button text="Download Resume" logo={<Download size={18}/>}></Button>
                </div>
            </div>
        </div>
    )
}