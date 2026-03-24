import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const healthTests = [
  { name: "OFA Hips & Elbows", why: "Screens for hip and elbow dysplasia — orthopedic conditions found across all three parent breeds (Border Collie, Golden Retriever, and Poodle) that can cause pain and mobility issues if not identified early." },
  { name: "PennHIP", why: "An advanced radiographic method that provides a precise measurement of hip joint laxity — more predictive than standard OFA evaluation alone. Used alongside OFA to give us the most complete picture of joint health." },
  { name: "CERF/OFA Eyes", why: "Annual eye exam by a board-certified ophthalmologist to screen for Progressive Retinal Atrophy (PRA), Collie Eye Anomaly (CEA), and other hereditary eye conditions relevant to Border Collie and Poodle lines." },
  { name: "OFA Cardiac", why: "Cardiac evaluation to rule out congenital heart defects and ensure a strong, healthy heart — particularly important given the Golden Retriever's predisposition to certain cardiac conditions." },
  { name: "Thyroid Panel", why: "Screens for hypothyroidism, a condition that can affect all three parent breeds and lead to weight gain, coat changes, and lethargy if left unmanaged." },
  { name: "Embark DNA Panel", why: "Comprehensive genetic screening covering PRA, CEA, Degenerative Myelopathy (DM), von Willebrand Disease (vWD), MDR1 drug sensitivity, and over 200 additional breed-relevant conditions. Ensures no known genetic diseases are passed to puppies." },
];

export default function HealthPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-cream-dark px-6 py-16 text-center sm:py-20">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">Health &amp; Our Philosophy</h1>
        </section>

        {/* Breeding Philosophy */}
        <section className="px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Our Breeding Philosophy</h2>
            <p className="mt-4 leading-relaxed text-text-body">
              We breed for temperament, health, and quality of life — in that order. We are not a
              high-volume operation. We keep limited litters each year so that every puppy receives
              individual attention from birth. Every pairing is carefully planned with the goal of
              producing puppies that benefit from the enhanced genetic diversity of three breed
              lines — Border Collie, Golden Retriever, and Poodle — while screening rigorously
              for the health concerns that can affect each. With hybrid vigor working in their favor
              and a typical lifespan of 12 to 16 years, these are dogs built for long, healthy lives.
              Responsible breeding starts with knowing our dogs inside and out, investing in
              comprehensive health testing, and placing puppies in homes where they will be loved
              and cared for throughout their lives.
            </p>
          </div>
        </section>

        {/* Health Testing Protocol */}
        <section className="bg-cream-dark px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Health Testing Protocol</h2>
            <p className="mt-4 leading-relaxed text-text-body">
              Every parent dog in our program undergoes a rigorous battery of health tests before
              being considered for breeding. Here&apos;s what we test and why it matters:
            </p>
            <div className="mt-8 space-y-6">
              {healthTests.map((test) => (
                <div key={test.name} className="rounded-lg bg-white p-5 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-primary">{test.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-body">{test.why}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Health Guarantee */}
        <section className="px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Health Guarantee</h2>
            <p className="mt-4 leading-relaxed text-text-body">
              Every puppy we place comes with a written health guarantee that covers genetic
              conditions for two years. We stand behind our breeding program and our dogs. If a
              genetic health issue arises, we work with you to make it right. Beyond the guarantee
              period, we offer lifetime breeder support — we are always here for you and your dog,
              no matter how many years go by.
            </p>
          </div>
        </section>

        {/* Spay/Neuter Policy */}
        <section className="bg-cream-dark px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Spay/Neuter Policy</h2>
            <p className="mt-4 leading-relaxed text-text-body">
              All pet puppies are placed on limited AKC registration with a spay/neuter agreement.
              We believe in responsible pet ownership and work with each family to determine the
              best timing for their individual puppy, taking into account current veterinary
              research on the health benefits of waiting until the dog is fully mature.
            </p>
          </div>
        </section>

        {/* Early Socialization */}
        <section className="px-6 py-14 sm:py-16">
          <div className="mx-auto max-w-3xl">
            <h2 className="font-heading text-2xl font-bold sm:text-3xl">Early Socialization</h2>
            <p className="mt-4 leading-relaxed text-text-body">
              From the day they are born, our puppies are exposed to a rich variety of experiences.
              We follow a structured socialization protocol that includes household sounds, different
              surfaces and textures, gentle handling by adults and children, exposure to other
              animals, car rides, and novel objects. By the time they go home at eight weeks, our
              puppies are confident, curious, and well-prepared for life in their new families.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
