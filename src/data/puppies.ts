export interface Puppy {
  id: string;
  name: string;
  gender: "Male" | "Female";
  color: string;
  status: "Available" | "Reserved" | "Sold";
  personality: string;
  imageUrl: string;
  photos: string[];
}

export const puppies: Puppy[] = [
  {
    id: "puppy-1",
    name: "Birch",
    gender: "Male",
    color: "Black",
    status: "Available",
    personality:
      "A gentle soul who loves to curl up in your lap. Birch greets everyone with a soft nuzzle and has the sweetest, most trusting eyes.",
    imageUrl: "/images/puppies/puppy-1-1.png",
    photos: ["/images/puppies/puppy-1-1.png", "/images/puppies/puppy-1-2.png"],
  },
  {
    id: "puppy-2",
    name: "Hazel",
    gender: "Female",
    color: "Red",
    status: "Available",
    personality:
      "Bold and curious, Hazel is always the first to explore something new. She has a playful streak and loves a good game of tug.",
    imageUrl: "/images/puppies/puppy-2-1.png",
    photos: ["/images/puppies/puppy-2-1.png", "/images/puppies/puppy-2-2.png"],
  },
  {
    id: "puppy-3",
    name: "Sunnie",
    gender: "Female",
    color: "Blond",
    status: "Available",
    personality:
      "Sunnie is equal parts adventurous and affectionate. She'll romp through the yard all morning, then melt into your arms for an afternoon nap.",
    imageUrl: "/images/puppies/puppy-3-1.png",
    photos: ["/images/puppies/puppy-3-1.png", "/images/puppies/puppy-3-2.png"],
  },
  {
    id: "puppy-4",
    name: "River",
    gender: "Male",
    color: "Black with White",
    status: "Available",
    personality:
      "Calm and easygoing, River is happiest when he's near his people. He picks up on routines quickly and has a wonderfully mellow temperament.",
    imageUrl: "/images/puppies/puppy-4-1.png",
    photos: ["/images/puppies/puppy-4-1.png", "/images/puppies/puppy-4-2.png", "/images/puppies/puppy-4-3.png"],
  },
  {
    id: "puppy-5",
    name: "Sage",
    gender: "Female",
    color: "Gold",
    status: "Available",
    personality:
      "Smart and attentive, Sage watches everything with bright, clever eyes. She's incredibly responsive and already starting to follow simple cues.",
    imageUrl: "/images/puppies/puppy-5-1.png",
    photos: ["/images/puppies/puppy-5-1.png", "/images/puppies/puppy-5-2.png"],
  },
  {
    id: "puppy-6",
    name: "Willow",
    gender: "Female",
    color: "Black",
    status: "Available",
    personality:
      "A confident, happy girl with a wagging tail that never stops. Willow loves meeting new people and gets along beautifully with other dogs.",
    imageUrl: "/images/puppies/puppy-6-1.png",
    photos: ["/images/puppies/puppy-6-1.png", "/images/puppies/puppy-6-2.png", "/images/puppies/puppy-6-3.png"],
  },
  {
    id: "puppy-7",
    name: "Maple",
    gender: "Female",
    color: "Red",
    status: "Available",
    personality:
      "Maple is a little ray of sunshine — cheerful, bouncy, and endlessly sweet. She's the one who always checks in on her littermates.",
    imageUrl: "/images/puppies/puppy-7-1.png",
    photos: ["/images/puppies/puppy-7-1.png", "/images/puppies/puppy-7-2.png", "/images/puppies/puppy-7-3.png"],
  },
  {
    id: "puppy-8",
    name: "Coal",
    gender: "Male",
    color: "Black",
    status: "Available",
    personality:
      "Gentle and observant, Coal has an old soul. He's content to sit quietly by your side and seems to understand every word you say.",
    imageUrl: "/images/puppies/puppy-8-1.png",
    photos: ["/images/puppies/puppy-8-1.png", "/images/puppies/puppy-8-2.png", "/images/puppies/puppy-8-3.png"],
  },
];
