import Link from "next/link";

export function IntroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8">
        {/* Text */}
        <div>
          <h2 className="font-heading text-3xl font-bold text-text-dark sm:text-4xl">
            Raised with Love on the Goose River
          </h2>
          <div className="mt-6 space-y-4 text-text-body leading-relaxed">
            <p>
              At Goose River Canine Co., our puppies are family from the moment
              they're born. They grow up in our home — not a kennel — surrounded
              by the sounds, sights, and rhythms of everyday life. That early
              exposure builds confident, well-adjusted dogs who are ready to
              thrive in yours.
            </p>
            <p>
              Every parent in our program undergoes comprehensive health testing —
              OFA hips and elbows, cardiac and eye exams, and full Embark DNA
              panels — so you can bring your puppy home with confidence. We breed
              for temperament first: the Border Collie's intelligence, the Golden
              Retriever's patience, and the Poodle's low-shedding coat, all in a
              dog that bonds deeply with its people.
            </p>
            <p>
              From the Early Neurological Stimulation exercises we start in week
              one to the socialization adventures that fill their first eight
              weeks, every detail is designed to give your puppy the strongest
              possible start.
            </p>
          </div>
          <Link
            href="/about-breed"
            className="mt-6 inline-block font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            Learn More About Our Breed &rarr;
          </Link>
        </div>

        {/* Image placeholder */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-2xl bg-cream-dark text-text-light">
          <span className="text-lg font-medium">Photo Coming Soon</span>
        </div>
      </div>
    </section>
  );
}
