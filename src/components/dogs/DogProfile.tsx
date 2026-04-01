import type { Dog } from "@/data/dogs";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export function DogProfile({ dog }: { dog: Dog }) {
  return (
    <section className="rounded-2xl bg-white p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Dog photo */}
        {dog.imageUrl && !dog.imageUrl.includes("placeholder") ? (
          <img
            src={`${basePath}${dog.imageUrl}`}
            alt={dog.name}
            className="h-96 w-full shrink-0 rounded-xl object-cover lg:h-[28rem] lg:w-80"
          />
        ) : (
          <div className="flex h-72 w-full shrink-0 items-center justify-center rounded-xl bg-cream-dark lg:h-80 lg:w-80">
            <span className="text-sm text-text-light">Photo coming soon</span>
          </div>
        )}

        <div className="flex-1">
          {/* Name and role */}
          <div className="flex items-center gap-3">
            <h2 className="font-heading text-3xl font-bold">{dog.name}</h2>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${
                dog.role === "Dam" ? "bg-primary" : "bg-accent"
              }`}
            >
              {dog.role}
            </span>
          </div>
          <p className="mt-1 text-text-light">{dog.breed}</p>

          {/* Stats grid */}
          <div className="mt-6 grid grid-cols-3 gap-4">
<div>
              <p className="text-xs font-medium uppercase tracking-wide text-text-light">
                Weight
              </p>
              <p className="mt-1 font-medium text-text-dark">{dog.weight}</p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wide text-text-light">
                Color
              </p>
              <p className="mt-1 font-medium text-text-dark">{dog.color}</p>
            </div>
          </div>

          {/* Temperament tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {dog.temperament.map((trait) => (
              <span
                key={trait}
                className="rounded-full bg-accent-light/30 px-3 py-1 text-sm font-medium text-accent"
              >
                {trait}
              </span>
            ))}
          </div>

          {/* Bio */}
          <p className="mt-6 leading-relaxed text-text-body">{dog.bio}</p>
        </div>
      </div>
    </section>
  );
}
