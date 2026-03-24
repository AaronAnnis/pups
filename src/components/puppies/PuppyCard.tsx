import type { Puppy } from "@/data/puppies";
import { StatusBadge } from "./StatusBadge";

export function PuppyCard({ name, gender, color, status, personality }: Puppy) {
  return (
    <div className="group relative rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image placeholder */}
      <div className="relative aspect-square overflow-hidden rounded-t-2xl bg-cream-dark">
        <div className="flex h-full items-center justify-center text-text-light/30">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
          </svg>
        </div>
        <div className="absolute top-3 right-3">
          <StatusBadge status={status} />
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="font-heading text-lg font-bold text-text-dark">{name}</h3>
        <p className="mt-1 text-sm text-text-light">
          {gender} · {color}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-text-body">{personality}</p>
      </div>
    </div>
  );
}
