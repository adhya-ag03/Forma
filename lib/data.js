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
  { id: 29, t: "Nimbus Cloud Console",          d: "omar",   cat: "web",          tags: ["dashboard", "devtools", "saas"],     likes: 1324, views: 25800, art: "dash",    c: ["#3D5AFE", "#10152A", "#9FB2FF", "#7BE0C3"], tools: ["Figma"],                        colorKey: "cobalt", days: 10,
    desc: "Infrastructure console for a cloud platform. Resource graphs, a command palette that does everything, and alert states designed to be calm instead of alarming." },
  { id: 30, t: "Hanami Festival Poster",         d: "yuki",   cat: "illustration", tags: ["illustration", "poster", "event"],   likes: 1988, views: 39400, art: "illo",    c: ["#C13B6B", "#4A1030", "#FFD3E2", "#FFB36B"], tools: ["Procreate", "Illustrator"],     colorKey: "pink",   days: 14,
    desc: "Poster for a cherry-blossom festival in Ueno Park — petals drawn one by one, type set vertically, printed in three spot colors." },
  { id: 31, t: "Vektor Type Family",             d: "lena",   cat: "typography",   tags: ["typography", "type design", "grotesk"], likes: 1456, views: 27100, art: "typo", c: ["#141A2E", "#3D5AFE", "#F2F2EE", "#FF7A59"], tools: ["Illustrator"],                  colorKey: "navy",   days: 18,
    desc: "A nine-weight grotesk built for interfaces. Tall x-height, open apertures, and a variable axis that goes from dense data tables to billboard headlines." },
  { id: 32, t: "Drift — Car Sharing App",        d: "tomas",  cat: "mobile",       tags: ["mobile ui", "maps", "transport"],    likes: 1102, views: 21300, art: "mobile",  c: ["#2E7D5B", "#0F2E22", "#D9F2E4", "#FFD36B"], tools: ["Figma", "Framer"],              colorKey: "green",  days: 21,
    desc: "Peer-to-peer car sharing with a map-first flow. Unlock animations, trust signals where they matter, and a handover checklist both sides actually finish." },
  { id: 33, t: "Clay Avatars Pack",              d: "marco",  cat: "3d",           tags: ["3d", "avatars", "characters"],       likes: 2310, views: 46700, art: "orb",     c: ["#FF7A59", "#6B2415", "#FFD9CC", "#3D5AFE"], tools: ["Blender"],                      colorKey: "coral",  days: 35,
    desc: "Forty-eight clay-render avatars with swappable hair, glasses and expressions — soft studio lighting and a palette that works on any background." },
  { id: 34, t: "Loop Habit Tracker",             d: "priya",  cat: "product",      tags: ["product", "habits", "mobile ui"],    likes: 876,  views: 16900, art: "product", c: ["#8A5BC4", "#2C1B4D", "#E9DFF6", "#FFB36B"], tools: ["Figma"],                        colorKey: "purple", days: 5,
    desc: "A habit tracker with no streak anxiety. Weekly rhythms instead of chains, gentle recovery flows, and a review screen that celebrates trends over perfection." },
  { id: 35, t: "Ember Coffee Rebrand",           d: "kwame",  cat: "branding",     tags: ["branding", "rebrand", "coffee"],     likes: 1745, views: 33200, art: "brand",   c: ["#FF7A59", "#7A2E16", "#FFE8DF", "#141A2E"], tools: ["Illustrator", "Figma"],         colorKey: "coral",  days: 48,
    desc: "Rebrand for a third-wave roastery chain — a flame monogram that doubles as a coffee bloom, and a packaging system keyed to roast depth." },
  { id: 36, t: "Parallax Scroll Experiments",    d: "dayo",   cat: "animation",    tags: ["motion", "web", "scroll"],           likes: 1214, views: 24100, art: "motion",  c: ["#3A7CA5", "#0F2E3D", "#9FD0E8", "#FF7A59"], tools: ["After Effects", "Framer"],      colorKey: "teal",   days: 9,
    desc: "Six scroll-driven scenes exploring depth without nausea — strict velocity caps, reduced-motion fallbacks, and layers that settle instead of float forever." },
  { id: 37, t: "Field Notes Journal App",        d: "ingrid", cat: "mobile",       tags: ["mobile ui", "journaling", "outdoors"], likes: 942, views: 18200, art: "mobile", c: ["#A3692A", "#4A2E0E", "#F4E3C8", "#2E7D5B"], tools: ["Figma", "Procreate"],           colorKey: "amber",  days: 26,
    desc: "A nature journal for hikers — offline species lookup, sketch layers over photos, and typography that stays readable in direct sunlight." },
  { id: 38, t: "Signal Crypto Wallet",           d: "ana",    cat: "product",      tags: ["fintech", "product", "security"],    likes: 1533, views: 30600, art: "dash",    c: ["#141A2E", "#6D83FF", "#CBD5FF", "#2BB673"], tools: ["Figma"],                        colorKey: "navy",   days: 7,
    desc: "A wallet that treats security UX as the product. Plain-language transaction previews, phishing-resistant confirmations, and recovery flows tested with real humans." },
  { id: 39, t: "Studio Noon Website",            d: "sofia",  cat: "web",          tags: ["web", "portfolio", "studio"],        likes: 798,  views: 15100, art: "dashlt",  c: ["#C13B6B", "#4A1030", "#FBE4EC", "#141A2E"], tools: ["Figma", "Framer"],              colorKey: "pink",   days: 30,
    desc: "Site for an animation studio — every project card plays on hover, the cursor becomes a playhead, and the whole thing still loads in under a second." },
  { id: 40, t: "Origami Logo Marks",             d: "kwame",  cat: "branding",     tags: ["branding", "logo", "geometric"],     likes: 2056, views: 40900, art: "brand",   c: ["#5B4BC4", "#231554", "#DCD4F7", "#FF7A59"], tools: ["Illustrator"],                  colorKey: "purple", days: 55,
    desc: "Twelve single-fold logo marks — each built from one continuous shape, shown flat and dimensional, with construction grids included." },
  { id: 41, t: "Metro Transit Wayfinding",       d: "omar",   cat: "product",      tags: ["product", "wayfinding", "public"],   likes: 1388, views: 28700, art: "product", c: ["#141A2E", "#3D5AFE", "#E9EDFF", "#FFD36B"], tools: ["Figma", "Illustrator"],         colorKey: "navy",   days: 70,
    desc: "Wayfinding system for a metro network — line colors tested for every common color-vision deficiency, and signage that works at a walking glance." },
  { id: 42, t: "Chromatic Gradient Studies",     d: "dayo",   cat: "illustration", tags: ["illustration", "gradients", "abstract"], likes: 1677, views: 32400, art: "illo", c: ["#3D5AFE", "#141A2E", "#7BE0C3", "#FF9DBE"], tools: ["Procreate", "After Effects"],  colorKey: "cobalt", days: 2,
    desc: "Daily gradient studies, week six — mesh blends pushed until they stop being backgrounds and start being the subject." },
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
  { co: "Quanta",           hue: "#3D5AFE", role: "Design Systems Lead",      sub: "Remote (Global) · Full-time · $130–160K", tags: ["Tokens", "Docs", "Accessibility"] },
  { co: "Kelp Collective",  hue: "#1F8A70", role: "Brand & Web Designer",     sub: "Oslo · On-site · 650–780K NOK",           tags: ["Identity", "Web", "Motion"] },
  { co: "Saffron Labs",     hue: "#C13B6B", role: "Senior Mobile Designer",   sub: "Bengaluru · Hybrid · ₹35–50L",            tags: ["iOS", "Android", "Prototyping"] },
];

