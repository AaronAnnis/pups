import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/forms/ContactForm";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-center font-heading text-4xl font-bold sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-text-light">
            Have a question about our puppies or our program? We&apos;d love to hear from you.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Contact form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-heading text-lg font-bold">Email</h3>
                <a
                  href="mailto:hello@gooserivercanine.com"
                  className="mt-1 block text-primary hover:text-primary-dark"
                >
                  hello@gooserivercanine.com
                </a>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold">Phone</h3>
                <a
                  href="tel:+15551234567"
                  className="mt-1 block text-primary hover:text-primary-dark"
                >
                  (555) 123-4567
                </a>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold">Location</h3>
                <p className="mt-1 text-text-body">Goose River Valley</p>
              </div>

              <div>
                <h3 className="font-heading text-lg font-bold">Response Time</h3>
                <p className="mt-1 text-text-body">
                  We typically respond within 24 hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
