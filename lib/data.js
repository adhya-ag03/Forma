/* ============================================================
   FORMA — content data
   ============================================================ */

export const DESIGNERS = {
  ana:    { n: "Ana Ruiz",      init: "AR", badge: "PRO",  hue: "#3D5AFE", spec: "Product & UI design",    loc: "Barcelona, ES",    rate: "$85–110/hr", avail: true },
  kwame:  { n: "Kwame Mensah",  init: "KM", badge: null,   hue: "#2E7D5B", spec: "Brand identity",         loc: "Accra, GH",        rate: "$70–95/hr",  avail: true },
  yuki:   { n: "Yuki Tanaka",   init: "YT", badge: "PRO",  hue: "#B4552D", spec: "Mobile UI & systems",    loc: "Tokyo, JP",        rate: "$90–120/hr", avail: false },
  lena:   { n: "Lena Hoffmann", init: "LH", badge: null,   hue: "#8A5BC4", spec: "Typography & editorial", loc: "Berlin, DE",       rate: "$75–100/hr", avail: true },
  marco:  { n: "Marco Silva",   init: "MS", badge: "TEAM", hue: "#1F8A70", spec: "3D & visual design",     loc: "Lisbon, PT",       rate: "$80–105/hr", avail: true },
  priya:  { n: "Priya Sharma",  init: "PS", badge: "PRO",  hue: "#C13B6B", spec: "Product design",         loc: "Bengaluru, IN",    rate: "$65–90/hr",  avail: true },
  tomas:  { n: "Tomás Herrera", init: "TH", badge: null,   hue: "#3A7CA5", spec: "Web & interaction",      loc: "Mexico City, MX",  rate: "$60–85/hr",  avail: true },
  ingrid: { n: "Ingrid Berg",   init: "IB", badge: null,   hue: "#A3692A", spec: "Illustration",           loc: "Oslo, NO",         rate: "$70–95/hr",  avail: false },
  dayo:   { n: "Dayo Adeyemi",  init: "DA", badge: "PRO",  hue: "#5B4BC4", spec: "Motion design",          loc: "Lagos, NG",        rate: "$75–105/hr", avail: true },
  sofia:  { n: "Sofia Marino",  init: "SM", badge: null,   hue: "#B4552D", spec: "Animation & character",  loc: "Buenos Aires, AR", rate: "$55–80/hr",  avail: true },
  omar:   { n: "Omar Farouk",   init: "OF", badge: "TEAM", hue: "#2E6B8A", spec: "Product & data viz",     loc: "Cairo, EG",        rate: "$60–85/hr",  avail: true },
};

/* art: dash | dashlt | mobile | brand | illo | typo | orb | motion | product
   colorKey: for the color filter. days: age in days. */
