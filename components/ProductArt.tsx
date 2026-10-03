import Image from "next/image";
import type { Art, Product } from "@/lib/products";

/** Product visual: a real photo when `product.image` is set, otherwise a flat illustration. */
export function ProductVisual({ product, className = "", sizes = "300px" }: { product: Product; className?: string; sizes?: string }) {
  if (product.image) {
    return (
      <div className={`relative ${className}`}>
        <Image src={product.image} alt={product.name} fill sizes={sizes} className="object-contain" />
      </div>
    );
  }
  return <ProductArt art={product.art} label={product.name} className={className} />;
}

export function ProductArt({ art, label, className = "" }: { art: Art; label: string; className?: string }) {
  const { color: c, accent: a } = art;
  return (
    <svg viewBox="0 0 200 200" role="img" aria-label={label} className={className}>
      <ellipse cx="100" cy="178" rx="70" ry="9" fill="#0f2a12" opacity=".1" />
      {draw(art, c, a)}
    </svg>
  );
}

function motif(m: Art["motif"], x: number, y: number, color: string, s = 1) {
  const t = `translate(${x} ${y}) scale(${s})`;
  switch (m) {
    case "paw":
      return (
        <g transform={t} fill={color}>
          <ellipse cx="-9" cy="-6" rx="3.4" ry="4.4" />
          <ellipse cx="-3" cy="-12" rx="3.4" ry="4.4" />
          <ellipse cx="4" cy="-12" rx="3.4" ry="4.4" />
          <ellipse cx="10" cy="-6" rx="3.4" ry="4.4" />
          <path d="M0 -4c-5 0-9 6-9 9 0 3 3 4 5 3.5 1.5-.4 2.5-1 4-1s2.5.6 4 1c2 .5 5-.5 5-3.5 0-3-4-9-9-9Z" />
        </g>
      );
    case "bone":
      return (
        <g transform={t} fill={color}>
          <rect x="-14" y="-3.5" width="28" height="7" rx="3.5" />
          <circle cx="-15" cy="-4" r="5" />
          <circle cx="-15" cy="4" r="5" />
          <circle cx="15" cy="-4" r="5" />
          <circle cx="15" cy="4" r="5" />
        </g>
      );
    case "fish":
      return (
        <g transform={t} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round">
          <path d="M-14 0c6-8 18-8 24 0-6 8-18 8-24 0Z" />
          <path d="M10 0l8-6v12Z" />
          <circle cx="-7" cy="-1" r="1" fill={color} />
        </g>
      );
    case "whiskers":
      return (
        <g transform={t} fill="none" stroke={color} strokeWidth="2.4" strokeLinecap="round">
          <path d="M-6 -2 -24 -6M-6 2-24 3M6 -2l18-4M6 2l18 1" />
          <path d="M-4 -1c1.5 2 6.5 2 8 0" />
          <circle cx="0" cy="-4" r="2" fill={color} />
        </g>
      );
    default:
      return null;
  }
}

