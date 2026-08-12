import Image, { StaticImageData } from "next/image";

interface ImageFrameProps {
  src: StaticImageData;
  alt: string;
  classname?: string;
}

export function ImageFrame({ src, alt, classname = "" }: ImageFrameProps) {
  return (
    <div className={`${classname} relative bg-black/20 shadow-lg`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover z-0 brightness-90 contrast-110 saturate-75"
      />

      <div
        className="absolute inset-0 z-10 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, #fff 0px, transparent 1px, transparent 2px)',
        }}
      />

      <div className="absolute z-20 top-0 left-0 p-2 text-border font-mono text-2xl leading-none">
        ┌───
      </div>
      <div className="absolute z-20 top-0 right-0 p-2 text-border font-mono text-2xl leading-none">
        ───┐
      </div>
      <div className="absolute z-20 bottom-0 left-0 p-2 text-border font-mono text-2xl leading-none">
        └───
      </div>
      <div className="absolute z-20 bottom-0 right-0 p-2 text-border font-mono text-2xl leading-none">
        ───┘
      </div>

      <div className="absolute inset-0 z-20 border border-cmdlet/30 pointer-events-none" />
    </div>
  );
}