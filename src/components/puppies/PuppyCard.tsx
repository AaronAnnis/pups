"use client";

import { useState } from "react";
import type { Puppy } from "@/data/puppies";
import { StatusBadge } from "./StatusBadge";
import { PhotoLightbox } from "./PhotoLightbox";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function PuppyCard({ name, gender, color, status, personality, imageUrl, photos }: Puppy) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div className="group relative rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <button
          type="button"
          className="relative aspect-square w-full cursor-pointer overflow-hidden rounded-t-2xl bg-cream-dark"
          onClick={() => setLightboxOpen(true)}
          aria-label={`View photos of ${name}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`${basePath}${imageUrl}`}
            alt={name}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-3 right-3">
            <StatusBadge status={status} />
          </div>
          {photos.length > 1 && (
            <div className="absolute bottom-2 right-2 rounded-full bg-black/50 px-2 py-0.5 text-xs text-white">
              {photos.length} photos
            </div>
          )}
        </button>

        {/* Info */}
        <div className="p-5">
          <h3 className="font-heading text-lg font-bold text-text-dark">{name}</h3>
          <p className="mt-1 text-sm text-text-light">
            {gender} · {color}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-body">{personality}</p>
        </div>
      </div>

      <PhotoLightbox
        photos={photos}
        name={name}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
