"use client";

import { useState, useEffect, useCallback } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface PhotoLightboxProps {
  photos: string[];
  name: string;
  isOpen: boolean;
  onClose: () => void;
}

export function PhotoLightbox({ photos, name, isOpen, onClose }: PhotoLightboxProps) {
  const [index, setIndex] = useState(0);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  }, [photos.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === photos.length - 1 ? 0 : i + 1));
  }, [photos.length]);

  useEffect(() => {
    if (!isOpen) return;
    setIndex(0);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, prev, next]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/80">
      {/* Backdrop — only this closes the lightbox */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Content — sits above backdrop */}
      <div className="relative z-10 flex flex-col items-center">
        {/* Close button */}
        <button
          onClick={onClose}
          className="mb-2 self-end text-white/80 hover:text-white text-3xl leading-none"
          aria-label="Close"
        >
          &times;
        </button>

        {/* Image container — fixed size so layout doesn't shift between photos */}
        <div className="flex h-[80vh] w-[90vw] items-center justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}${photos[index]}`}
            alt={`${name} photo ${index + 1}`}
            className="max-h-full max-w-full rounded-lg object-contain"
          />
        </div>

        {/* Navigation arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-1 text-2xl text-white/80 hover:bg-black/70 hover:text-white"
              aria-label="Previous photo"
            >
              &lsaquo;
            </button>
            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-1 text-2xl text-white/80 hover:bg-black/70 hover:text-white"
              aria-label="Next photo"
            >
              &rsaquo;
            </button>

            {/* Dots */}
            <div className="mt-3 flex justify-center gap-2">
              {photos.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === index ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