function draw(art: Art, c: string, a: string) {
  switch (art.kind) {
    case "catHouse":
      return (
        <g>
          <rect x="56" y="36" width="10" height="70" fill="#E3C99C" />
          <rect x="132" y="36" width="10" height="70" fill="#E3C99C" />
          <g stroke="#C7A774" strokeWidth="1.5" opacity=".7">
            {Array.from({ length: 12 }).map((_, i) => (
              <line key={i} x1="56" x2="66" y1={40 + i * 5.5} y2={42 + i * 5.5} />
            ))}
          </g>
          <rect x="44" y="26" width="110" height="16" rx="8" fill={c} />
          <rect x="50" y="20" width="98" height="10" rx="5" fill={shade(c, 14)} />
          <rect x="40" y="96" width="92" height="70" rx="6" fill={c} />
          <rect x="40" y="96" width="92" height="12" rx="6" fill={shade(c, 14)} />
          <circle cx="86" cy="136" r="19" fill="#5A2A0B" />
          <circle cx="86" cy="136" r="19" fill="#000" opacity=".25" />
          <rect x="132" y="104" width="34" height="10" rx="5" fill={a} />
          <path d="M136 104c0-14 26-14 26 0" fill={c} />
          <rect x="140" y="114" width="8" height="54" fill="#E3C99C" />
          <rect x="34" y="164" width="140" height="10" rx="4" fill="#E3C99C" />
        </g>
      );
    case "mouse":
      return (
        <g>
          <path d="M44 150c-20 8-26 22-14 26" stroke={shade(c, -20)} strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M48 150c0-44 36-74 82-60 22 7 34 28 36 46 1 12-6 18-18 18H60c-8 0-12-2-12-4Z" fill={c} />
          {art.motif === "stripes" && (
            <g stroke={a} strokeWidth="7" opacity=".9">
              <path d="M70 108c-6 16-6 32-2 46" />
              <path d="M92 94c-6 20-6 42-2 60" />
              <path d="M116 88c-4 22-4 46 0 66" />
              <path d="M140 96c-2 18-1 38 2 56" />
            </g>
          )}
          <ellipse cx="128" cy="86" rx="13" ry="15" fill="#E0303A" />
          <ellipse cx="150" cy="96" rx="11" ry="13" fill="#E0303A" />
          <circle cx="152" cy="122" r="4" fill="#1d1d1d" />
          <circle cx="168" cy="140" r="4" fill="#1d1d1d" />
        </g>
      );
    case "bowl":
      return (
        <g>
          <path d="M30 104h140l-14 62c-1 5-5 8-10 8H54c-5 0-9-3-10-8Z" fill={c} />
          <path d="M44 166h112" stroke={shade(c, -18)} strokeWidth="6" strokeLinecap="round" />
          <ellipse cx="100" cy="104" rx="72" ry="20" fill={shade(c, 10)} />
          <ellipse cx="100" cy="104" rx="60" ry="14" fill="#C9CFD3" />
          <ellipse cx="100" cy="106" rx="50" ry="10" fill="#9AA3A9" />
          <ellipse cx="88" cy="103" rx="22" ry="4" fill="#fff" opacity=".45" />
          {motif(art.motif, 100, 142, a, 1.1)}
        </g>
      );
    case "rope":
      return (
        <g fill="none" strokeLinecap="round">
          <path d="M42 120c30-50 86-50 116 0" stroke={a} strokeWidth="14" />
          <path d="M42 120c30-50 86-50 116 0" stroke="#fff" strokeWidth="14" strokeDasharray="6 10" opacity=".55" />
          <circle cx="42" cy="132" r="20" fill={c} />
          <circle cx="158" cy="132" r="20" fill={c} />
          <circle cx="100" cy="82" r="18" fill={c} />
          <path d="M30 150l-6 18M40 152l-2 20M52 150l4 18M146 150l-4 18M158 152l0 20M170 150l6 18" stroke={c} strokeWidth="5" />
        </g>
      );
    case "bed":
      return (
        <g>
          <rect x="24" y="96" width="152" height="74" rx="30" fill={c} />
          <rect x="40" y="118" width="120" height="40" rx="18" fill={a} />
          <path d="M40 132c20 6 100 6 120 0" stroke={shade(a, -10)} strokeWidth="3" fill="none" />
          <rect x="24" y="96" width="152" height="18" rx="9" fill={shade(c, 12)} />
        </g>
      );
    case "leash":
      return (
        <g fill="none" strokeLinecap="round">
          <path d="M58 52c-26 0-30 44 0 44" stroke={a} strokeWidth="14" />
          <path d="M58 96c50 0 40 56 92 66" stroke={c} strokeWidth="10" />
          <path d="M58 96c50 0 40 56 92 66" stroke="#fff" strokeWidth="2" strokeDasharray="4 7" />
          <path d="M58 52c26 0 30 44 0 44" stroke={c} strokeWidth="10" />
          <circle cx="156" cy="162" r="8" stroke="#9AA3A9" strokeWidth="5" />
          <rect x="148" y="150" width="14" height="6" rx="2" fill="#9AA3A9" />
        </g>
      );
    case "collar":
      return (
        <g fill="none">
          <ellipse cx="100" cy="110" rx="66" ry="40" stroke={c} strokeWidth="18" />
          <ellipse cx="100" cy="110" rx="66" ry="40" stroke={shade(c, 18)} strokeWidth="2" strokeDasharray="5 5" />
          <rect x="30" y="98" width="20" height="26" rx="4" stroke={a} strokeWidth="5" />
          <circle cx="100" cy="158" r="8" stroke={a} strokeWidth="5" />
          <circle cx="100" cy="176" r="10" fill={a} />
        </g>
      );
    case "foodBag":
      return (
        <g>
          <path d="M52 40h96l8 128c0 4-3 6-6 6H50c-3 0-6-2-6-6Z" fill={c} />
          <rect x="52" y="34" width="96" height="14" rx="3" fill={shade(c, -14)} />
          <rect x="64" y="70" width="72" height="72" rx="36" fill={a} />
          {motif(art.motif, 100, 108, "#fff", 1.3)}
          <rect x="70" y="150" width="60" height="6" rx="3" fill="#fff" opacity=".7" />
        </g>
      );
    case "treats":
      return (
        <g>
          <path d="M44 44h112l-6 128H50Z" fill={c} />
          <path d="M44 44h112" stroke={a} strokeWidth="6" />
          <rect x="62" y="74" width="76" height="60" rx="10" fill="#fff" opacity=".85" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${80 + i * 20} ${104}) rotate(-25)`}>
              <rect x="-4" y="-18" width="8" height="36" rx="4" fill={a} />
              <path d="M-4 -10h8M-4 -2h8M-4 6h8" stroke="#fff" strokeWidth="1.5" />
            </g>
          ))}
          <rect x="70" y="146" width="60" height="6" rx="3" fill={a} opacity=".6" />
        </g>
      );
    case "brush":
      return (
        <g>
          <rect x="88" y="96" width="24" height="80" rx="12" fill={a} />
          <rect x="44" y="34" width="112" height="72" rx="22" fill={c} />
          <rect x="54" y="44" width="92" height="52" rx="16" fill="#2b2b2b" />
          <g fill="#C9CFD3">
            {Array.from({ length: 30 }).map((_, i) => (
              <circle key={i} cx={64 + (i % 10) * 8} cy={56 + Math.floor(i / 10) * 14} r="2" />
            ))}
          </g>
          <circle cx="100" cy="122" r="6" fill="#fff" />
        </g>
      );
    case "shampoo":
      return (
        <g>
          <rect x="84" y="22" width="32" height="22" rx="4" fill={a} />
          <path d="M116 30h20" stroke={a} strokeWidth="6" strokeLinecap="round" />
          <path d="M66 54c0-6 4-10 10-10h48c6 0 10 4 10 10v108c0 7-5 12-12 12H78c-7 0-12-5-12-12Z" fill={c} stroke={shade(c, -20)} strokeWidth="2" />
          <rect x="74" y="86" width="52" height="58" rx="8" fill={a} />
          <path d="M100 98c-10 10-10 22 0 30 10-8 10-20 0-30Z" fill="#fff" />
        </g>
      );
    case "carrier":
      return (
        <g>
          <path d="M70 60c0-28 60-28 60 0" stroke={a} strokeWidth="10" fill="none" strokeLinecap="round" />
          <rect x="26" y="60" width="148" height="110" rx="20" fill={c} />
          <rect x="44" y="78" width="70" height="74" rx="10" fill="#0f2a12" opacity=".55" />
          <g stroke="#fff" strokeWidth="1.2" opacity=".35">
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={i} x1={48 + i * 9} y1="80" x2={48 + i * 9} y2="150" />
            ))}
            {Array.from({ length: 8 }).map((_, i) => (
              <line key={`h${i}`} x1="46" y1={84 + i * 9} x2="112" y2={84 + i * 9} />
            ))}
          </g>
          <rect x="126" y="80" width="34" height="8" rx="4" fill={a} />
          <rect x="126" y="96" width="34" height="8" rx="4" fill={a} opacity=".6" />
        </g>
      );
    case "balls":
      return (
        <g>
          <circle cx="68" cy="128" r="36" fill={c} />
          <path d="M36 112c20 10 44 10 64 0" stroke="#fff" strokeWidth="4" fill="none" opacity=".7" />
          <circle cx="134" cy="132" r="32" fill={a} />
          <path d="M108 146c16-8 36-8 52 0" stroke="#fff" strokeWidth="4" fill="none" opacity=".7" />
          <circle cx="102" cy="76" r="28" fill="#F2C94C" />
          <path d="M78 70c14 8 32 8 48 0" stroke="#fff" strokeWidth="4" fill="none" opacity=".7" />
        </g>
      );
  }
}

/** Lighten (positive) or darken (negative) a hex colour by an amount 0–100. */
function shade(hex: string, amt: number) {
  const n = parseInt(hex.slice(1), 16);
  const f = (v: number) => Math.max(0, Math.min(255, Math.round(v + (amt / 100) * (amt > 0 ? 255 - v : v))));
  const r = f(n >> 16),
    g = f((n >> 8) & 255),
    b = f(n & 255);
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}
