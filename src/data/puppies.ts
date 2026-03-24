export interface Puppy {
  id: string;
  name: string;
  gender: "Male" | "Female";
  color: string;
  status: "Available" | "Reserved" | "Sold";
  personality: string;
  imageUrl: string;
}

export const puppies: Puppy[] = [
  {
    id: "puppy-1",
    name: "Willow",
    gender: "Female",
    color: "Golden",
    status: "Available",
    personality:
      "A gentle soul who loves to curl up in your lap. Willow greets everyone with a soft nuzzle and has the sweetest, most trusting eyes.",
    imageUrl: "/images/puppies/placeholder.jpg",
  },
  {
    id: "puppy-2",
    name: "Cooper",
    gender: "Male",
    color: "Apricot",
    status: "Available",
    personality:
      "Bold and curious, Cooper is always the first to explore something new. He has a playful streak and loves a good game of tug.",
    imageUrl: "/images/puppies/placeholder.jpg",
  },
  {
    id: "puppy-3",
    name: "Maple",
    gender: "Female",
    color: "Red",
    status: "Reserved",
    personality:
      "Maple is equal parts adventurous and affectionate. She'll romp through the yard all morning, then melt into your arms for an afternoon nap.",
    imageUrl: "/images/puppies/placeholder.jpg",
  },
  {
    id: "puppy-4",
    name: "River",
    gender: "Male",
    color: "Cream",
    status: "Available",
    personality:
      "Calm and easygoing, River is happiest when he's near his people. He picks up on routines quickly and has a wonderfully mellow temperament.",
    imageUrl: "/images/puppies/placeholder.jpg",
  },
  {
    id: "puppy-5",
    name: "Sage",
    gender: "Female",
    color: "Merle",
    status: "Available",
    personality:
      "Smart and attentive, Sage watches everything with bright, clever eyes. She's incredibly responsive and already starting to follow simple cues.",
    imageUrl: "/images/puppies/placeholder.jpg",
  },
  {
    id: "puppy-6",
    name: "Birch",
    gender: "Male",
    color: "Chocolate",
    status: "Sold",
    personality:
      "A confident, happy boy with a wagging tail that never stops. Birch loves meeting new people and gets along beautifully with other dogs.",
    imageUrl: "/images/puppies/placeholder.jpg",
  },
  {
    id: "puppy-7",
    name: "Clover",
    gender: "Female",
    color: "Golden",
    status: "Available",
    personality:
      "Clover is a little ray of sunshine — cheerful, bouncy, and endlessly sweet. She's the one who always checks in on her littermates.",
    imageUrl: "/images/puppies/placeholder.jpg",
  },
  {
    id: "puppy-8",
    name: "Hazel",
    gender: "Female",
    color: "Apricot",
    status: "Reserved",
    personality:
      "Gentle and observant, Hazel has an old soul. She's content to sit quietly by your side and seems to understand every word you say.",
    imageUrl: "/images/puppies/placeholder.jpg",
  },
];
