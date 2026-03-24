export interface Testimonial {
  id: string;
  quote: string;
  familyName: string;
  dogName: string;
  imageUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-1",
    quote:
      "From our very first phone call, we knew Goose River Canine Co. was something special. They answered every question with patience and honesty. Our boy Finnegan came home healthy, confident, and already sleeping through the night — we couldn't have asked for a better start.",
    familyName: "The Andersons",
    dogName: "Finnegan",
    imageUrl: "/images/testimonials/placeholder.jpg",
  },
  {
    id: "testimonial-2",
    quote:
      "We were nervous first-time dog owners, but the team at Goose River walked us through everything — from puppy-proofing our home to the first vet visit. Juniper is the sweetest, most well-adjusted dog we've ever met. Our kids are absolutely in love with her.",
    familyName: "The Patels",
    dogName: "Juniper",
    imageUrl: "/images/testimonials/placeholder.jpg",
  },
  {
    id: "testimonial-3",
    quote:
      "We drove six hours to pick up our pup and it was worth every mile. The health testing, the early socialization, the care that goes into each litter — it all shows. Oakley is smart, gentle, and has the most wonderful temperament. Thank you for raising such incredible dogs.",
    familyName: "The Brennans",
    dogName: "Oakley",
    imageUrl: "/images/testimonials/placeholder.jpg",
  },
  {
    id: "testimonial-4",
    quote:
      "This is our second dog from Goose River and we'll never go anywhere else. Luna settled right into our family like she'd always been here. The ongoing support after bringing her home has meant the world to us — they truly care about every puppy they place.",
    familyName: "The Hernandezes",
    dogName: "Luna",
    imageUrl: "/images/testimonials/placeholder.jpg",
  },
];
