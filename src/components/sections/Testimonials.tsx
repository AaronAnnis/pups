import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-center font-heading text-3xl font-bold text-text-dark sm:text-4xl">
          Happy Families
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {featured.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl bg-cream p-8"
            >
              <span className="font-heading text-4xl leading-none text-primary/30">
                &ldquo;
              </span>
              <p className="mt-2 text-sm italic leading-relaxed text-text-body">
                {t.quote}
              </p>
              <div className="mt-6">
                <p className="font-semibold text-text-dark">{t.familyName}</p>
                <p className="text-sm text-text-light">{t.dogName}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
