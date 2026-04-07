import Image from "next/image";
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
              All puppies are DNA tested with a genetic health panel and veterinary
              checked, so you can bring your puppy home with confidence. We breed
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

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src="/images/goose-river.jpg"
            alt="Goose River valley"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
