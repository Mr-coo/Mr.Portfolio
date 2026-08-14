import type { StaticImageData } from 'next/image'
import dummy from '@/public/dummy.png'
import raw from './content.json'
import type { SocialIconName } from './icons'

const IMAGES: Record<string, StaticImageData> = {
  '/dummy.png': dummy,
}

function image(path: string): StaticImageData {
  const img = IMAGES[path]
  if (!img) {
    throw new Error(
      `content.json references image "${path}" that is not registered in lib/content.ts`,
    )
  }
  return img
}

export interface Social {
  label: string
  href: string
  icon: SocialIconName
}

export interface NavItem {
  id: string
  label: string
}

export interface ExperienceItem {
  title: string
  role: string
  body: string
  tags: string[]
  image: StaticImageData
  href: string
}

export interface ProjectItem {
  title: string
  period: string
  starred: boolean
  description: string
  href: string
  images: [StaticImageData, StaticImageData, StaticImageData]
}

export const content = {
  titleBar: raw.titleBar,
  navigation: raw.navigation as NavItem[],
  socials: raw.socials as Social[],
  hero: raw.hero,
  about: {
    ...raw.about,
    portrait: {
      src: image(raw.about.portrait.src),
      alt: raw.about.portrait.alt,
    },
  },
  experience: {
    title: raw.experience.title,
    items: raw.experience.items.map(
      (item): ExperienceItem => ({
        ...item,
        image: image(item.image),
      }),
    ),
  },
  projects: {
    title: raw.projects.title,
    items: raw.projects.items.map(
      (item): ProjectItem => ({
        ...item,
        images: item.images.map(image) as [
          StaticImageData,
          StaticImageData,
          StaticImageData,
        ],
      }),
    ),
  },
}
