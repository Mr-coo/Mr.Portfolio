import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

const socials = [
    { label: "LinkedIn", href: "https://www.linkedin.com/", icon: <FaLinkedin size={22} /> },
    { label: "GitHub", href: "https://github.com/marcolinardi00", icon: <FaGithub size={22} /> },
    { label: "Instagram", href: "https://www.instagram.com/", icon: <FaInstagram size={22} /> },
]

export function SocialRail(){
    return (
        <div className="fixed left-20 bottom-0 z-40 flex flex-col items-center gap-4">
            <ul className="flex flex-col items-center gap-1 list-none">
                {socials.map((social) => (
                    <li key={social.label}>
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            title={social.label}
                            className="inline-flex p-2 text-param transition-colors duration-200 hover:text-cmdlet"
                        >
                            {social.icon}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="w-px h-12 bg-muted" />
        </div>
    )
}
