import type { StaticImageData } from 'next/image'
import { Star } from 'lucide-react'
import { ImageFrame } from '../Frames/ImageFrame'
import { Button } from '../buttons/Button'
import { SmallCard } from './SmallCard'

export interface Project {
  title: string
  period: string
  description: string
  techStack: string[]
  // [large left, top right, bottom right]
  images: [StaticImageData, StaticImageData, StaticImageData]
  starred?: boolean
  href?: string
}

export function ProjectCard({ title, period, description, techStack, images, starred = false, href }: Project) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-param text-sm font-bold tracking-[0.2em]">{period.toUpperCase()}</p>

      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 w-full">
        <h1 className="flex items-center gap-2 text-2xl sm:text-3xl font-bold border-b-2 p-2 text-cmdlet">
          {title}
          {starred && <Star className="fill-cmdlet text-cmdlet shrink-0" size={26} />}
        </h1>
        <div className="hidden sm:block flex-1 border-t border-border" />
        <Button text="See Detail" href={href || undefined} disabled={!href} />
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-3 w-full h-64 sm:h-80 md:h-[26rem]">
        <ImageFrame src={images[0]} alt={`${title} preview 1`} classname="col-span-2 row-span-2" frameClass="h-auto" />
        <ImageFrame src={images[1]} alt={`${title} preview 2`} classname="col-span-1 row-span-1" frameClass="h-auto" />
        <ImageFrame src={images[2]} alt={`${title} preview 3`} classname="col-span-1 row-span-1" frameClass="h-auto" />
      </div>

      <div className="w-full border-t-2 border-dashed" />

      <p className="text-foreground">{description}</p>

      <div className="flex flex-wrap gap-x-5 gap-y-2 justify-start items-center">
        {techStack.map((tech) => (
          <SmallCard key={tech} text={tech} />
        ))}
      </div>
    </div>
  )
}
