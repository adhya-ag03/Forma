"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Search, Moon, Sun, Menu, X, ChevronDown, SlidersHorizontal,
  Heart, Bookmark, Eye, ArrowLeft, ArrowRight, MapPin,
  PenTool, Compass, Briefcase, Sparkles, Send,
  Instagram, Linkedin, Youtube, AtSign, Telescope,
} from "lucide-react";
import Thumb from "../components/Thumb";
import Modal from "../components/Modal";
import {
  DESIGNERS, SHOTS, CATS, COLOR_KEYS, TOOLS, JOBS, HIRE_IDS, fmt,
} from "../lib/data";

const PAGE = 12;

const ls = {
  get(k, fallback) {
    try {
      const v = localStorage.getItem("forma:" + k);
      return v === null ? fallback : JSON.parse(v);
    } catch {
      return fallback;
    }
  },
  set(k, v) {
    try {
      localStorage.setItem("forma:" + k, JSON.stringify(v));
    } catch {}
  },
};

function Logo({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="8" fill="var(--accent)" />
      <path d="M10 23V9h12v4h-8v2.5h7v4h-7V23h-4z" fill="#fff" />
      <circle cx="24.5" cy="23" r="2.6" fill="var(--coral)" />
    </svg>
  );
}

function Badge({ badge }) {
  if (!badge) return null;
  return <span className={`badge badge-${badge.toLowerCase()}`}>{badge}</span>;
}

function Card({ shot, fresh, isLiked, isSaved, likeCount, onOpen, onLike, onSave }) {
  const des = DESIGNERS[shot.d];
  const act = (fn) => (e) => { e.stopPropagation(); fn(shot.id); };
  const key = (fn) => (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.stopPropagation();
      fn(shot.id);
    }
  };
  return (
    <article className={`card${fresh ? " fade-in" : ""}`}>
      <button className="card-thumb" onClick={() => onOpen(shot.id)} aria-label={`Open ${shot.t} by ${des.n}`}>
        <Thumb shot={shot} />
        <span className="overlay">
          <span className="o-title">{shot.t}</span>
          <span
            key={`sv-${isSaved}`}
            className={`o-act pop${isSaved ? " on" : ""}`}
            role="button" tabIndex={0}
            onClick={act(onSave)} onKeyDown={key(onSave)}
            aria-label={`Save ${shot.t}`} aria-pressed={isSaved}
          >
            <Bookmark className="i" aria-hidden="true" />
          </span>
          <span
            key={`lk-${isLiked}`}
            className={`o-act pop${isLiked ? " on-like" : ""}`}
            role="button" tabIndex={0}
            onClick={act(onLike)} onKeyDown={key(onLike)}
            aria-label={`Like ${shot.t}`} aria-pressed={isLiked}
          >
            <Heart className="i" aria-hidden="true" />
          </span>
        </span>
      </button>
      <div className="card-meta">
        <span className="ava" style={{ background: des.hue }} aria-hidden="true">{des.init}</span>
        <span className="name">{des.n}</span>
        <Badge badge={des.badge} />
        <span className="card-stats">
          <span><Heart className="i" aria-hidden="true" />{fmt(likeCount)}</span>
          <span><Eye className="i" aria-hidden="true" />{fmt(shot.views)}</span>
        </span>
      </div>
    </article>
  );
}

