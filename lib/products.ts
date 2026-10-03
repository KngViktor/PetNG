export type Pet = "dog" | "cat" | "all";

export type Category =
  | "food"
  | "treats"
  | "toys"
  | "bowls"
  | "beds"
  | "furniture"
  | "walking"
  | "grooming"
  | "travel";

export type ArtKind =
  | "catHouse"
  | "mouse"
  | "bowl"
  | "rope"
  | "bed"
  | "leash"
  | "collar"
  | "foodBag"
  | "treats"
  | "brush"
  | "shampoo"
  | "carrier"
  | "balls";

export type Art = {
  kind: ArtKind;
  color: string;
  accent: string;
  /** Optional small motif drawn on the item (bowls, bags). */
  motif?: "paw" | "bone" | "fish" | "whiskers" | "stripes";
};

export type Product = {
  slug: string;
  name: string;
  price: number;
  oldPrice?: number;
  pet: Pet;
  category: Category;
  brand: string; // brand slug
  rating: number;
  reviews: number;
  badge?: "New" | "Bestseller" | "Sale";
  isNew?: boolean;
  art: Art;
  short: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  /** Optional product photo; when set it replaces the illustration. */
  image?: string;
};

export const categories: { slug: Category; label: string; blurb: string }[] = [
  { slug: "food", label: "Food", blurb: "Complete, vet-approved nutrition" },
  { slug: "treats", label: "Treats", blurb: "Rewards and dental chews" },
  { slug: "toys", label: "Toys", blurb: "Chase, chew, tug and pounce" },
  { slug: "bowls", label: "Bowls", blurb: "Ceramic and steel feeders" },
  { slug: "beds", label: "Beds", blurb: "Orthopedic and cuddle beds" },
  { slug: "furniture", label: "Cat furniture", blurb: "Towers, houses and scratchers" },
  { slug: "walking", label: "Leashes & collars", blurb: "Safe, reflective, comfy" },
  { slug: "grooming", label: "Grooming", blurb: "Brushes, shampoos, care" },
  { slug: "travel", label: "Travel", blurb: "Carriers and on-the-go gear" },
];