export const HIRE_IDS = ["ana", "kwame", "yuki", "ingrid", "dayo", "priya"];

export const BIOS = {
  ana:    "Ten years in fintech product design, from seed-stage wallets to a bank with 4M customers. I care about numbers you can trust at a glance.",
  kwame:  "Brand designer working between Accra and everywhere. Identities with a long shelf life — systems, not just logos.",
  yuki:   "Mobile UI and design systems from Tokyo. I sweat the 44-pixel details and prototype everything before I defend it.",
  lena:   "Type designer and editorial obsessive in Berlin. Currently drawing a nine-weight grotesk and an opinionated serif.",
  marco:  "3D and visual design from Lisbon. Clay renders, icon systems, and the occasional isometric city.",
  priya:  "Product designer in Bengaluru focused on health and habit products. Kind interfaces, honest metrics, no dark patterns.",
  tomas:  "Web and interaction designer in Mexico City. Marketing sites that feel like the product, not a brochure about it.",
  ingrid: "Illustrator in Oslo. Gouache textures, botanical accuracy, and editorial work for slow journalism.",
  dayo:   "Motion designer in Lagos. Logo reveals, micro-interactions, and scroll choreography — always with a reduced-motion variant.",
  sofia:  "Animator in Buenos Aires. Characters with weight, walk cycles on twos, and lettering when the deadline allows.",
  omar:   "Product and data-viz designer in Cairo. Dashboards, consoles, and public-sector wayfinding.",
};

