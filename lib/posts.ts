import { photos } from "./site";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "tip"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: "Dogs" | "Cats" | "Health" | "Guides";
  author: string;
  date: string; // ISO
  readMinutes: number;
  related: string[]; // product slugs
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "first-week-with-a-new-puppy",
    title: "Your First Week With a New Puppy: A Day-by-Day Guide",
    excerpt:
      "From the car ride home to the first vet visit — how to help your puppy settle in, sleep through the night and start house training.",
    cover: photos.goldenPuppy,
    category: "Dogs",
    author: "Amara Okafor",
    date: "2026-09-18",
    readMinutes: 7,
    related: ["orthopedic-dog-bed", "mint-dog-bowl", "rope-tug-toy"],
    body: [
      { type: "p", text: "Bringing a puppy home is exciting for you — and overwhelming for them. Everything smells new, their littermates are gone and the rules are different. A calm, predictable first week makes all the difference." },
      { type: "h2", text: "Before they arrive" },
      { type: "ul", items: ["Set up a quiet sleeping area with a bed or crate", "Puppy-proof cables, shoes and low plants", "Buy the same food the breeder or shelter was using", "Book a vet check-up for the first week"] },
      { type: "h2", text: "Days 1–2: keep it calm" },
      { type: "p", text: "Resist the urge to invite everyone round. Let your puppy explore one or two rooms, offer water and short naps, and take them outside every 1–2 hours and straight after eating, drinking, waking and playing." },
      { type: "tip", text: "Praise and reward the moment your puppy toilets outside — timing is everything. A tiny treat within two seconds works far better than a big one later." },
      { type: "h2", text: "Days 3–5: build a routine" },
      { type: "p", text: "Feed at the same times each day, start short training sessions of two to three minutes (their name, sit, come) and introduce gentle handling of paws, ears and mouth so vet visits and grooming are easy later." },
      { type: "h2", text: "Days 6–7: small adventures" },
      { type: "p", text: "Carry your puppy to see the world before vaccinations are complete — traffic noise, people with hats, other calm vaccinated dogs. Positive early experiences shape a confident adult dog." },
    ],
  },
  {
    slug: "choosing-the-right-cat-food",
    title: "How to Choose the Right Food for Your Cat",
    excerpt:
      "Cats are obligate carnivores. Here's how to read a label, decide between wet and dry food and know when to switch formulas.",
    cover: photos.catWhite,
    category: "Cats",
    author: "Dr. Lena Brooks",
    date: "2026-09-05",
    readMinutes: 6,
    related: ["salmon-cat-food", "orange-cat-bowl", "sage-fish-bowl"],
    body: [
      { type: "p", text: "Unlike dogs, cats need nutrients that are found almost exclusively in animal tissue — like taurine and arachidonic acid. That makes the first few ingredients on the label especially important." },
      { type: "h2", text: "Reading the label" },
      { type: "ul", items: ["A named meat or fish should be the first ingredient", "Look for the words “complete and balanced” for your cat’s life stage", "Taurine should be listed", "Avoid vague terms like “meat derivatives” as the main protein"] },
      { type: "h2", text: "Wet, dry or both?" },
      { type: "p", text: "Wet food adds moisture, which helps cats who don't drink much. Dry food is convenient and can be used in puzzle feeders. Many vets recommend a mix of both." },
      { type: "tip", text: "Switch foods gradually over 7–10 days, mixing a little more of the new food each day to avoid tummy upsets." },
      { type: "h2", text: "Whisker-friendly bowls" },
      { type: "p", text: "If your cat scoops food onto the floor or leaves the edges, try a shallow, wide bowl. Many cats find deep bowls uncomfortable on their sensitive whiskers." },
    ],
  },
  {
    slug: "husky-care-guide",
    title: "Living With a Husky: Exercise, Coat Care and Escape-Proofing",
    excerpt:
      "Huskies are clever, chatty and born to run. Learn how much exercise they need, how to handle shedding season and keep them happy at home.",
    cover: photos.huskyBrown,
    category: "Dogs",
    author: "Marco Silva",
    date: "2026-08-22",
    readMinutes: 8,
    related: ["reflective-leash", "slicker-brush", "grain-free-dog-food"],
    body: [
      { type: "p", text: "Siberian Huskies were bred to pull sleds over long distances, so they have stamina to spare. A bored husky is a creative husky — and that usually means dug-up gardens and chewed door frames." },
      { type: "h2", text: "Exercise" },
      { type: "p", text: "Plan on at least 90 minutes of activity a day: brisk walks, jogging, canicross or bikejoring once fully grown. Mental work — scent games and puzzle feeders — tires them out too." },
      { type: "h2", text: "Coat care" },
      { type: "ul", items: ["Brush 2–3 times a week with a slicker brush", "Daily brushing during the twice-yearly coat “blow”", "Bathe rarely — their coat is naturally self-cleaning", "Never shave a double coat"] },
      { type: "tip", text: "Huskies have a strong prey drive and a reputation for escaping. Use a well-fitted collar or harness and a reflective leash, and check fences for gaps." },
    ],
  },
  {
    slug: "indoor-cat-enrichment",
    title: "10 Ways to Keep an Indoor Cat Happy",
    excerpt:
      "Vertical space, hunting games and the right scratching post can transform the life of an indoor cat. Here are ten easy ideas.",
    cover: photos.catCalico,
    category: "Cats",
    author: "Amara Okafor",
    date: "2026-08-09",
    readMinutes: 5,
    related: ["cozy-cat-house", "green-twist-mouse", "orange-fluff-mouse"],
    body: [
      { type: "p", text: "Indoor cats live longer, safer lives — but they need us to bring a little of the outdoors in. Enrichment means giving them chances to climb, hide, hunt and scratch." },
      { type: "h2", text: "Ten ideas" },
      { type: "ul", items: ["Add a cat tower near a window", "Provide a hideaway for quiet naps", "Play two 10-minute hunting sessions a day", "Rotate toys weekly so they stay novel", "Use puzzle feeders for dry food", "Offer both vertical and horizontal scratchers", "Grow cat grass", "Set up a bird feeder outside a window", "Hide treats around the house", "Try clicker training — cats love it"] },
      { type: "tip", text: "End each play session by letting your cat “catch” the toy, then offer a small meal. It mirrors the natural hunt–catch–eat–sleep cycle." },
    ],
  },
  {
    slug: "dog-dental-health",
    title: "Dental Health for Dogs: What Every Owner Should Know",
    excerpt:
      "By age three most dogs show signs of dental disease. Brushing, chews and check-ups that keep teeth and gums healthy.",
    cover: photos.redLab,
    category: "Health",
    author: "Dr. Lena Brooks",
    date: "2026-07-28",
    readMinutes: 6,
    related: ["dental-chew-treats", "rope-tug-toy"],
    body: [
      { type: "p", text: "Bad breath isn't just unpleasant — it's often the first sign of plaque and gum disease, which can affect the heart, liver and kidneys over time." },
      { type: "h2", text: "A simple routine" },
      { type: "ul", items: ["Brush with dog toothpaste 3+ times per week", "Offer a dental chew daily", "Rope toys help floss between teeth", "Annual dental check at the vet"] },
      { type: "tip", text: "Never use human toothpaste — it contains xylitol and fluoride, which are harmful to dogs." },
    ],
  },
  {
    slug: "travelling-with-pets",
    title: "Travelling With Your Pet: A Stress-Free Checklist",
    excerpt:
      "Road trip or flight — what to pack, how to get your pet used to a carrier and the documents you shouldn't forget.",
    cover: photos.borderCollie,
    category: "Guides",
    author: "Marco Silva",
    date: "2026-07-12",
    readMinutes: 5,
    related: ["travel-carrier", "reflective-leash", "squeaky-ball-set"],
    body: [
      { type: "p", text: "Travel goes far more smoothly when your pet already sees the carrier or car as a safe place. Start practising a few weeks before you go." },
      { type: "h2", text: "Packing list" },
      { type: "ul", items: ["Food for the whole trip plus two extra days", "Collapsible bowl and water", "Leash, collar with ID tag", "Vaccination records & pet passport", "A familiar blanket or toy", "Poop bags and wipes"] },
      { type: "tip", text: "Leave the carrier open at home with a treat inside for a couple of weeks before travelling. It quickly becomes a favourite napping spot." },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
