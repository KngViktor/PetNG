export const site = {
  name: "PetNG",
  tagline: "Everything Your Pets Love",
  description:
    "PetNG is a pet store for dogs and cats: food, toys, bowls, beds, grooming and travel gear, picked by pet owners and delivered fast.",
  currency: "$",
  email: "hello@petng.com",
  phone: "+1 (555) 014-7729",
  address: "24 Willow Lane, Greenfield",
  hours: "Mon–Sat, 8:00–20:00",
  freeShippingFrom: 50,
  social: {
    tiktok: "https://www.tiktok.com/",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
  },
  stats: {
    happyClients: "98K+",
    rating: 4.6,
    reviews: "12,400+",
    brands: "40+",
  },
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/delivery", label: "Delivery and payment" },
  { href: "/brands", label: "Brands" },
  { href: "/blog", label: "Blog" },
];

export function formatPrice(value: number) {
  return `${site.currency}${value.toFixed(2)}`;
}

/** Transparent cut-out pet images (background removed). */
export const pets = {
  huskyBrown: "/pets/husky-brown.webp",
  huskyPuppy: "/pets/husky-puppy.webp",
  catWhite: "/pets/cat-white.webp",
  catGinger: "/pets/cat-ginger.webp",
  catFluffy: "/pets/cat-fluffy.webp",
  catCalico: "/pets/cat-calico.webp",
  borderCollie: "/pets/border-collie.webp",
  labPuppy: "/pets/lab-puppy.webp",
  huskyRedPuppy: "/pets/husky-red-puppy.webp",
  redLab: "/pets/red-lab.webp",
  germanShepherd: "/pets/german-shepherd.webp",
  maltipoo: "/pets/maltipoo.webp",
  goldenPuppy: "/pets/golden-puppy.webp",
} as const;

/** Original photos with their natural backgrounds. */
export const photos = {
  huskyBrown: "/photos/husky-brown.jpg",
  huskyPuppy: "/photos/husky-puppy.jpg",
  catWhite: "/photos/cat-white.jpg",
  catGinger: "/photos/cat-ginger.jpg",
  catFluffy: "/photos/cat-fluffy.jpg",
  catCalico: "/photos/cat-calico.jpg",
  borderCollie: "/photos/border-collie.jpg",
  labPuppy: "/photos/lab-puppy.jpg",
  huskyRedPuppy: "/photos/husky-red-puppy.jpg",
  redLab: "/photos/red-lab.jpg",
  germanShepherd: "/photos/german-shepherd.jpg",
  maltipoo: "/photos/maltipoo.jpg",
  goldenPuppy: "/photos/golden-puppy.jpg",
} as const;
