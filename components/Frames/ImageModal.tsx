'use client'

import Image, { StaticImageData } from "next/image";
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Terminal, X } from "lucide-react";

interface ImageModalProps {
  src: StaticImageData;
  alt: string;
  caption?: string;
  open: boolean;
  onClose: () => void;
}

// SSR-safe client check: false on the server, true after hydration, without
// setting state inside an effect.
const subscribe = () => () => {};
const useIsClient = () => useSyncExternalStore(subscribe, () => true, () => false);

export function ImageModal({ src, alt, caption, open, onClose }: ImageModalProps) {
  // Portal target (document.body) only exists on the client; gate on it so the
  // always-rendered AnimatePresence stays safe during static prerender.
  const isClient = useIsClient();

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          key="image-modal"
          role="dialog"
          aria-modal="true"
          aria-label={caption ?? alt}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className="fixed inset-0 z-100 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 sm:p-6"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ x: "-10%" }}
            animate={{ x: 0 }}
            exit={{ x: "10%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.35 }}
            className=" rounded-2xl relative flex max-h-[95vh] w-full max-w-6xl flex-col overflow-hidden border border-border bg-background shadow-2xl"
          >
            <div className="flex items-end justify-between gap-4 bg-background-alt">
              <span className="truncate font-mono text-sm text-foreground bg-background px-3 pt-3 pb-2 rounded-t-2xl flex items-center gap-2 min-w-50 ml-3">
                <Terminal size={18}/>
                {caption ?? alt}
              </span>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="shrink-0 text-foreground p-4 transition-colors hover:bg-red-600 h-full"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>
            <div className="flex items-center justify-center overflow-auto p-4">
              <Image
                src={src}
                alt={alt}
                className="h-auto w-full max-h-[85vh] object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
