import Link from "next/link";
import { puppies } from "@/data/puppies";
import { PuppyCard } from "@/components/puppies/PuppyCard";

export function FeaturedLitter() {
  const featured = puppies.slice(0, 4);

  return (
    <section className="bg-cream-dark">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <h2 className="font-heading text-3xl font-bold text-text-dark sm:text-4xl">
            Current Litter
          </h2>
          <p className="mt-3 text-text-body">
            Rosie &times; Summit &mdash; Born February 2026
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((puppy) => (
            <PuppyCard key={puppy.id} {...puppy} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/puppies"
            className="font-semibold text-primary transition-colors hover:text-primary-dark"
          >
            View All Puppies &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
