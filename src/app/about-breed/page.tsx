import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const sections = [
  {
    title: "Overview",
    body: `Our puppies are a carefully planned cross. This three-breed foundation brings together exceptional intelligence, gentle warmth, and a low-shedding coat in one versatile companion. The Border Collie contributes sharp focus and trainability, the Golden Retriever adds patience and an easygoing nature, and the Poodle rounds things out with hypoallergenic qualities and keen problem-solving ability. The result is a dog that is brilliant but not intense, active but not restless, and deeply devoted to its family.`,
  },
  {
    title: "Temperament",
    body: `With the Border Collie ranked first in breed intelligence, the Poodle second, and the Golden Retriever fourth, these dogs inherit an extraordinary capacity to learn. But what truly sets them apart is how that intelligence is delivered — wrapped in warmth and a genuine desire to please. The Golden Retriever influence softens the Border Collie's intensity, producing a dog that is affectionate, patient, and gentle with children, strangers, and other pets alike. They bond deeply with their families and are happiest when they're part of the action, either a training session in the yard or a quiet evening at home. They show an independence from the Border Collie side, with a willingness for training and directives.`,
  },
  {
    title: "Size & Appearance",
    body: `Our dogs mature to a medium size, typically weighing between 35 and 55 pounds — males tend toward the higher end at 45 to 55 pounds, while females settle around 35 to 45 pounds. They stand 18 to 23 inches at the shoulder with a slightly sturdier build than a standard Bordoodle, thanks to the Golden Retriever influence. Coats range from wavy and loose-curled (the most common) to curly or occasionally straight, and you'll find a beautiful variety of colors in our lines — blonde, gold, apricot, red, black, and black with white. The Golden Retriever heritage means golden, cream, and apricot tones appear especially often.`,
  },
  {
    title: "Exercise & Energy",
    body: `These are moderate to high-energy dogs that thrive with about 60 to 90 minutes of daily activity — a long walk, a game of fetch or frisbee, a hike, or a swim. They have the Border Collie's love of movement paired with the Golden Retriever's ability to settle down when the adventure is over. Mental stimulation matters just as much as physical exercise; puzzle toys, training sessions, and nose work keep their sharp minds engaged and satisfied. They excel at agility, obedience, therapy and service work, and just about any activity you invite them to join. Inside the house, they're calm and content to be near their people — just as happy on the couch as on the trail.`,
  },
  {
    title: "Coat & Grooming",
    body: `One of the great advantages of this cross is a low to minimal shedding coat — curlier coats shed less, and most of our puppies are allergy-friendly. Their hair sometimes grows continuously, and as with all dogs, regular grooming is essential. Plan on brushing two to three times per week at minimum (daily for curlier coats) and professional grooming every six to nine weeks. Pay special attention to areas prone to matting — behind the ears, in the armpits, and around the collar. Because their floppy ears can trap moisture, regular ear cleaning is also important to prevent infections.`,
  },
  {
    title: "Why This Cross",
    body: `We chose this particular combination because it produces dogs that are brilliant but not neurotic, active but not hyperactive, and affectionate without being needy. The Border Collie brings unmatched intelligence and focus. The Golden Retriever adds patience, tolerance, and a rock-steady temperament. The Poodle contributes a low-shedding coat and sharp problem-solving instincts. Together, the three-breed gene pool provides enhanced genetic diversity and the benefits of hybrid vigor, contributing to a typical lifespan of 12 to 16 years. These dogs are remarkably versatile — equally at home as a family companion, a therapy or service dog, or an agility competitor. We're passionate about this cross because we've seen firsthand the exceptional dogs it produces.`,
  },
];

export default function AboutBreedPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-cream-dark px-6 py-16 text-center sm:py-20">
          <h1 className="font-heading text-4xl font-bold sm:text-5xl">About the Breed</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-text-light">
            Discover what makes our Border Collie / Goldendoodle cross — one-quarter Border Collie, three-eighths Golden Retriever, three-eighths Poodle — such an extraordinary companion.
          </p>
        </section>

        {/* Sections */}
        {sections.map((section, i) => (
          <section
            key={section.title}
            className={`px-6 py-14 sm:py-16 ${i % 2 === 0 ? "bg-cream" : "bg-cream-dark"}`}
          >
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-2xl font-bold sm:text-3xl">{section.title}</h2>
              <p className="mt-4 leading-relaxed text-text-body">{section.body}</p>

            </div>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
