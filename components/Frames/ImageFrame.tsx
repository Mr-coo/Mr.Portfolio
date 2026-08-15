'use client'

import Image, { StaticImageData } from "next/image";
import { useState } from "react";
import { ImageModal } from "./ImageModal";

interface ImageFrameProps {
  src: StaticImageData;
  alt: string;
  classname?: string;
  frameClass?: string;
  caption?: string;
}

export function ImageFrame({ src, alt, classname = "", frameClass = "aspect-video", caption }: ImageFrameProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`Open ${alt}`}
        className={`${classname} ${frameClass} group relative block p-0 bg-black/20 shadow-lg overflow-hidden cursor-pointer`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover z-0 brightness-90 contrast-110 saturate-75 transition-transform duration-500 ease-out group-hover:scale-110"
        />

      <div className="absolute z-20 inset-4 pointer-events-none transition-all opacity-45 duration-500 ease-out group-hover:inset-6">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-cmdlet font-mono text-2xl leading-none drop-shadow-[2px_2px_3px_rgba(0,0,0,0.6)]">
          ┌
        </div>

        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-cmdlet font-mono text-2xl leading-none drop-shadow-[2px_2px_3px_rgba(0,0,0,0.6)]">
          ┐
        </div>

        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-cmdlet font-mono text-2xl leading-none drop-shadow-[2px_2px_3px_rgba(0,0,0,0.6)]">
          └
        </div>

        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-cmdlet font-mono text-2xl leading-none drop-shadow-[2px_2px_3px_rgba(0,0,0,0.6)]">
          ┘
        </div>
      </div>
      </button>

      <ImageModal
        src={src}
        alt={alt}
        caption={caption}
        open={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
}
