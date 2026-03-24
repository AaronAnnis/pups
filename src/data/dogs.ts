export interface HealthTest {
  name: string;
  result: string;
  date: string;
}

export interface Dog {
  id: string;
  name: string;
  breed: string;
  role: "Dam" | "Sire";
  dateOfBirth: string;
  weight: string;
  color: string;
  temperament: string[];
  healthTests: HealthTest[];
  imageUrl: string;
  bio: string;
}

export const dogs: Dog[] = [
  {
    id: "dog-1",
    name: "Rosie",
    breed: "Goldendoodle",
    role: "Dam",
    dateOfBirth: "2023-04-12",
    weight: "48 lbs",
    color: "Golden",
    temperament: [
      "Gentle",
      "Affectionate",
      "Patient",
      "Eager to please",
      "Great with children",
    ],
    healthTests: [
      { name: "OFA Hips", result: "Good", date: "2024-10-15" },
      { name: "OFA Elbows", result: "Normal", date: "2024-10-15" },
      { name: "OFA Eyes (CAER)", result: "Normal", date: "2025-01-08" },
      { name: "OFA Heart", result: "Normal", date: "2024-10-15" },
      { name: "PennHIP", result: "DI 0.32 / 0.35", date: "2024-11-02" },
      {
        name: "Embark DNA Panel",
        result: "Clear — no genetic diseases detected",
        date: "2024-06-20",
      },
    ],
    imageUrl: "/images/dogs/placeholder.jpg",
    bio: "Rosie is the heart of our home — a loyal, loving girl who has never met a stranger. She's incredibly gentle with children and has a calm, nurturing presence that makes her an outstanding mother. When she's not snuggling on the couch, you'll find her splashing in the creek behind our property.",
  },
  {
    id: "dog-2",
    name: "Summit",
    breed: "Bordoodle (Border Collie / Goldendoodle)",
    role: "Sire",
    dateOfBirth: "2022-08-03",
    weight: "54 lbs",
    color: "Black and White",
    temperament: [
      "Intelligent",
      "Loyal",
      "Athletic",
      "Calm",
      "Focused",
    ],
    healthTests: [
      { name: "OFA Hips", result: "Excellent", date: "2024-08-22" },
      { name: "OFA Elbows", result: "Normal", date: "2024-08-22" },
      { name: "OFA Eyes (CAER)", result: "Normal", date: "2025-02-14" },
      { name: "OFA Heart", result: "Normal", date: "2024-08-22" },
      { name: "PennHIP", result: "DI 0.28 / 0.30", date: "2024-09-10" },
      {
        name: "Embark DNA Panel",
        result: "Clear — no genetic diseases detected",
        date: "2024-04-05",
      },
    ],
    imageUrl: "/images/dogs/placeholder.jpg",
    bio: "Summit is a striking, athletic boy with the intelligence of a Border Collie and the easygoing warmth of a Goldendoodle. He's our adventure buddy — always ready for a hike or a swim — but equally happy to settle down for a quiet evening at home. His puppies consistently inherit his steady confidence and gentle nature.",
  },
];