export const SHOTS = [
  { id: 1,  t: "Fintech Dashboard — Night Mode", d: "ana",    cat: "web",          tags: ["dashboard", "fintech", "dark ui"],  likes: 1412, views: 28400, art: "dash",    c: ["#141A2E", "#3D5AFE", "#6D83FF", "#FF7A59"], tools: ["Figma"],                        colorKey: "cobalt", days: 4,
    desc: "A dark-first banking dashboard exploring dense data without the noise. Tabular numerals throughout, a four-step elevation scale, and charts that stay legible at a glance." },
  { id: 2,  t: "Botanica Brand Identity",        d: "kwame",  cat: "branding",     tags: ["branding", "logo", "packaging"],    likes: 2130, views: 41200, art: "brand",   c: ["#2E7D5B", "#174D36", "#DCEDE3", "#FF7A59"], tools: ["Illustrator", "Figma"],         colorKey: "green",  days: 12,
    desc: "Full identity for a botanical skincare label — wordmark, leaf monogram, and a packaging system built on a calm two-green palette with coral used only for limited editions." },
  { id: 3,  t: "Travel App Onboarding",          d: "yuki",   cat: "mobile",       tags: ["mobile ui", "onboarding", "travel"], likes: 986, views: 19800, art: "mobile",  c: ["#3A7CA5", "#1E4559", "#F2E8DC", "#FFB36B"], tools: ["Figma", "Framer"],              colorKey: "teal",   days: 2,
    desc: "Three-step onboarding for a slow-travel app. Soft gradients, oversized destination type, and a progress pattern that rewards finishing without nagging." },
  { id: 4,  t: "Serif Revival Type Specimen",    d: "lena",   cat: "typography",   tags: ["typography", "specimen", "serif"],  likes: 1784, views: 30900, art: "typo",    c: ["#8A5BC4", "#2C1B4D", "#E9DFF6", "#FFD36B"], tools: ["Illustrator"],                  colorKey: "purple", days: 9,
    desc: "Specimen pages for Meridian, a high-contrast serif revival. Optical sizes from caption to display, with annotated details of the ink traps and terminal cuts." },
  { id: 5,  t: "Orbital — 3D Icon Set",          d: "marco",  cat: "3d",           tags: ["3d", "icons", "render"],            likes: 2476, views: 52300, art: "orb",     c: ["#1F8A70", "#0E3B33", "#7BE0C3", "#FF7A59"], tools: ["Blender", "Figma"],             colorKey: "green",  days: 20,
    desc: "Sixty soft-body 3D icons for a developer platform. Matte clay materials, one key light, and a shared 12° camera tilt so the whole set sits together." },
  { id: 6,  t: "Lumen Health Tracker",           d: "priya",  cat: "mobile",       tags: ["mobile ui", "health", "charts"],    likes: 1193, views: 22700, art: "mobile",  c: ["#C13B6B", "#5A1232", "#FBE4EC", "#FFB36B"], tools: ["Figma"],                        colorKey: "pink",   days: 6,
    desc: "A gentle health tracker that treats rest as data too. Ring progress, weekly rhythm charts, and copy reviewed with a clinical advisor." },
  { id: 7,  t: "Atlas Analytics Landing",        d: "tomas",  cat: "web",          tags: ["landing page", "saas", "web"],      likes: 842,  views: 15600, art: "dashlt",  c: ["#3A7CA5", "#12344A", "#E8F1F6", "#3D5AFE"], tools: ["Figma", "Framer"],              colorKey: "teal",   days: 16,
    desc: "Marketing site for an analytics startup. The hero is a live, scrubbable chart instead of a screenshot — the product is the pitch." },
  { id: 8,  t: "Wildflower Editorial Illustrations", d: "ingrid", cat: "illustration", tags: ["illustration", "editorial", "nature"], likes: 3051, views: 61400, art: "illo", c: ["#A3692A", "#5C3A14", "#F4E3C8", "#7B9E5F"], tools: ["Procreate"],            colorKey: "amber",  days: 31,
    desc: "Twelve spot illustrations for a long-read on alpine meadows. Gouache textures, a restricted earth palette, and botanically accurate linework." },
  { id: 9,  t: "Nova Bank Card Concepts",        d: "ana",    cat: "product",      tags: ["fintech", "product", "cards"],      likes: 1667, views: 33800, art: "product", c: ["#3D5AFE", "#141A2E", "#E9EDFF", "#FF7A59"], tools: ["Figma", "Blender"],             colorKey: "cobalt", days: 27,
    desc: "Physical and virtual card designs for a challenger bank — vertical layout, tactile number embossing, and a dynamic gradient tied to spending category." },
  { id: 10, t: "Motion Logo Reveal — Kinetic",   d: "dayo",   cat: "animation",    tags: ["motion", "logo", "animation"],      likes: 1932, views: 38100, art: "motion",  c: ["#5B4BC4", "#1E1548", "#CBC2F2", "#FF7A59"], tools: ["After Effects"],                colorKey: "purple", days: 5,
    desc: "A 2.5-second logo reveal built on overlapping arcs and a single elastic ease. Includes the full easing breakdown and a Lottie export." },
  { id: 11, t: "Café Mori Packaging",            d: "yuki",   cat: "branding",     tags: ["packaging", "branding", "coffee"],  likes: 1278, views: 24500, art: "brand",   c: ["#B4552D", "#5C2410", "#F6E7DC", "#2E7D5B"], tools: ["Illustrator"],                  colorKey: "amber",  days: 44,
    desc: "Takeaway cups and retail bags for a Kyoto coffee roaster. A woodblock-inspired monogram and seasonal colorways printed on unbleached stock." },
  { id: 12, t: "Mono Grid Portfolio",            d: "lena",   cat: "web",          tags: ["portfolio", "web", "minimal"],      likes: 756,  views: 14200, art: "dashlt",  c: ["#141A2E", "#3D5AFE", "#F2F2EE", "#FF7A59"], tools: ["Figma"],                        colorKey: "navy",   days: 8,
    desc: "A portfolio template built on a strict 8-column mono-spaced grid. Every element snaps; the only curve on the page is the cursor." },
  { id: 13, t: "Pulse — Fitness Rings",          d: "priya",  cat: "product",      tags: ["product", "fitness", "watch"],      likes: 1105, views: 20100, art: "orb",     c: ["#C13B6B", "#3D1026", "#FF9DBE", "#FFD36B"], tools: ["Figma", "Blender"],             colorKey: "pink",   days: 15,
    desc: "Watch-face concepts for a fitness wearable. Three rings, zero guilt — streaks pause when you're sick, and the copy celebrates showing up." },
  { id: 14, t: "Isometric City Blocks",          d: "marco",  cat: "3d",           tags: ["3d", "isometric", "city"],          likes: 2841, views: 57600, art: "orb",     c: ["#3A7CA5", "#12344A", "#9FD0E8", "#FF7A59"], tools: ["Blender"],                      colorKey: "teal",   days: 60,
    desc: "A modular isometric city kit — 40 snapping blocks with shared lighting, built for explainer videos and empty states." },
  { id: 15, t: "Letterform Studies 04",          d: "sofia",  cat: "typography",   tags: ["typography", "lettering"],          likes: 689,  views: 11900, art: "typo",    c: ["#B4552D", "#4A1E0E", "#F6E7DC", "#3D5AFE"], tools: ["Procreate", "Illustrator"],     colorKey: "amber",  days: 3,
    desc: "Fourth round of brush-lettering studies — ligature experiments on the letter pair 'fj' and a very patient pursuit of the perfect ampersand." },
  { id: 16, t: "Aurora Weather App",             d: "tomas",  cat: "mobile",       tags: ["mobile ui", "weather"],             likes: 1521, views: 29300, art: "mobile",  c: ["#5B4BC4", "#141A2E", "#CBC2F2", "#7BE0C3"], tools: ["Figma"],                        colorKey: "purple", days: 22,
    desc: "A weather app where the whole canvas is the forecast — the background gradient shifts with temperature and the type weight with wind speed." },
  { id: 17, t: "Fjord Travel Brand System",      d: "ingrid", cat: "branding",     tags: ["branding", "travel", "system"],     likes: 1890, views: 36700, art: "brand",   c: ["#2E6B8A", "#0F2E3D", "#D7E8F0", "#FF7A59"], tools: ["Illustrator", "Figma"],         colorKey: "teal",   days: 90,
    desc: "Identity system for a Norwegian expedition company: a horizon-line wordmark, wayfinding icons, and a photography grammar for weather you can feel." },
  { id: 18, t: "Synthwave Poster Series",        d: "dayo",   cat: "illustration", tags: ["illustration", "poster", "retro"],  likes: 2204, views: 44800, art: "motion",  c: ["#C13B6B", "#1E1548", "#FF9DBE", "#7BE0C3"], tools: ["Illustrator", "After Effects"], colorKey: "pink",   days: 38,
    desc: "Five gig posters for a synth festival. Gradient meshes, chrome type, and a grid horizon — printed with a fluorescent fifth ink." },
  { id: 19, t: "Ledger — Expense Tracker UI",    d: "omar",   cat: "web",          tags: ["dashboard", "fintech", "web"],      likes: 934,  views: 17800, art: "dash",    c: ["#2E6B8A", "#0F2434", "#9FD0E8", "#FFD36B"], tools: ["Figma"],                        colorKey: "teal",   days: 11,
    desc: "An expense tracker that reads like a bank statement you'd actually enjoy. Monospaced amounts, categorical color coding, and a merciless focus on scanning speed." },
  { id: 20, t: "Character Walk Cycle",           d: "sofia",  cat: "animation",    tags: ["animation", "character", "motion"], likes: 1347, views: 26200, art: "illo",    c: ["#FF7A59", "#8A2D3B", "#FFD9CC", "#3D5AFE"], tools: ["After Effects", "Procreate"],   colorKey: "coral",  days: 7,
    desc: "A 12-frame walk cycle for a courier character — weight on twos, secondary motion on the satchel, and a breakdown of every in-between." },
  { id: 21, t: "Terra Soil Sensor App",          d: "omar",   cat: "product",      tags: ["product", "iot", "agritech"],       likes: 618,  views: 10400, art: "product", c: ["#2E7D5B", "#15382B", "#DCEDE3", "#A3692A"], tools: ["Figma", "Framer"],              colorKey: "green",  days: 19,
    desc: "Companion app for a field soil sensor. Designed for gloves and glare: huge targets, high contrast, and readings that work offline-first." },
  { id: 22, t: "Glass Morph Icons",              d: "marco",  cat: "3d",           tags: ["3d", "icons", "glass"],             likes: 1756, views: 35100, art: "orb",     c: ["#6D83FF", "#1E2850", "#CBD5FF", "#FF9DBE"], tools: ["Blender"],                      colorKey: "cobalt", days: 13,
    desc: "Refraction studies for a set of frosted-glass UI icons — dispersion kept subtle so they survive at 24 pixels." },
  { id: 23, t: "Zine Layout Explorations",       d: "lena",   cat: "typography",   tags: ["editorial", "typography", "print"], likes: 823,  views: 13700, art: "typo",    c: ["#141A2E", "#3D5AFE", "#F2F2EE", "#FF7A59"], tools: ["Illustrator"],                  colorKey: "navy",   days: 50,
    desc: "Spreads for a riso-printed design zine. Two inks, brutal margins, and columns that collide exactly where the essays argue with each other." },
  { id: 24, t: "Kelp — Ocean Charity Site",      d: "ingrid", cat: "web",          tags: ["web", "nonprofit", "illustration"], likes: 1489, views: 27900, art: "dashlt",  c: ["#1F8A70", "#0E3B33", "#D9F2EA", "#3A7CA5"], tools: ["Figma", "Procreate"],           colorKey: "green",  days: 33,
    desc: "Donation site for a kelp-reforestation charity. Illustrated depth parallax, a transparent funding tracker, and a checkout flow with zero dark patterns." },
  { id: 25, t: "Night Market Illustration",      d: "kwame",  cat: "illustration", tags: ["illustration", "scene", "food"],    likes: 2665, views: 49800, art: "illo",    c: ["#5B4BC4", "#1E1548", "#FFB36B", "#FF7A59"], tools: ["Procreate"],                    colorKey: "purple", days: 25,
    desc: "A busy Accra night-market scene — fifty tiny stories in one frame, lit entirely by stall bulbs and phone screens." },
  { id: 26, t: "Quanta Docs Redesign",           d: "ana",    cat: "product",      tags: ["product", "docs", "saas"],          likes: 1077, views: 21600, art: "dashlt",  c: ["#3D5AFE", "#141A2E", "#E9EDFF", "#2E7D5B"], tools: ["Figma"],                        colorKey: "cobalt", days: 42,
    desc: "Documentation redesign for a quantum-computing SDK. Three reading modes, inline runnable samples, and a sidebar that finally respects your scroll position." },
  { id: 27, t: "Micro-interactions Pack",        d: "dayo",   cat: "animation",    tags: ["motion", "ui", "micro-interactions"], likes: 1588, views: 31200, art: "motion", c: ["#3D5AFE", "#141A2E", "#6D83FF", "#FFD36B"], tools: ["After Effects", "Framer"],     colorKey: "cobalt", days: 1,
    desc: "Thirty production-ready micro-interactions — toggles, likes, loaders — each under 400ms, each with a reduced-motion variant included." },
  { id: 28, t: "Saffron Recipe App",             d: "priya",  cat: "mobile",       tags: ["mobile ui", "food", "recipes"],     likes: 1240, views: 23900, art: "mobile",  c: ["#A3692A", "#4A2E0E", "#F4E3C8", "#C13B6B"], tools: ["Figma"],                        colorKey: "amber",  days: 29,
    desc: "A recipe app that respects the cook: step-locked screens you can tap with a knuckle, smart scaling, and timers that layer instead of fight." },
];

