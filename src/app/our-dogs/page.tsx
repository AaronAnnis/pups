import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { DogProfile } from "@/components/dogs/DogProfile";
import { dogs } from "@/data/dogs";

export default function OurDogsPage() {
  return (
    <>
      <Header />
      <main className="px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <h1 className="font-heading text-4xl font-bold sm:text-5xl">Our Dogs</h1>
            <p className="mt-4 text-lg text-text-light">
              Discover what makes our Goldendoodle/Border Collie cross such an extraordinary companion.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {dogs.map((dog) => (
              <DogProfile key={dog.id} dog={dog} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
