import type { StaticImageData } from 'next/image'
import dummy from '@/public/dummy.png'
import monoClip1 from '@/public/MonoClip/1.png'
import monoClip2 from '@/public/MonoClip/2.png'
import monoClip3 from '@/public/MonoClip/3.png'
import fifteenPadel1 from '@/public/FifteenPadel/1.png'
import fifteenPadel2 from '@/public/FifteenPadel/2.png'
import fifteenPadel3 from '@/public/FifteenPadel/3.png'
import twitterClone1 from '@/public/Twitter Clone/1.png'
import twitterClone2 from '@/public/Twitter Clone/2.png'
import twitterClone3 from '@/public/Twitter Clone/3.png'
import mrGamatoto1 from '@/public/MrGamatoto/1.png'
import mrGamatoto2 from '@/public/MrGamatoto/2.png'
import mrGamatoto3 from '@/public/MrGamatoto/3.png'
import mrTyper1 from '@/public/MrTyper/1.png'
import mrTyper2 from '@/public/MrTyper/2.png'
import mrTyper3 from '@/public/MrTyper/3.png'
import epicMathSaga1 from '@/public/Epic Math Saga/1.png'
import epicMathSaga2 from '@/public/Epic Math Saga/2.png'
import epicMathSaga3 from '@/public/Epic Math Saga/3.png'
import experienceIcpc from '@/public/experience/icpc.png'
import experienceAlibaba from '@/public/experience/alibaba.png'
import about from '@/public/about.png'
import raw from './content.json'
import type { SocialIconName } from './icons'

const IMAGES: Record<string, StaticImageData> = {
  '/dummy.png': dummy,
  '/MonoClip/1.png': monoClip1,
  '/MonoClip/2.png': monoClip2,
  '/MonoClip/3.png': monoClip3,
  '/FifteenPadel/1.png': fifteenPadel1,
  '/FifteenPadel/2.png': fifteenPadel2,
  '/FifteenPadel/3.png': fifteenPadel3,
  '/Twitter Clone/1.png': twitterClone1,
  '/Twitter Clone/2.png': twitterClone2,
  '/Twitter Clone/3.png': twitterClone3,
  '/MrGamatoto/1.png': mrGamatoto1,
  '/MrGamatoto/2.png': mrGamatoto2,
  '/MrGamatoto/3.png': mrGamatoto3,
  '/MrTyper/1.png': mrTyper1,
  '/MrTyper/2.png': mrTyper2,
  '/MrTyper/3.png': mrTyper3,
  '/Epic Math Saga/1.png': epicMathSaga1,
  '/Epic Math Saga/2.png': epicMathSaga2,
  '/Epic Math Saga/3.png': epicMathSaga3,
  '/experience/icpc.png': experienceIcpc,
  '/experience/alibaba.png': experienceAlibaba,
  '/about.png' : about,
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

export interface ExperienceLink {
  label: string
  href: string
  icon: SocialIconName
}

export interface ExperienceItem {
  title: string
  role: string
  body: string
  tags: string[]
  image: StaticImageData
  // Optional external link (repo, post, etc.); omitted when there is nothing to link.
  link?: ExperienceLink
}

// The link shape as it comes out of the JSON (icon is a plain string there).
type RawExperienceLink = { label: string; href: string; icon: string }

export interface ProjectItem {
  title: string
  period: string
  starred: boolean
  description: string
  techStack: string[]
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
    items: raw.experience.items.map((item): ExperienceItem => {
      const link = (item as { link?: RawExperienceLink }).link
      return {
        title: item.title,
        role: item.role,
        body: item.body,
        tags: item.tags,
        image: image(item.image),
        ...(link ? { link: { ...link, icon: link.icon as SocialIconName } } : {}),
      }
    }),
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
