import type { StaticImageData } from 'next/image'
import { Star } from 'lucide-react'
import { ImageFrame } from '../Frames/ImageFrame'
import { Button } from '../buttons/Button'

export interface Project {
  title: string
  period: string
  description: string
  // [large left, top right, bottom right]
  images: [StaticImageData, StaticImageData, StaticImageData]
  starred?: boolean
}

export function ProjectCard({ title, period, description, images, starred = false }: Project) {
  return (
    <div className="flex flex-col gap-4 w-full">
      <p className="text-param text-sm font-bold tracking-[0.2em]">{period.toUpperCase()}</p>

      <div className="flex items-center gap-5 w-full">
        <h1 className="flex items-center gap-2 text-4xl font-bold text-cmdlet whitespace-nowrap">
          {title}
          {starred && <Star className="fill-cmdlet text-cmdlet" size={26} />}
        </h1>
        <div className="flex-1 border-t border-border" />
        <Button text="See Detail" />
      </div>

      <div className="grid grid-cols-3 grid-rows-2 gap-3 w-full h-[26rem]">
        <ImageFrame src={images[0]} alt={`${title} preview 1`} classname="col-span-2 row-span-2" frameClass="h-auto" />
        <ImageFrame src={images[1]} alt={`${title} preview 2`} classname="col-span-1 row-span-1" frameClass="h-auto" />
        <ImageFrame src={images[2]} alt={`${title} preview 3`} classname="col-span-1 row-span-1" frameClass="h-auto" />
      </div>

      <div className="w-full border-t-2 border-dashed" />

      <p className="italic text-foreground text-lg leading-relaxed">{description}</p>
    </div>
  )
}
