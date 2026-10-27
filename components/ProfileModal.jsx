"use client";

import { useEffect, useRef } from "react";
import { X, MapPin, MessageCircle, Plus, Check, Heart } from "lucide-react";
import Thumb from "./Thumb";
import { DESIGNERS, SHOTS, BIOS, fmt } from "../lib/data";

export default function ProfileModal({ dId, follows, onFollow, onClose, onOpenShot, likesOf, toast }) {
  const d = DESIGNERS[dId];
  const work = SHOTS.filter((s) => s.d === dId);
  const totalLikes = work.reduce((sum, s) => sum + likesOf(s), 0);
  const closeRef = useRef(null);
  const boxRef = useRef(null);
  const isFollowing = follows.has(dId);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  function trapTab(e) {
    if (e.key !== "Tab") return;
    const focusables = boxRef.current.querySelectorAll('button, [tabindex="0"]');
    if (!focusables.length) return;
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onKeyDown={trapTab}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label={`${d.n} — profile`} ref={boxRef}>
        <button className="modal-close" ref={closeRef} onClick={onClose} aria-label="Close">
          <X className="i" aria-hidden="true" />
        </button>

        <div className="profile-top">
          <span className="ava profile-ava" style={{ background: d.hue }} aria-hidden="true">{d.init}</span>
          <div className="profile-id">
            <h2>
              {d.n}
              {d.badge && <span className={`badge badge-${d.badge.toLowerCase()}`}>{d.badge}</span>}
            </h2>
            <p className="profile-spec">{d.spec}</p>
            <p className="profile-loc">
              <MapPin className="i" aria-hidden="true" />{d.loc}
              <span className="mono">{d.rate}</span>
              {d.avail
                ? <span className="avail-note"><span className="avail-dot" aria-hidden="true" />Available for work</span>
                : <span className="booked-note">Booked until Dec</span>}
            </p>
          </div>
          <div className="modal-head-actions">
            <button className={`pill-act${isFollowing ? " on" : ""}`} onClick={() => onFollow(dId)}>
              {isFollowing
                ? <><Check className="i" aria-hidden="true" />Following</>
                : <><Plus className="i" aria-hidden="true" />Follow</>}
            </button>
            <button className="pill-act" onClick={() => toast(`Message sent to ${d.n} — they usually reply within a day`)}>
              <MessageCircle className="i" aria-hidden="true" />Get in touch
            </button>
          </div>
        </div>

        <p className="profile-bio">{BIOS[dId]}</p>

        <div className="profile-stats mono">
          <span><b>{work.length}</b> pieces</span>
          <span><b>{fmt(totalLikes)}</b> appreciations</span>
          <span><b>{fmt(work.reduce((sum, s) => sum + s.views, 0))}</b> views</span>
        </div>

        <div className="profile-grid">
          {work.map((s) => (
            <button key={s.id} onClick={() => onOpenShot(s.id)} aria-label={`Open ${s.t}`}>
              <Thumb shot={s} />
              <span className="p-caption">
                <span className="p-title">{s.t}</span>
                <span className="p-likes"><Heart className="i" aria-hidden="true" />{fmt(likesOf(s))}</span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