export const STUDIOS = [
  "Northwind Studio", "Loop Labs", "Hearth & Co", "Quanta",
  "Atlas Analytics", "Kelp Collective", "Nova Bank", "Lumen Health",
];

export const ARTICLES = [
  {
    slug: "grid",
    title: "The grid is a promise",
    meta: "Process · 7 min read",
    grad: "linear-gradient(120deg,#3D5AFE,#141A2E)",
    blurb: "Why layout systems earn trust before a single word is read — and when to break them on purpose.",
    quote: "A reader forgives a weak sentence long before they forgive a wobbling margin.",
    paras: [
      "Before anyone reads your headline, they have already judged your page. The judgment happens in the first two hundred milliseconds, and it is almost entirely about alignment: do the edges agree with each other, do the columns hold, does the whitespace repeat at predictable intervals. A grid is a promise that someone was paying attention, and readers extend trust to pages that keep it.",
      "The working designers we interviewed for this piece were unanimous on one thing: the grid earns its keep most on the pages nobody celebrates — settings screens, tables, empty states. Hero sections get art-directed; the four-hundredth list row gets whatever system you built. If the system is sound, the boring pages carry the product.",
      "Breaking the grid, then, is spending trust you have already earned. The best breaks are singular and load-bearing: one image crossing a column boundary, one pull quote hanging into the margin. Break it twice on the same screen and the reader stops believing the rest of the page was deliberate.",
    ],
  },
  {
    slug: "pricing",
    title: "Pricing creative work without apologizing",
    meta: "Business · 11 min read",
    grad: "linear-gradient(120deg,#FF7A59,#8A2D3B)",
    blurb: "Six working designers on day rates, value pricing, and the email template that changed their income.",
    quote: "The price conversation is a design problem. Design it once, reuse it forever.",
    paras: [
      "Every designer we spoke to described the same arc: years of quoting low out of fear, one uncomfortable experiment with quoting high, and then the strange discovery that the higher number made clients take the work more seriously. Price is information, and a low price tells a client the work is interchangeable.",
      "The most practical shift was moving the money conversation earlier. A budget range in the first email filters out mismatched clients before anyone has spent a week on a proposal. The designers who did this reported fewer projects, higher income, and dramatically fewer scope disputes — because the clients who remained had already accepted the premise.",
      "None of this requires bravado. It requires a template: a short paragraph that states the range, what it includes, and one sentence about why. Written once, calmly, on a good day — then sent on every other day, including the nervous ones.",
    ],
  },
  {
    slug: "motion",
    title: "Motion with intent",
    meta: "Craft · 9 min read",
    grad: "linear-gradient(120deg,#1F8A70,#12343B)",
    blurb: "Animation that explains instead of decorates: easing, choreography, and knowing when to hold still.",
    quote: "If you can't say what a transition explains, it's decoration — and decoration ages fast.",
    paras: [
      "Good interface motion answers one of three questions: where did this come from, where did it go, or what just changed. Every animation that answers none of them is a tax on the user's attention. The craft is not in making things move; it is in deciding what deserves to.",
      "Choreography beats duration. A 400ms sequence where elements arrive in reading order feels faster than a 200ms everything-at-once pop, because the eye is guided instead of startled. Stagger by 30 to 50 milliseconds, ease out on entry, ease in on exit, and let the most important element land last.",
      "And always build the still version first. Reduced-motion is not an edge case; it is the proof that your design works without the choreography. If the interface only makes sense in motion, the motion is hiding a layout problem.",
    ],
  },
];

export function fmt(n) {
  return n >= 1000 ? (Math.round(n / 100) / 10).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
}