export const products: Product[] = [
  {
    slug: "cozy-cat-house",
    name: "Cozy Cat House",
    price: 75000,
    pet: "cat",
    category: "furniture",
    brand: "purrfect-home",
    rating: 4.8,
    reviews: 412,
    badge: "Bestseller",
    art: { kind: "catHouse", color: "#F47A1F", accent: "#D9B98A" },
    short: "Two-level plush cat tower with a hideaway cube, top lounger and sisal posts.",
    description:
      "The Cozy Cat House gives your cat everything in one compact footprint: a private hideaway cube for naps, a raised lounger with a padded rim for watching the room, and natural sisal posts that save your sofa from scratching. The soft velour cover is removable for washing and the solid base keeps it stable even when your cat launches off the top.",
    features: [
      "Enclosed cube with a 20 cm entrance for safe, quiet naps",
      "Top lounger with raised, padded edges",
      "Natural sisal-wrapped scratching posts",
      "Removable, machine-washable velour covers",
      "Wide weighted base — will not tip",
    ],
    specs: {
      Dimensions: "50 × 40 × 62 cm",
      Weight: "6.2 kg",
      Material: "Engineered wood, velour, sisal",
      "Max cat weight": "8 kg",
      Assembly: "10 minutes, tools included",
    },
  },
  {
    slug: "green-twist-mouse",
    name: "Green Twist Mouse",
    price: 12500,
    pet: "cat",
    category: "toys",
    brand: "playpaw",
    rating: 4.7,
    reviews: 268,
    isNew: true,
    badge: "New",
    art: { kind: "mouse", color: "#2F7D3A", accent: "#E8F2E3", motif: "stripes" },
    short: "Hand-wound cotton rope mouse with a crinkle core and a pinch of organic catnip.",
    description:
      "Wound by hand from undyed and green cotton rope, the Twist Mouse is tough enough for hunting sessions and gentle on teeth. A crinkle core makes it rustle when batted, and a small pouch of organic catnip keeps it interesting day after day.",
    features: [
      "Natural cotton rope — no loose plastic parts",
      "Crinkle core for sound",
      "Refillable organic catnip pocket",
      "Felt ears stitched, not glued",
    ],
    specs: { Length: "12 cm (plus 8 cm tail)", Material: "Cotton rope, felt", Catnip: "Organic, refillable" },
  },
  {
    slug: "orange-fluff-mouse",
    name: "Orange Fluff Mouse",
    price: 12500,
    pet: "cat",
    category: "toys",
    brand: "playpaw",
    rating: 4.6,
    reviews: 189,
    isNew: true,
    art: { kind: "mouse", color: "#F47A1F", accent: "#FFD9B8" },
    short: "Soft felted wool mouse that cats love to carry around and hide.",
    description:
      "A fuzzy, featherlight mouse felted from natural wool. It's the perfect size for carrying in the mouth, skids nicely across hard floors and is dyed with pet-safe colours.",
    features: ["100% felted wool", "Pet-safe dyes", "Lightweight for batting and carrying", "Set of 1"],
    specs: { Length: "9 cm", Material: "Felted wool", Weight: "14 g" },
  },
  {
    slug: "mint-dog-bowl",
    name: "Mint Dog Bowl",
    price: 28000,
    pet: "dog",
    category: "bowls",
    brand: "bowlcraft",
    rating: 4.7,
    reviews: 302,
    isNew: true,
    art: { kind: "bowl", color: "#BFE3CC", accent: "#C9A44C", motif: "bone" },
    short: "Pastel mint bowl with a removable stainless-steel insert and gold bone detail.",
    description:
      "A sturdy melamine outer shell in soft mint with a gold-tone bone emblem, paired with a removable stainless-steel bowl that is dishwasher safe. The rubber ring underneath stops it sliding across the floor at mealtime.",
    features: [
      "Removable 304 stainless-steel insert",
      "Non-slip rubber base",
      "Dishwasher-safe insert",
      "BPA-free outer shell",
    ],
    specs: { Capacity: "900 ml", Diameter: "20 cm", Material: "Melamine, stainless steel" },
  },
  {
    slug: "green-dog-bowl",
    name: "Green Dog Bowl",
    price: 42000,
    oldPrice: 49000,
    pet: "dog",
    category: "bowls",
    brand: "bowlcraft",
    rating: 4.9,
    reviews: 517,
    badge: "Sale",
    isNew: true,
    art: { kind: "bowl", color: "#0F4D2A", accent: "#2F7D3A", motif: "paw" },
    short: "Deep forest-green feeder with an embossed paw and heavy steel bowl.",
    description:
      "Our best-selling feeder, now in deep forest green. The weighted base and embossed paw make it as good-looking as it is practical, and the deep steel bowl keeps kibble from flying across the kitchen.",
    features: ["Weighted anti-tip base", "Deep steel bowl for big appetites", "Embossed paw motif", "Easy-clean matte finish"],
    specs: { Capacity: "1.6 L", Diameter: "24 cm", Material: "Ceramic-coated steel" },
  },
  {
    slug: "orange-cat-bowl",
    name: "Orange Cat Bowl",
    price: 21000,
    pet: "cat",
    category: "bowls",
    brand: "bowlcraft",
    rating: 4.8,
    reviews: 221,
    art: { kind: "bowl", color: "#F47A1F", accent: "#3B2414", motif: "whiskers" },
    short: "Shallow, whisker-friendly ceramic bowl with a playful cat face.",
    description:
      "Cats dislike their whiskers brushing the sides of deep bowls. This shallow, wide ceramic bowl avoids whisker fatigue and adds a cheerful cat face to your kitchen floor.",
    features: ["Shallow, wide whisker-friendly shape", "Glazed ceramic — microwave & dishwasher safe", "Heavy base"],
    specs: { Capacity: "350 ml", Diameter: "15 cm", Material: "Glazed ceramic" },
  },
  {
    slug: "sage-fish-bowl",
    name: "Sage Fish Bowl",
    price: 25000,
    pet: "cat",
    category: "bowls",
    brand: "bowlcraft",
    rating: 4.6,
    reviews: 97,
    art: { kind: "bowl", color: "#D5E4D6", accent: "#C9A44C", motif: "fish" },
    short: "Matte sage ceramic bowl with a hand-painted gold fish.",
    description:
      "A calm sage-green ceramic bowl with a hand-painted gold fish. Great for wet food or water, and pairs with the Orange Cat Bowl for a matching set.",
    features: ["Hand-painted detail", "Lead-free glaze", "Dishwasher safe"],
    specs: { Capacity: "400 ml", Diameter: "16 cm", Material: "Ceramic" },
  },
  {
    slug: "rope-tug-toy",
    name: "Triple Knot Rope Tug",
    price: 18000,
    pet: "dog",
    category: "toys",
    brand: "playpaw",
    rating: 4.7,
    reviews: 344,
    art: { kind: "rope", color: "#F47A1F", accent: "#2F7D3A" },
    short: "Three-knot cotton rope for tug-of-war and dental flossing.",
    description:
      "Thick braided cotton fibres floss between teeth while your dog plays. Three solid knots give you and your dog something to grip during tug-of-war, and it's washable on a cold cycle.",
    features: ["Helps clean teeth while playing", "Three grip knots", "Machine washable"],
    specs: { Length: "45 cm", Material: "Cotton", "Recommended for": "Medium & large dogs" },
  },
  {
    slug: "orthopedic-dog-bed",
    name: "Cloud Orthopedic Bed",
    price: 115000,
    oldPrice: 140000,
    pet: "dog",
    category: "beds",
    brand: "purrfect-home",
    rating: 4.9,
    reviews: 628,
    badge: "Sale",
    art: { kind: "bed", color: "#2F7D3A", accent: "#E8F2E3" },
    short: "Memory-foam bolster bed that supports joints and keeps its shape.",
    description:
      "Designed with vets for older dogs and big breeds, the Cloud bed has a 10 cm memory-foam base and plush bolsters to rest a chin on. The water-resistant liner protects the foam and the cover zips off for washing.",
    features: [
      "10 cm orthopedic memory-foam base",
      "Raised bolsters on three sides",
      "Water-resistant inner liner",
      "Non-slip bottom",
      "Zip-off washable cover",
    ],
    specs: { Sizes: "M (80 cm), L (100 cm), XL (120 cm)", Fill: "Memory foam + fibre bolsters", Cover: "Microsuede" },
  },
  {
    slug: "reflective-leash",
    name: "Night Walk Reflective Leash",
    price: 35000,
    pet: "dog",
    category: "walking",
    brand: "trailtail",
    rating: 4.8,
    reviews: 276,
    art: { kind: "leash", color: "#F47A1F", accent: "#0F4D2A" },
    short: "Padded-handle leash with reflective stitching for evening walks.",
    description:
      "Woven reflective thread catches car headlights from 100 m away. The neoprene-padded handle is kind to your hands and a second traffic handle near the clip gives you control at crossings.",
    features: ["360° reflective stitching", "Padded neoprene handle", "Traffic handle", "Rust-proof swivel clip"],
    specs: { Length: "1.5 m", Width: "2.5 cm", "Breaking strength": "250 kg" },
  },
  {
    slug: "leather-collar",
    name: "Classic Leather Collar",
    price: 32000,
    pet: "dog",
    category: "walking",
    brand: "trailtail",
    rating: 4.7,
    reviews: 158,
    art: { kind: "collar", color: "#8A4B21", accent: "#C9A44C" },
    short: "Soft full-grain leather collar with brass hardware and ID ring.",
    description:
      "Full-grain leather that softens with age, stitched edges and solid brass hardware that won't rust. Includes a free engraved ID tag — add your pet's name at checkout.",
    features: ["Full-grain leather", "Solid brass buckle & D-ring", "Free engraved ID tag"],
    specs: { Sizes: "S, M, L, XL", Width: "2–3.5 cm", Material: "Leather, brass" },
  },
  {
    slug: "grain-free-dog-food",
    name: "Grain-Free Chicken Kibble",
    price: 78000,
    pet: "dog",
    category: "food",
    brand: "wild-harvest",
    rating: 4.8,
    reviews: 903,
    badge: "Bestseller",
    art: { kind: "foodBag", color: "#0F4D2A", accent: "#F47A1F", motif: "bone" },
    short: "Free-range chicken and sweet potato recipe for adult dogs. 10 kg bag.",
    description:
      "Real free-range chicken is the first ingredient, followed by sweet potato and peas for slow-release energy. No wheat, corn, soy, artificial colours or preservatives. Added glucosamine and omega oils support joints and a shiny coat.",
    features: ["70% animal ingredients", "Grain-free, no fillers", "Glucosamine for joints", "Omega 3 & 6 for skin and coat"],
    specs: { Weight: "10 kg", "Life stage": "Adult (1–7 years)", Protein: "32%", Fat: "16%" },
  },
  {
    slug: "salmon-cat-food",
    name: "Wild Salmon Cat Food",
    price: 56000,
    pet: "cat",
    category: "food",
    brand: "wild-harvest",
    rating: 4.7,
    reviews: 541,
    art: { kind: "foodBag", color: "#F47A1F", accent: "#0F4D2A", motif: "fish" },
    short: "High-protein dry food with wild salmon and taurine. 4 kg bag.",
    description:
      "Wild-caught salmon and herring provide high-quality protein and natural omega-3s. Taurine supports heart and eye health, and cranberry helps maintain urinary tract health.",
    features: ["Wild-caught fish first", "Added taurine", "Cranberry for urinary health", "Small, crunchy kibble"],
    specs: { Weight: "4 kg", "Life stage": "All life stages", Protein: "38%", Fat: "18%" },
  },
  {
    slug: "dental-chew-treats",
    name: "Fresh Breath Dental Chews",
    price: 16500,
    pet: "dog",
    category: "treats",
    brand: "wild-harvest",
    rating: 4.6,
    reviews: 387,
    isNew: true,
    art: { kind: "treats", color: "#A6E7B0", accent: "#0F4D2A" },
    short: "Daily chews with mint and parsley that reduce plaque and tartar.",
    description:
      "A ridged, chewy texture scrubs teeth down to the gumline while mint and parsley freshen breath. One chew a day is part of a complete dental routine.",
    features: ["Reduces tartar build-up", "Mint & parsley", "No artificial colours", "28 chews per pack"],
    specs: { Count: "28 chews", Size: "Medium dogs 10–25 kg", "Calories per chew": "68 kcal" },
  },
  {
    slug: "slicker-brush",
    name: "Self-Cleaning Slicker Brush",
    price: 22000,
    pet: "all",
    category: "grooming",
    brand: "fluffcare",
    rating: 4.8,
    reviews: 455,
    art: { kind: "brush", color: "#0F4D2A", accent: "#F47A1F" },
    short: "Removes loose undercoat and tangles; one click retracts the pins.",
    description:
      "Fine, angled pins reach the undercoat without scratching the skin. When you're done, press the button and the pins retract so the fur slides straight off.",
    features: ["Retractable pins for one-click cleaning", "Rounded pin tips", "Ergonomic non-slip handle"],
    specs: { "Suitable for": "Medium & long coats", Material: "ABS, stainless pins" },
  },
  {
    slug: "oatmeal-shampoo",
    name: "Oatmeal & Aloe Shampoo",
    price: 19500,
    pet: "all",
    category: "grooming",
    brand: "fluffcare",
    rating: 4.7,
    reviews: 233,
    art: { kind: "shampoo", color: "#E8F2E3", accent: "#2F7D3A" },
    short: "Soap-free shampoo for sensitive and itchy skin.",
    description:
      "Colloidal oatmeal and aloe vera calm dry, itchy skin while a gentle soap-free formula cleans without stripping natural oils. Light cucumber scent, pH balanced for pets.",
    features: ["Soap- and paraben-free", "pH balanced for dogs & cats", "Tear-free"],
    specs: { Volume: "500 ml", Scent: "Cucumber & melon" },
  },
  {
    slug: "travel-carrier",
    name: "Explorer Travel Carrier",
    price: 92000,
    pet: "cat",
    category: "travel",
    brand: "trailtail",
    rating: 4.7,
    reviews: 132,
    art: { kind: "carrier", color: "#2F7D3A", accent: "#F47A1F" },
    short: "Airline-approved soft carrier with mesh windows and a fleece pad.",
    description:
      "Fits under most airline seats. Mesh windows on three sides keep air flowing, the top opening makes it easy to lift your pet in, and a removable fleece pad keeps them comfortable on long trips.",
    features: ["Airline approved (under-seat)", "Top and side entry", "Seatbelt strap", "Washable fleece pad"],
    specs: { Dimensions: "43 × 28 × 28 cm", "Max pet weight": "7 kg", Weight: "1.1 kg" },
  },
  {
    slug: "squeaky-ball-set",
    name: "Squeaky Ball Trio",
    price: 12000,
    pet: "dog",
    category: "toys",
    brand: "playpaw",
    rating: 4.5,
    reviews: 410,
    art: { kind: "balls", color: "#F47A1F", accent: "#2F7D3A" },
    short: "Three bouncy, floating rubber balls with a soft squeak.",
    description:
      "Natural rubber balls that bounce unpredictably, float in water and squeak when squeezed. Bright colours are easy to spot in the grass.",
    features: ["Natural rubber", "Floats", "Gentle squeaker", "Set of 3"],
    specs: { Diameter: "6.5 cm", Material: "Natural rubber" },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function categoryLabel(slug: Category) {
  return categories.find((c) => c.slug === slug)?.label ?? slug;
}

export const priceBounds = {
  min: Math.floor(Math.min(...products.map((p) => p.price)) / 1000) * 1000,
  max: Math.ceil(Math.max(...products.map((p) => p.price)) / 1000) * 1000,
};
