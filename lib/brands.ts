export type Brand = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  origin: string;
  founded: number;
  specialty: string;
  color: string;
  values: string[];
};

export const brands: Brand[] = [
  {
    slug: "purrfect-home",
    name: "Purrfect Home",
    tagline: "Furniture pets actually use",
    description:
      "Purrfect Home designs cat towers, hideaways and orthopedic beds with veterinary input. Every piece is tested by a panel of shelter cats and dogs before it goes into production.",
    origin: "Denmark",
    founded: 2014,
    specialty: "Cat furniture & beds",
    color: "#F47A1F",
    values: ["FSC-certified wood", "Washable covers", "5-year frame warranty"],
  },
  {
    slug: "playpaw",
    name: "PlayPaw",
    tagline: "Toys built for real play",
    description:
      "PlayPaw makes durable, natural-material toys — rope, wool and natural rubber — without small plastic parts. Their designs are developed with animal behaviourists to match how dogs and cats like to hunt and play.",
    origin: "Canada",
    founded: 2017,
    specialty: "Toys",
    color: "#2F7D3A",
    values: ["Natural materials", "No small plastic parts", "Pet-safe dyes"],
  },
  {
    slug: "bowlcraft",
    name: "Bowlcraft",
    tagline: "Feeding, beautifully",
    description:
      "Bowlcraft produces ceramic and stainless-steel feeders that are as nice to look at as they are practical: non-slip bases, whisker-friendly shapes and dishwasher-safe inserts.",
    origin: "Portugal",
    founded: 2012,
    specialty: "Bowls & feeders",
    color: "#0F4D2A",
    values: ["Lead-free glazes", "Dishwasher safe", "Hand-finished"],
  },
  {
    slug: "wild-harvest",
    name: "Wild Harvest",
    tagline: "Nutrition the way nature intended",
    description:
      "Wild Harvest recipes start with free-range or wild-caught protein and contain no artificial colours, flavours or preservatives. Formulated by board-certified veterinary nutritionists.",
    origin: "New Zealand",
    founded: 2009,
    specialty: "Food & treats",
    color: "#8A4B21",
    values: ["Meat-first recipes", "No artificial additives", "Sustainably sourced"],
  },
  {
    slug: "trailtail",
    name: "TrailTail",
    tagline: "Gear for every adventure",
    description:
      "TrailTail builds leashes, collars and carriers for city walks and mountain trails alike, with reflective details and climbing-grade hardware.",
    origin: "USA",
    founded: 2016,
    specialty: "Walking & travel",
    color: "#C9A44C",
    values: ["Climbing-grade hardware", "Reflective safety", "Lifetime repair program"],
  },
  {
    slug: "fluffcare",
    name: "FluffCare",
    tagline: "Gentle grooming",
    description:
      "FluffCare makes soap-free shampoos and comfortable grooming tools for sensitive pets, developed alongside professional groomers.",
    origin: "UK",
    founded: 2018,
    specialty: "Grooming",
    color: "#5BAA6A",
    values: ["Cruelty-free", "Soap & paraben free", "Recyclable packaging"],
  },
];

export function getBrand(slug: string) {
  return brands.find((b) => b.slug === slug);
}
