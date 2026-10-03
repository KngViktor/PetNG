type P = React.SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export const SearchIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);
export const CartIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 4h2l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h8.6a1.5 1.5 0 0 0 1.5-1.1L21 8H6.2" />
    <circle cx="9.5" cy="19.5" r="1.3" />
    <circle cx="17" cy="19.5" r="1.3" />
  </svg>
);
export const ArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);
export const ArrowUpRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);
export const PlusIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 5v14M5 12h14" />
  </svg>
);
export const MinusIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5 12h14" />
  </svg>
);
export const CloseIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const MenuIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M8 12h12M12 17h8" />
  </svg>
);
export const PlayIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
  </svg>
);
export const TruckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 6h11v10H3zM14 9h4l3 3v4h-7" />
    <circle cx="7" cy="17.5" r="1.8" />
    <circle cx="17.5" cy="17.5" r="1.8" />
  </svg>
);
export const ShieldIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);
export const ReturnIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 9h11a5 5 0 0 1 0 10H8" />
    <path d="M8 5 4 9l4 4" />
  </svg>
);
export const ChatIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 5h16v11H9l-5 4V5Z" />
  </svg>
);
export const CardIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 10h18M7 15h3" />
  </svg>
);
export const CashIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="2.5" y="6" width="19" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);
export const BankIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 9 12 4l9 5M5 10v7M9.5 10v7M14.5 10v7M19 10v7M3 20h18" />
  </svg>
);
export const PhoneIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
    <path d="M11 18h2" />
  </svg>
);
export const MailIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
export const PinIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21Z" />
    <circle cx="12" cy="9.5" r="2.5" />
  </svg>
);
export const ClockIcon = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="M12 7.5V12l3 2" />
  </svg>
);
export const CheckIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
export const ChevronDown = (p: P) => (
  <svg {...base} {...p}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);
export const FilterIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 6h16M7 12h10M10 18h4" />
  </svg>
);
export const TrashIcon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 7h16M9 7V4.5h6V7M6.5 7l1 13h9l1-13" />
  </svg>
);

export const StarIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M12 2.6l2.7 6 6.5.6c.6.1.9.9.4 1.3l-4.9 4.3 1.4 6.4c.1.6-.5 1.1-1.1.8L12 18.7 6.1 22c-.6.3-1.2-.2-1.1-.8l1.4-6.4-4.9-4.3c-.5-.4-.2-1.2.4-1.3l6.5-.6 2.7-6c.3-.6 1.1-.6 1.4 0Z"
    />
  </svg>
);

export const PawIcon = (p: P) => (
  <svg viewBox="0 0 32 32" aria-hidden {...p}>
    <g fill="currentColor">
      <ellipse cx="7" cy="13" rx="3.2" ry="4.2" transform="rotate(-18 7 13)" />
      <ellipse cx="12.5" cy="6.8" rx="3.3" ry="4.4" transform="rotate(-6 12.5 6.8)" />
      <ellipse cx="20" cy="6.8" rx="3.3" ry="4.4" transform="rotate(8 20 6.8)" />
      <ellipse cx="25.5" cy="13.2" rx="3.2" ry="4.2" transform="rotate(20 25.5 13.2)" />
      <path d="M16.2 14.5c-4.6 0-9.2 6.8-9.2 10.3 0 2.6 2.2 3.7 4.5 3.2 1.7-.4 3-1 4.7-1s3 .6 4.7 1c2.3.5 4.5-.6 4.5-3.2 0-3.5-4.6-10.3-9.2-10.3Z" />
    </g>
  </svg>
);

export const HeartIcon = ({ filled, ...p }: P & { filled?: boolean }) => (
  <svg {...base} {...p} fill={filled ? "currentColor" : "none"}>
    <path d="M12 20s-7.5-4.6-7.5-10.2A4.3 4.3 0 0 1 12 7.3a4.3 4.3 0 0 1 7.5 2.5C19.5 15.4 12 20 12 20Z" />
  </svg>
);

export const TikTokIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M16.6 3c.4 2.2 1.8 3.6 4 3.8v3.1c-1.5 0-2.8-.4-4-1.2v6.1c0 3.4-2.6 5.7-5.7 5.7a5.6 5.6 0 0 1-5.6-5.7c0-3.4 2.9-6 6.4-5.6v3.2c-1.7-.4-3.2.8-3.2 2.4 0 1.4 1.1 2.5 2.4 2.5 1.5 0 2.6-1 2.6-2.8V3h3.1Z"
    />
  </svg>
);
export const YouTubeIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12a31 31 0 0 0 .4 3.8 3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .4-3.8 31 31 0 0 0-.4-3.8ZM10 15V9l5.2 3L10 15Z"
    />
  </svg>
);
export const InstagramIcon = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.2" cy="6.8" r="0.8" fill="currentColor" />
  </svg>
);
export const FacebookIcon = (p: P) => (
  <svg viewBox="0 0 24 24" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M13.5 21v-7.6h2.6l.4-3h-3V8.5c0-.9.3-1.5 1.5-1.5h1.6V4.3c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4v2.2H7.8v3h2.6V21h3.1Z"
    />
  </svg>
);