export const CATS = [
  ["all", "All"], ["web", "Web Design"], ["mobile", "Mobile"], ["branding", "Branding"],
  ["illustration", "Illustration"], ["animation", "Animation"], ["product", "Product Design"],
  ["typography", "Typography"], ["3d", "3D"],
];

export const COLOR_KEYS = [
  ["navy", "#141A2E"], ["cobalt", "#3D5AFE"], ["coral", "#FF7A59"], ["green", "#2E7D5B"],
  ["purple", "#8A5BC4"], ["amber", "#C98B3A"], ["pink", "#C13B6B"], ["teal", "#3A7CA5"],
];

export const TOOLS = ["Figma", "Blender", "After Effects", "Illustrator", "Procreate", "Framer"];

export const COMMENTS = [
  { w: "tomas",  t: "2d",  m: "The spacing rhythm here is doing so much quiet work. Saving this for reference." },
  { w: "ingrid", t: "1d",  m: "Beautiful restraint with the palette — the coral lands exactly once and it's perfect." },
  { w: "omar",   t: "20h", m: "Would love a breakdown of your process on this one. The detail shots are great." },
  { w: "sofia",  t: "6h",  m: "Instant save. The hover states alone are a masterclass." },
];

export const JOBS = [
  { co: "Northwind Studio", hue: "#5B4BC4", role: "Senior Brand Designer",    sub: "Remote (EU) · Full-time · $95–120K",      tags: ["Identity", "Art direction", "Print"] },
  { co: "Loop Labs",        hue: "#1F8A70", role: "Product Designer, Growth", sub: "Amsterdam · Hybrid · €70–90K",            tags: ["Product", "Experimentation", "Figma"] },
  { co: "Hearth & Co",      hue: "#B4552D", role: "Motion Designer",          sub: "Remote (Americas) · Contract · $80/hr",   tags: ["After Effects", "Lottie", "3D a plus"] },
];

export const HIRE_IDS = ["ana", "kwame", "yuki", "ingrid", "dayo", "priya"];

export function fmt(n) {
  return n >= 1000 ? (Math.round(n / 100) / 10).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
}
