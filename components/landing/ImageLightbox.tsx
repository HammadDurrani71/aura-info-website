"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

type ImageLightboxProps = {
  open: boolean;
  onClose: () => void;
  src: string;
  alt: string;
  /** Wide infographic: horizontal scroll inside the modal */
  horizontalScroll?: boolean;
};

export default function ImageLightbox({
  open,
  onClose,
  src,
  alt,
  horizontalScroll = false,
}: ImageLightboxProps) {
  const [mounted, setMounted] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{
    pointerId: number | null;
    startX: number;
    scrollLeft: number;
  }>({ pointerId: null, startX: 0, scrollLeft: 0 });

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const onScrollPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    // Touch should use native panning; mouse/pen gets drag-to-scroll.
    if (e.pointerType === "touch") return;
    e.preventDefault();
    dragRef.current = {
      pointerId: e.pointerId,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
    el.style.cursor = "grabbing";
  }, []);

  const onScrollPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || e.pointerType === "touch") return;
    const { pointerId, startX, scrollLeft } = dragRef.current;
    if (pointerId !== e.pointerId) return;
    el.scrollLeft = scrollLeft - (e.clientX - startX);
  }, []);

  const onScrollPointerUp = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el || e.pointerType === "touch") return;
    if (dragRef.current.pointerId !== e.pointerId) return;
    dragRef.current.pointerId = null;
    try {
      el.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
    el.style.cursor = "grab";
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={alt}
          className="fixed inset-0 z-[9999] isolate flex items-center justify-center p-3 sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            className="absolute inset-0 z-0 bg-black/85 backdrop-blur-sm"
            aria-label="Close preview"
            onClick={onClose}
          />
          <motion.div
            className="relative z-10 w-full max-w-[min(99vw,2200px)]"
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {horizontalScroll ? (
              <div className="relative max-h-[min(94vh,980px)] w-full">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-2 top-2 z-20 rounded-full bg-black/50 p-2.5 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/70"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" strokeWidth={2} />
                </button>
                <div
                  ref={scrollRef}
                  onPointerDown={onScrollPointerDown}
                  onPointerMove={onScrollPointerMove}
                  onPointerUp={onScrollPointerUp}
                  onPointerCancel={onScrollPointerUp}
                  className="max-h-[min(92vh,920px)] w-full cursor-grab select-none overflow-x-auto overflow-y-auto rounded-xl border border-white/15 bg-[#f8f4ec] shadow-2xl [-webkit-overflow-scrolling:touch] active:cursor-grabbing"
                  style={{ touchAction: "pan-x pan-y" }}
                >
                  <Image
                    src={src}
                    alt={alt}
                    width={2400}
                    height={900}
                    className="pointer-events-none h-auto w-[3200px] max-w-none object-contain"
                    sizes="3200px"
                    draggable={false}
                    priority
                  />
                </div>
              </div>
            ) : (
              <div className="relative w-full">
                <button
                  type="button"
                  onClick={onClose}
                  className="absolute right-2 top-2 z-20 rounded-full bg-black/50 p-2.5 text-white shadow-lg backdrop-blur-md transition-colors hover:bg-black/70"
                  aria-label="Close"
                >
                  <X className="h-5 w-5" strokeWidth={2} />
                </button>
                <div className="relative w-full overflow-hidden rounded-xl border border-white/15 bg-[#0a1628] shadow-2xl">
                  <div className="relative mx-auto aspect-video w-full max-h-[min(90vh,920px)] max-w-full">
                    <Image
                      src={src}
                      alt={alt}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1400px) 96vw, 1280px"
                      priority
                    />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  , document.body);
}
