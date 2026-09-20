export type FlavorId =
  | "family"
  | "pageready"
  | "afterhours"
  | "waready"
  | "sponsorready";

export type ProductId = Exclude<FlavorId, "family">;

export type Feature = {
  title: string;
  body: string;
};

export type Plan = {
  name: string;
  price: string;
  note: string;
  featured?: boolean;
};

export type Product = {
  id: ProductId;
  name: string;
  mark: string;
  accentName: string;
  hex: string;
  href: `/${string}`;
  eyebrow: string;
  headline: string;
  lede: string;
  pitch: string;
  cta: string;
  secondaryCta: string;
  theaterCaption: string;
  features: Feature[];
  plans: Plan[];
};

export const PRODUCTS: Product[] = [
  {
    id: "pageready",
    name: "PageReady",
    mark: "PR",
    accentName: "Cyan",
    hex: "#5CE1FF",
    href: "/pageready",
    eyebrow: "Briefing, not backlog",
    headline: "Scattered notes become one page that ships.",
    lede: "PageReady pulls the mess — scraps, voice, Slack — into a one-pager a room can actually decide from.",
    pitch: "A one-pager your team reads. Not another doc they skip.",
    cta: "Open a brief",
    secondaryCta: "See the theater",
    theaterCaption: "Notes gather. A one-pager locks.",
    features: [
      {
        title: "Capture without ceremony",
        body: "Drop bullets, links, and half-thoughts. The page holds the structure so you don’t have to.",
      },
      {
        title: "One surface, one decision",
        body: "Problem, audience, offer, proof — laid out like a flight card, not a wiki.",
      },
      {
        title: "Share that looks finished",
        body: "Hairline frame, quiet type, your accent. It reads as a product, not a Google Doc.",
      },
    ],
    plans: [
      { name: "Draft", price: "Free", note: "One brief, local only." },
      {
        name: "Brief",
        price: "$29",
        note: "Shared rooms, versioned pages.",
        featured: true,
      },
      { name: "Fleet", price: "$99", note: "Orgs, templates, review lanes." },
    ],
  },
  {
    id: "afterhours",
    name: "AfterHours Booker",
    mark: "AH",
    accentName: "Amber",
    hex: "#F5A524",
    href: "/afterhours",
    eyebrow: "Demand after close",
    headline: "After-hours intake. Confirmed before morning.",
    lede: "When the floor is dark, AfterHours still takes the table — name, party, time — and locks the booking.",
    pitch: "Night demand should not wait on a voicemail.",
    cta: "Take a booking",
    secondaryCta: "See the theater",
    theaterCaption: "Intake fills. The booking confirms.",
    features: [
      {
        title: "Night-shift intake",
        body: "A short form that feels like a host stand, not a CRM. Built for 11:40 p.m. thumbs.",
      },
      {
        title: "Confirm, don’t queue",
        body: "The guest sees a table, a time, a name. Morning staff see the same card.",
      },
      {
        title: "House rules, encoded",
        body: "Party size, last seating, blackout nights — mocked here as policy, not a spreadsheet.",
      },
    ],
    plans: [
      { name: "Night", price: "$49", note: "One house, after-hours line." },
      {
        name: "House",
        price: "$129",
        note: "Multi-room, staff roster.",
        featured: true,
      },
      { name: "Circuit", price: "$249", note: "Groups, territories, audit." },
    ],
  },
  {
    id: "waready",
    name: "WaReady",
    mark: "WR",
    accentName: "Green",
    hex: "#3DFF9A",
    href: "/waready",
    eyebrow: "WhatsApp, without the void",
    headline: "A template leaves. The inbox lights up.",
    lede: "WaReady is the Ready Labs way to ship a WhatsApp template and see it land — ping, not hope.",
    pitch: "If it does not hit the inbox, it did not ship.",
    cta: "Send a ping",
    secondaryCta: "See the theater",
    theaterCaption: "Template composes. Inbox receives.",
    features: [
      {
        title: "Templates with discipline",
        body: "Approved copy, variables, and a preview that looks like the phone — not a form builder.",
      },
      {
        title: "Inbox as proof",
        body: "The theater ends on a ping. Delivery is the product, not the editor.",
      },
      {
        title: "No live WhatsApp here",
        body: "This preview is visual only. No Meta APIs, no real numbers, no send.",
      },
    ],
    plans: [
      { name: "Ping", price: "$39", note: "One number, core templates." },
      {
        name: "Thread",
        price: "$119",
        note: "Inboxes, routing, logs.",
        featured: true,
      },
      { name: "Network", price: "$299", note: "Multi-brand, approvals." },
    ],
  },
  {
    id: "sponsorready",
    name: "SponsorReady",
    mark: "SR",
    accentName: "Violet",
    hex: "#A78BFA",
    href: "/sponsorready",
    eyebrow: "Field kit, lit",
    headline: "Every agent check, lit and locked.",
    lede: "SponsorReady is the kit that walks into the room with you — one-sheet, talk track, QR, follow-up.",
    pitch: "Sponsorship should feel prepared, not improvised.",
    cta: "Open the kit",
    secondaryCta: "See the theater",
    theaterCaption: "Checklist lights. The kit is ready.",
    features: [
      {
        title: "Agent kit, not a folder",
        body: "The pieces a sponsor conversation needs, sequenced so nothing is forgotten at the table.",
      },
      {
        title: "Light means done",
        body: "Each check glows when it is packed. Progress is visible from across the room.",
      },
      {
        title: "Same system, violet accent",
        body: "Shared type, radius, and glass. Only the flavor changes — that is the point.",
      },
    ],
    plans: [
      { name: "Kit", price: "$59", note: "One agent, one book." },
      {
        name: "Field",
        price: "$159",
        note: "Team kits, shared decks.",
        featured: true,
      },
      { name: "Agency", price: "$399", note: "Books, brands, reporting." },
    ],
  },
];

export const FAMILY = {
  id: "family" as const,
  name: "Ready Labs",
  legal: "Devco Labs LLC",
  hex: "#E8EAED",
  pitch:
    "One visual language. Four product flavors. Layout and functionality should impress — this preview is the system David can click, not the stack.",
};

export function getProduct(id: ProductId): Product {
  const product = PRODUCTS.find((item) => item.id === id);
  if (!product) {
    throw new Error(`Unknown product: ${id}`);
  }
  return product;
}

export const NAV_LINKS = [
  { href: "/", label: "Family" },
  ...PRODUCTS.map((product) => ({ href: product.href, label: product.name })),
  { href: "/tokens", label: "Tokens" },
] as const;
