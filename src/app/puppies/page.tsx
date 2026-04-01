import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PuppyCard } from "@/components/puppies/PuppyCard";
import { puppies } from "@/data/puppies";

const steps = [
  { label: "Apply", description: "Fill out our application so we can learn about your family and lifestyle." },
  { label: "Approved", description: "We review your application and schedule a call to get to know you better." },
  { label: "Deposit", description: "Place a deposit to secure your spot on our waitlist." },
  { label: "Matched", description: "We help match you with the perfect puppy based on temperament and fit." },
  { label: "Go Home", description: "Your puppy comes home at 8 weeks, fully vetted and ready to join your family." },
];

export default function PuppiesPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="px-6 py-16 text-center sm:py-20">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Our Puppies</h1>
        </section>

        {/* Litter info */}
        <section className="px-6 pb-12">
          <div className="mx-auto max-w-5xl rounded-xl bg-cream-dark p-6 text-center sm:p-8">
            <h2 className="font-heading text-2xl font-bold">Current Litter — Tansy &times; Summit</h2>
            <p className="mt-2 text-text-light">Born February 7, 2026 &middot; 8 puppies</p>
          </div>
        </section>

        {/* Puppy grid */}
        <section className="px-6 pb-16">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {puppies.map((puppy) => (
              <PuppyCard key={puppy.id} {...puppy} />
            ))}
          </div>
        </section>

        {/* Adoption process */}
        <section className="bg-cream-dark px-6 py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold">Our Adoption Process</h2>
            <p className="mt-4 text-text-light">
              From application to homecoming — here&apos;s how it works.
            </p>
          </div>

          <div className="mx-auto mt-12 flex max-w-4xl flex-col gap-8 sm:flex-row sm:gap-4">
            {steps.map((step, i) => (
              <div key={step.label} className="flex-1 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-3 font-heading text-lg font-bold">{step.label}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-light">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/apply"
              className="inline-block rounded-full bg-primary px-8 py-3 font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Ready to Apply?
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
