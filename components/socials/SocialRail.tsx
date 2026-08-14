import { content } from '@/lib/content'
import { SocialIcon } from '@/lib/icons'

export function SocialRail(){
    return (
        <div className="fixed left-20 bottom-0 z-40 flex flex-col items-center gap-4">
            <ul className="flex flex-col items-center gap-1 list-none">
                {content.socials.map((social) => (
                    <li key={social.label}>
                        <a
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            title={social.label}
                            className="inline-flex p-2 text-param transition-colors duration-200 hover:text-cmdlet"
                        >
                            <SocialIcon name={social.icon} size={22} />
                        </a>
                    </li>
                ))}
            </ul>
            <div className="w-px h-12 bg-muted" />
        </div>
    )
}