export default function Home() {
  /* ---------- filter state ---------- */
  const [cat, setCat] = useState("all");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("popular");
  const [color, setColor] = useState(null);
  const [time, setTime] = useState("any");
  const [tools, setTools] = useState(() => new Set());
  const [shown, setShown] = useState(PAGE);
  const [freshFrom, setFreshFrom] = useState(null);

  /* ---------- social state (hydrated from localStorage) ---------- */
  const [liked, setLiked] = useState(() => new Set());
  const [saved, setSaved] = useState(() => new Set());
  const [follows, setFollows] = useState(() => new Set());
  useEffect(() => {
    setLiked(new Set(ls.get("liked", [])));
    setSaved(new Set(ls.get("saved", [])));
    setFollows(new Set(ls.get("follows", [])));
  }, []);

  /* ---------- ui state ---------- */
  const [modalId, setModalId] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  const [theme, setTheme] = useState(null);
  const hireRef = useRef(null);

  /* ---------- theme ---------- */
  useEffect(() => {
    const t = document.documentElement.dataset.theme
      || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(t);
  }, []);
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    ls.set("theme", next);
    setTheme(next);
  }

  /* ---------- toasts ---------- */
  const toast = useCallback((msg) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => setToasts((t) => t.map((x) => (x.id === id ? { ...x, out: true } : x))), 2600);
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2900);
  }, []);

  /* ---------- social actions ---------- */
  const likesOf = useCallback((s) => s.likes + (liked.has(s.id) ? 1 : 0), [liked]);
  function toggleLike(id) {
    const s = SHOTS.find((x) => x.id === id);
    const n = new Set(liked);
    const on = !n.has(id);
    on ? n.add(id) : n.delete(id);
    setLiked(n);
    ls.set("liked", [...n]);
    toast(on ? `Liked “${s.t}”` : "Like removed");
  }
  function toggleSave(id) {
    const n = new Set(saved);
    const on = !n.has(id);
    on ? n.add(id) : n.delete(id);
    setSaved(n);
    ls.set("saved", [...n]);
    toast(on ? "Saved to your collection" : "Removed from your collection");
  }
  function toggleFollow(dId) {
    const n = new Set(follows);
    const on = !n.has(dId);
    on ? n.add(dId) : n.delete(dId);
    setFollows(n);
    ls.set("follows", [...n]);
    toast(on ? `Following ${DESIGNERS[dId].n}` : `Unfollowed ${DESIGNERS[dId].n}`);
  }
  function toggleTool(t) {
    const n = new Set(tools);
    n.has(t) ? n.delete(t) : n.add(t);
    setTools(n);
  }

  /* reset pagination whenever any filter changes */
  useEffect(() => {
    setShown(PAGE);
    setFreshFrom(null);
  }, [cat, q, sort, color, time, tools]);

  /* ---------- filtering ---------- */
  const filteredList = useMemo(() => {
    const query = q.trim().toLowerCase();
    const list = SHOTS.filter((s) => {
      const des = DESIGNERS[s.d];
      if (cat !== "all" && s.cat !== cat) return false;
      if (query && !(
        s.t.toLowerCase().includes(query)
        || des.n.toLowerCase().includes(query)
        || s.tags.some((t) => t.includes(query))
      )) return false;
      if (color && s.colorKey !== color) return false;
      if (time !== "any") {
        const lim = time === "week" ? 7 : time === "month" ? 30 : 365;
        if (s.days > lim) return false;
      }
      if (tools.size && ![...tools].every((t) => s.tools.includes(t))) return false;
      if (sort === "following" && !follows.has(s.d)) return false;
      return true;
    });
    if (sort === "new") list.sort((a, b) => a.days - b.days);
    else list.sort((a, b) => likesOf(b) - likesOf(a));
    return list;
  }, [cat, q, sort, color, time, tools, follows, likesOf]);

  const visible = filteredList.slice(0, shown);
  const filterCount = (color ? 1 : 0) + (time !== "any" ? 1 : 0) + tools.size;

  function clearFilters(all) {
    setColor(null);
    setTime("any");
    setTools(new Set());
    if (all) {
      setCat("all");
      setQ("");
      setSort("popular");
    }
  }

  function setQuery(value, scroll) {
    setQ(value);
    if (scroll) document.getElementById("explore")?.scrollIntoView({ behavior: "smooth" });
  }

  /* ---------- modal / menu side effects ---------- */
  useEffect(() => {
    document.body.style.overflow = modalId !== null || menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalId, menuOpen]);

  useEffect(() => {
    function onKey(e) {
      if (e.key !== "Escape") return;
      if (modalId !== null) setModalId(null);
      else if (panelOpen) setPanelOpen(false);
      else if (menuOpen) setMenuOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalId, panelOpen, menuOpen]);

  const modalShot = modalId !== null ? SHOTS.find((s) => s.id === modalId) : null;
  const collagePicks = [SHOTS[0], SHOTS[4], SHOTS[2], SHOTS[16], SHOTS[13]];
  const collageCls = ["fc1", "fc2", "fc3", "fc4", "fc5"];

  const emptyMsg = sort === "following" && !follows.size
    ? "You're not following anyone yet. Follow a designer and their work shows up here."
    : "No pieces match your search. Try different keywords or clear your filters.";

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="logo" href="#top" aria-label="Forma — home">
            <Logo />
            <span className="logo-word">Forma</span>
          </a>
          <nav className="main-nav" aria-label="Primary">
            <a href="#explore">Explore</a>
            <a href="#hire">Hire Designers</a>
            <a href="#jobs">Jobs</a>
            <a href="#blog">Blog</a>
          </nav>
          <div className="header-search" role="search">
            <Search className="i" aria-hidden="true" />
            <input
              id="header-search-input"
              type="search"
              placeholder="Search pieces…"
              aria-label="Search pieces"
              value={q}
              onChange={(e) => setQuery(e.target.value, false)}
            />
          </div>
          <div className="header-actions">
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
              {theme === "dark" ? <Sun className="i" aria-hidden="true" /> : <Moon className="i" aria-hidden="true" />}
            </button>
            <button className="login-link" onClick={() => toast("Log in is coming soon — explore freely meanwhile")}>
              Log in
            </button>
            <button className="btn btn-primary" onClick={() => toast("Create a free account to share your work — sign-ups open soon")}>
              Share your work
            </button>
            <button
              className="icon-btn hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="i" aria-hidden="true" /> : <Menu className="i" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu" onClick={(e) => { if (e.target.closest("a")) setMenuOpen(false); }}>
          <a href="#explore">Explore</a>
          <a href="#hire">Hire Designers</a>
          <a href="#jobs">Jobs</a>
          <a href="#blog">Blog</a>
          <a href="#explore">Log in</a>
          <button
            className="btn btn-primary"
            onClick={() => { setMenuOpen(false); toast("Create a free account to share your work — sign-ups open soon"); }}
          >
            Share your work
          </button>
        </div>
      )}

      <main id="top">
        {/* ================= HERO ================= */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1 className="rise d1">Discover work from the world&apos;s <em>sharpest</em> designers</h1>
              <p className="hero-sub rise d2">
                Forma is where design finds its audience — share your pieces, follow the people
                shaping the craft, and land your next project.
              </p>
              <form
                className="hero-search rise d3"
                onSubmit={(e) => { e.preventDefault(); setQuery(q, true); }}
              >
                <Search className="i" aria-hidden="true" />
                <input
                  id="hero-search-input"
                  type="search"
                  placeholder="Try “fintech dashboard” or “brand identity”"
                  aria-label="Search pieces"
                  value={q}
                  onChange={(e) => setQuery(e.target.value, false)}
                />
                <button className="btn btn-primary" type="submit">Search</button>
              </form>
              <div className="tag-chips rise d4">
                <span>Popular:</span>
                {["Branding", "Mobile UI", "Illustration", "3D", "Typography", "Motion"].map((t) => (
                  <button key={t} className="chip" onClick={() => setQuery(t.toLowerCase(), true)}>{t}</button>
                ))}
              </div>
              <p className="hero-stats mono rise d5">
                <span><b>48K</b> designers</span><span className="dot">·</span>
                <span><b>1.2M</b> pieces</span><span className="dot">·</span>
                <span><b>6K</b> studios hiring</span>
              </p>
            </div>
            <div className="collage rise d3" aria-hidden="true">
              {collagePicks.map((s, i) => {
                const des = DESIGNERS[s.d];
                return (
                  <div className={`float-card ${collageCls[i]}`} key={s.id}>
                    <Thumb shot={s} />
                    <div className="fc-meta">
                      <span className="ava" style={{ background: des.hue }}>{des.init}</span>
                      {des.n}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= FILTER BAR ================= */}
        <div className="filter-bar" id="explore">
          <div className="wrap filter-inner">
            <div className="pill-scroll" role="group" aria-label="Filter by category">
              {CATS.map(([k, label]) => (
                <button key={k} className="pill" aria-pressed={cat === k} onClick={() => setCat(k)}>
                  {label}
                </button>
              ))}
            </div>
            <div className="filter-controls">
              <div className="select-wrap">
                <select aria-label="Sort pieces" value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="popular">Popular</option>
                  <option value="new">New &amp; Noteworthy</option>
                  <option value="following">Following</option>
                </select>
                <ChevronDown className="i" aria-hidden="true" />
              </div>
              <button
                className="filters-toggle"
                aria-expanded={panelOpen}
                aria-controls="filter-panel"
                onClick={() => setPanelOpen(!panelOpen)}
              >
                <SlidersHorizontal className="i" aria-hidden="true" />
                Filters {filterCount > 0 && <span className="count">{filterCount}</span>}
              </button>
            </div>
          </div>
        </div>

        {panelOpen && (
          <div className="filter-panel" id="filter-panel">
            <div className="wrap filter-panel-inner">
              <div className="fgroup">
                <h4>Color</h4>
                <div className="swatches">
                  {COLOR_KEYS.map(([k, hex]) => (
                    <button
                      key={k}
                      className="swatch"
                      style={{ background: hex }}
                      aria-pressed={color === k}
                      aria-label={`Filter by ${k}`}
                      onClick={() => setColor(color === k ? null : k)}
                    />
                  ))}
                </div>
              </div>
              <div className="fgroup">
                <h4>Timeframe</h4>
                <div className="seg">
                  {[["any", "Any time"], ["week", "This week"], ["month", "This month"], ["year", "This year"]].map(([k, label]) => (
                    <button key={k} aria-pressed={time === k} onClick={() => setTime(k)}>{label}</button>
                  ))}
                </div>
              </div>
              <div className="fgroup">
                <h4>Tools used</h4>
                <div className="toolchecks">
                  {TOOLS.map((t) => (
                    <label key={t}>
                      <input type="checkbox" checked={tools.has(t)} onChange={() => toggleTool(t)} />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
              <button className="clear-filters" onClick={() => clearFilters(false)}>Clear all filters</button>
            </div>
          </div>
        )}

        {/* ================= SHOTS GRID ================= */}
        <section className="shots-section">
          <div className="wrap">
            {visible.length > 0 ? (
              <div className="grid">
                {visible.map((s, i) => (
                  <Card
                    key={s.id}
                    shot={s}
                    fresh={freshFrom !== null && i >= freshFrom}
                    isLiked={liked.has(s.id)}
                    isSaved={saved.has(s.id)}
                    likeCount={likesOf(s)}
                    onOpen={setModalId}
                    onLike={toggleLike}
                    onSave={toggleSave}
                  />
                ))}
              </div>
            ) : (
              <div className="empty">
                <Telescope className="i" aria-hidden="true" />
                <h3>Nothing here yet</h3>
                <p>{emptyMsg}</p>
                <button className="btn btn-ghost" onClick={() => clearFilters(true)}>Reset everything</button>
              </div>
            )}
            {visible.length < filteredList.length && (
              <div className="load-wrap">
                <button
                  className="btn btn-ghost"
                  onClick={() => { setFreshFrom(shown); setShown(shown + PAGE); }}
                >
                  Load more pieces
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ================= HIRE ================= */}
        <section className="section hire-section" id="hire">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">For teams &amp; studios</p>
                <h2>Hire top designers</h2>
                <p>Vetted, available and ready for your brief — from brand systems to motion.</p>
              </div>
              <div className="carousel-nav">
                <button
                  className="icon-btn"
                  aria-label="Scroll designers left"
                  onClick={() => hireRef.current?.scrollBy({ left: -350, behavior: "smooth" })}
                >
                  <ArrowLeft className="i" aria-hidden="true" />
                </button>
                <button
                  className="icon-btn"
                  aria-label="Scroll designers right"
                  onClick={() => hireRef.current?.scrollBy({ left: 350, behavior: "smooth" })}
                >
                  <ArrowRight className="i" aria-hidden="true" />
                </button>
              </div>
            </div>
            <div className="hire-track" ref={hireRef} tabIndex={0} aria-label="Designers available for hire">
              {HIRE_IDS.map((dId) => {
                const d = DESIGNERS[dId];
                const minis = SHOTS.filter((s) => s.d === dId).slice(0, 3);
                return (
                  <article className="hire-card" key={dId}>
                    <div className="hire-top">
                      <span className="ava" style={{ background: d.hue }} aria-hidden="true">{d.init}</span>
                      <div>
                        <p className="hire-name">
                          {d.n} <Badge badge={d.badge} />
                          {d.avail && <span className="avail-dot" title="Available for work" />}
                        </p>
                        <p className="hire-spec">{d.spec}</p>
                      </div>
                    </div>
                    <div className="hire-meta">
                      <span><MapPin className="i" aria-hidden="true" />{d.loc}</span>
                      <span className="mono">{d.rate}</span>
                      {d.avail
                        ? <span className="ok">Available for work</span>
                        : <span>Booked until Dec</span>}
                    </div>
                    <div className="hire-minis">
                      {minis.map((m) => <Thumb shot={m} key={m.id} />)}
                    </div>
                    <button className="btn btn-ghost" onClick={() => toast(`Opening ${d.n}’s profile`)}>
                      View profile
                    </button>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ================= JOBS ================= */}
        <section className="section" id="jobs">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">Design jobs</p>
                <h2>Open roles this week</h2>
                <p>Hand-picked positions from studios and product teams hiring on Forma.</p>
              </div>
            </div>
            <div className="jobs-grid">
              {JOBS.map((j) => (
                <article className="job-card" key={j.role}>
                  <span className="job-logo" style={{ background: j.hue }} aria-hidden="true">{j.co.charAt(0)}</span>
                  <div>
                    <h3>{j.role}</h3>
                    <p className="job-sub">{j.co} — {j.sub}</p>
                  </div>
                  <div className="job-tags">
                    {j.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <button className="btn btn-ghost" onClick={() => toast(`Application started for ${j.role} at ${j.co}`)}>
                    Apply
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= FEATURES ================= */}
        <section className="section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">Why Forma</p>
                <h2>Built for working designers</h2>
              </div>
            </div>
            <div className="features-grid">
              <div className="feature">
                <div className="feature-icon"><PenTool className="i" aria-hidden="true" /></div>
                <h3>Showcase your craft</h3>
                <p>Publish pieces in full fidelity — case studies, process shots and final work, presented the way you intended.</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><Compass className="i" aria-hidden="true" /></div>
                <h3>Get discovered</h3>
                <p>A feed tuned to craft, not clout. Curators surface new voices weekly, and search puts your work in front of the right eyes.</p>
              </div>
              <div className="feature">
                <div className="feature-icon"><Briefcase className="i" aria-hidden="true" /></div>
                <h3>Land your next project</h3>
                <p>Studios and product teams brief designers directly on Forma. Set your availability and let the work come to you.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= TESTIMONIALS ================= */}
        <section className="section testi-section">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">From the community</p>
                <h2>Designers on Forma</h2>
              </div>
            </div>
            <div className="testi-grid">
              <figure className="testi">
                <blockquote>
                  Three weeks after posting the Botanica identity, two studios reached out with real
                  budgets. Forma is where my client work actually comes from now.
                </blockquote>
                <figcaption className="testi-who">
                  <span className="ava" style={{ background: "#2E7D5B" }}>KM</span>
                  <span><b>Kwame Mensah</b><span>Brand designer, Accra</span></span>
                </figcaption>
              </figure>
              <figure className="testi">
                <blockquote>
                  We hired three product designers through Forma last quarter. The signal-to-noise is
                  unlike any other platform we&apos;ve sourced from.
                </blockquote>
                <figcaption className="testi-who">
                  <span className="ava" style={{ background: "#5B4BC4" }}>RV</span>
                  <span><b>Rosa Valdez</b><span>Design Director, Northwind Studio</span></span>
                </figcaption>
              </figure>
              <figure className="testi">
                <blockquote>
                  The feedback here is generous and specific. My type work got sharper in six months
                  on Forma than in three years posting anywhere else.
                </blockquote>
                <figcaption className="testi-who">
                  <span className="ava" style={{ background: "#B4552D" }}>LH</span>
                  <span><b>Lena Hoffmann</b><span>Type designer, Berlin</span></span>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* ================= BLOG ================= */}
        <section className="section" id="blog">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">The Forma Journal</p>
                <h2>Notes on craft</h2>
              </div>
            </div>
            <div className="blog-grid">
              {[
                { title: "The grid is a promise", grad: "linear-gradient(120deg,#3D5AFE,#141A2E)", meta: "Process · 7 min read",
                  blurb: "Why layout systems earn trust before a single word is read — and when to break them on purpose." },
                { title: "Pricing creative work without apologizing", grad: "linear-gradient(120deg,#FF7A59,#8A2D3B)", meta: "Business · 11 min read",
                  blurb: "Six working designers on day rates, value pricing, and the email template that changed their income." },
                { title: "Motion with intent", grad: "linear-gradient(120deg,#1F8A70,#12343B)", meta: "Craft · 9 min read",
                  blurb: "Animation that explains instead of decorates: easing, choreography, and knowing when to hold still." },
              ].map((b) => (
                <button className="blog-card" key={b.title} onClick={() => toast(`Opening “${b.title}” — coming soon`)}>
                  <div className="blog-cover" style={{ background: b.grad }} />
                  <div className="blog-body">
                    <h3>{b.title}</h3>
                    <p>{b.blurb}</p>
                    <p className="blog-meta mono">{b.meta}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="cta-band">
          <div className="wrap cta-inner">
            <p className="eyebrow coral">Where design finds its audience</p>
            <h2>Ready to share what <em>you&apos;re</em> making?</h2>
            <p>Join 48,000 designers publishing their best work, finding their people, and getting hired on Forma.</p>
            <button className="btn btn-primary" onClick={() => toast("Create a free account to share your work — sign-ups open soon")}>
              Join Forma — it&apos;s free
            </button>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <a className="logo" href="#top" aria-label="Forma — home">
              <Logo size={28} />
              <span className="logo-word">Forma</span>
            </a>
            <p>Where design finds its audience. A community for sharing work, discovering creatives, and getting hired.</p>
            <div className="footer-social">
              <button className="icon-btn" aria-label="Forma on Instagram" onClick={() => toast("Opening Forma on Instagram")}><Instagram className="i" aria-hidden="true" /></button>
              <button className="icon-btn" aria-label="Forma on LinkedIn" onClick={() => toast("Opening Forma on LinkedIn")}><Linkedin className="i" aria-hidden="true" /></button>
              <button className="icon-btn" aria-label="Forma on YouTube" onClick={() => toast("Opening Forma on YouTube")}><Youtube className="i" aria-hidden="true" /></button>
              <button className="icon-btn" aria-label="Forma newsletter" onClick={() => toast("Scroll down to join the newsletter")}><AtSign className="i" aria-hidden="true" /></button>
            </div>
          </div>
          <div className="fcol">
            <h4>For designers</h4>
            <a href="#explore">Explore work</a>
            <a href="#jobs">Find a job</a>
            <a href="#blog">Journal</a>
            <a href="#explore">Go Pro</a>
          </div>
          <div className="fcol">
            <h4>Hire talent</h4>
            <a href="#hire">Browse designers</a>
            <a href="#jobs">Post a job</a>
            <a href="#hire">Studio accounts</a>
            <a href="#hire">Success stories</a>
          </div>
          <div className="fcol">
            <h4>Company</h4>
            <a href="#top">About Forma</a>
            <a href="#blog">Press</a>
            <a href="#jobs">Careers</a>
            <a href="#top">Contact</a>
          </div>
          <div className="fcol">
            <h4>Resources</h4>
            <a href="#blog">Community guidelines</a>
            <a href="#top">Help center</a>
            <p className="digest-note">Get the weekly digest</p>
            <form
              className="newsletter"
              onSubmit={(e) => {
                e.preventDefault();
                toast("You're on the list — first digest lands Friday");
                e.target.reset();
              }}
            >
              <input type="email" required placeholder="you@studio.com" aria-label="Email for newsletter" />
              <button className="btn btn-primary" type="submit" aria-label="Subscribe">
                <Send className="i" aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span>© 2026 Forma. All work belongs to its creators.</span>
          <span className="mono">Terms · Privacy · Cookies</span>
        </div>
      </footer>

      {/* ================= MODAL ================= */}
      {modalShot && (
        <Modal
          key={modalShot.id}
          shot={modalShot}
          liked={liked}
          saved={saved}
          follows={follows}
          likesOf={likesOf}
          onLike={toggleLike}
          onSave={toggleSave}
          onFollow={toggleFollow}
          onClose={() => setModalId(null)}
          onTagSearch={(t) => { setModalId(null); setQuery(t, true); }}
          onOpenShot={setModalId}
          toast={toast}
        />
      )}

      {/* ================= TOASTS ================= */}
      <div className="toast-stack" aria-live="polite">
        {toasts.map((t) => (
          <div className={`toast${t.out ? " out" : ""}`} key={t.id}>
            <Sparkles className="i" aria-hidden="true" />
            <span>{t.msg}</span>
          </div>
        ))}
      </div>
    </>
  );
}
