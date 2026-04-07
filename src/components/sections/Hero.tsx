import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-cream-dark">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        {/* Text */}
        <div>
          <h1 className="font-heading text-4xl font-bold leading-tight text-text-dark sm:text-5xl lg:text-6xl">
            Keen Minds. <br className="hidden lg:block" />Kind Hearts.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-text-body">
            Our puppies blend three exceptional breeds — Golden Retriever,
            Poodle, and Border Collie — into one remarkable companion. Sharp and
            trainable, gentle and patient, with a low-shedding coat and a heart
            built for family life. Raised with love from day one.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/puppies"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Meet Our Puppies
            </Link>
            <Link
              href="/apply"
              className="rounded-full border-2 border-primary px-7 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Apply Now
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl lg:aspect-square">
          <Image
            src="/paw.png"
            alt="Puppy paw"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
