import Image, { StaticImageData } from "next/image";

interface ImageFrameProps {
  src: StaticImageData;
  alt: string;
  classname?: string;
  frameClass?: string;
}

export function ImageFrame({ src, alt, classname = "", frameClass = "aspect-video" }: ImageFrameProps) {
  return (
    <div className={`${classname} ${frameClass} group relative bg-black/20 shadow-lg overflow-hidden cursor-pointer`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover z-0 brightness-90 contrast-110 saturate-75 transition-transform duration-500 ease-out group-hover:scale-110"
      />

      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 2px)',
        }}
      />

      <div className="absolute z-20 inset-4 pointer-events-none border border-cmdlet/30 transition-all duration-500 ease-out group-hover:inset-6">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-border font-mono text-2xl leading-none">
          ┌
        </div>
        <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-border font-mono text-2xl leading-none">
          ┐
        </div>
        <div className="absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2 text-border font-mono text-2xl leading-none">
          └
        </div>
        <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 text-border font-mono text-2xl leading-none">
          ┘
        </div>
      </div>
    </div>
  );
}
