import type { IconType } from 'react-icons'
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa'

export type SocialIconName = 'github' | 'linkedin' | 'instagram'

const ICONS: Record<SocialIconName, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  instagram: FaInstagram,
}

export function SocialIcon({ name, size }: { name: SocialIconName; size?: number }) {
  const Icon = ICONS[name]
  return <Icon size={size} />
}
