import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ApplicationForm } from "@/components/forms/ApplicationForm";

const steps = [
  { number: 1, title: "Apply", description: "Fill out our application below" },
  { number: 2, title: "Review", description: "We'll review your application within 48 hours" },
  { number: 3, title: "Approved", description: "If approved, you'll be invited to place a deposit" },
  { number: 4, title: "Deposit", description: "$500 non-refundable deposit to secure your spot" },
  { number: 5, title: "Matched", description: "We'll match you with the perfect puppy" },
  { number: 6, title: "Go Home", description: "Your puppy comes home at 8 weeks" },
];

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-cream">
        {/* Hero */}
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h1 className="font-heading text-4xl font-bold text-text-dark md:text-5xl">
              Apply for a Puppy
            </h1>
            <p className="mt-4 text-lg text-text-body">
              We carefully review every application to ensure our puppies go to loving, prepared homes.
            </p>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-12 text-center font-heading text-2xl font-bold text-text-dark md:text-3xl">
              Our Process
            </h2>

            {/* Desktop horizontal timeline */}
            <div className="hidden md:block">
              <div className="relative flex items-start justify-between">
                {/* Connecting line */}
                <div className="absolute left-[calc(8.33%+16px)] right-[calc(8.33%+16px)] top-4 h-0.5 bg-primary/30" />
                {steps.map((step) => (
                  <div key={step.number} className="relative flex w-1/6 flex-col items-center text-center">
                    <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                      {step.number}
                    </div>
                    <h3 className="mt-3 text-sm font-semibold text-text-dark">{step.title}</h3>
                    <p className="mt-1 text-xs leading-snug text-text-body">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile vertical timeline */}
            <div className="md:hidden">
              <div className="relative ml-4">
                {/* Vertical line */}
                <div className="absolute bottom-0 left-4 top-0 w-0.5 bg-primary/30" />
                <div className="space-y-8">
                  {steps.map((step) => (
                    <div key={step.number} className="relative flex gap-5">
                      <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                        {step.number}
                      </div>
                      <div className="pt-0.5">
                        <h3 className="text-sm font-semibold text-text-dark">{step.title}</h3>
                        <p className="mt-0.5 text-xs leading-snug text-text-body">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="pb-20">
          <div className="mx-auto max-w-3xl px-6">
            <ApplicationForm />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
