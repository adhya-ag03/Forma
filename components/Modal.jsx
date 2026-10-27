"use client";

import { useEffect, useRef, useState } from "react";
import {
  X, Heart, Bookmark, Share2, Eye, MessageCircle, Plus, Check,
} from "lucide-react";
import Thumb from "./Thumb";
import { DESIGNERS, SHOTS, COMMENTS, fmt } from "../lib/data";

/* Fallback if the comments API is unreachable (mirrors the server seed). */
function seedComments(shot) {
  return COMMENTS.slice(0, 3 + (shot.id % 2)).map((c, i) => {
    const w = DESIGNERS[c.w];
    return { id: `seed-${shot.id}-${i}`, author: w.n, init: w.init, hue: w.hue, when: `${c.t} ago`, text: c.m };
  });
}

export default function Modal({
  shot, liked, saved, follows, likesOf,
  onLike, onSave, onFollow, onClose, onTagSearch, onOpenShot, onOpenProfile, toast,
}) {
  const des = DESIGNERS[shot.d];
  const closeRef = useRef(null);
  const boxRef = useRef(null);
  const more = SHOTS.filter((x) => x.d === shot.d && x.id !== shot.id).slice(0, 3);
  const [comments, setComments] = useState(null);
  const [draft, setDraft] = useState("");
  const [posting, setPosting] = useState(false);
  const isLiked = liked.has(shot.id);
  const isSaved = saved.has(shot.id);
  const isFollowing = follows.has(shot.d);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  /* Load comments from the API; fall back to the local seed. */
  useEffect(() => {
    let alive = true;
    fetch(`/api/shots/${shot.id}/comments`)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => { if (alive) setComments(d.comments); })
      .catch(() => { if (alive) setComments(seedComments(shot)); });
    return () => { alive = false; };
  }, [shot]);

  function trapTab(e) {
    if (e.key !== "Tab") return;
    const focusables = boxRef.current.querySelectorAll('button, input, [tabindex="0"]');
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

  function copyHex(h) {
    try {
      navigator.clipboard.writeText(h).then(() => toast(`${h} copied`), () => toast(h));
    } catch {
      toast(h);
    }
  }

  async function postComment(e) {
    e.preventDefault();
    const text = draft.trim();
    if (!text || posting) return;
    setPosting(true);
    try {
      const r = await fetch(`/api/shots/${shot.id}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (!r.ok) throw new Error();
      const { comment } = await r.json();
      setComments((c) => [...(c || []), comment]);
    } catch {
      setComments((c) => [...(c || []), { id: `local-${Date.now()}`, author: "You", init: "YOU", hue: "#3D5AFE", when: "now", text }]);
    }
    setDraft("");
    setPosting(false);
    toast("Comment posted");
  }

  return (
    <div
      className="modal-backdrop"
      onMouseDown={(e) => { if (e.target === e.currentTarget) onClose(); }}
      onKeyDown={trapTab}
    >
      <div className="modal" role="dialog" aria-modal="true" aria-label={shot.t} ref={boxRef}>
        <button className="modal-close" ref={closeRef} onClick={onClose} aria-label="Close">
          <X className="i" aria-hidden="true" />
        </button>

        <div className="modal-head">
          <button
            className="meta-link"
            onClick={() => onOpenProfile(shot.d)}
            aria-label={`Open ${des.n}'s profile`}
          >
            <span className="ava" style={{ background: des.hue }} aria-hidden="true">{des.init}</span>
          </button>
          <div className="modal-title">
            <h2>{shot.t}</h2>
            <p className="by">
              <button className="meta-link name-link" onClick={() => onOpenProfile(shot.d)}>{des.n}</button>
              {des.badge && <span className={`badge badge-${des.badge.toLowerCase()}`}>{des.badge}</span>}
              {" · "}{des.spec}
              {des.avail && <> <span className="avail-dot" aria-hidden="true" /> <span>Available</span></>}
            </p>
          </div>
          <div className="modal-head-actions">
            <button className={`pill-act${isFollowing ? " on" : ""}`} onClick={() => onFollow(shot.d)}>
              {isFollowing
                ? <><Check className="i" aria-hidden="true" />Following</>
                : <><Plus className="i" aria-hidden="true" />Follow</>}
            </button>
            <button
              className="pill-act"
              onClick={() => toast(`Message sent to ${des.n} — they usually reply within a day`)}
            >
              <MessageCircle className="i" aria-hidden="true" />Get in touch
            </button>
          </div>
        </div>

        <div className="modal-preview"><Thumb shot={shot} /></div>

        <div className="modal-actions">
          <button
            key={`like-${isLiked}`}
            className={`pill-act pop${isLiked ? " on-like" : ""}`}
            onClick={() => onLike(shot.id)}
            aria-pressed={isLiked}
          >
            <Heart className="i" aria-hidden="true" /><span>{fmt(likesOf(shot))}</span>
          </button>
          <button
            key={`save-${isSaved}`}
            className={`pill-act pop${isSaved ? " on" : ""}`}
            onClick={() => onSave(shot.id)}
            aria-pressed={isSaved}
          >
            <Bookmark className="i" aria-hidden="true" />Save
          </button>
          <button className="pill-act" onClick={() => toast("Link copied — share away")}>
            <Share2 className="i" aria-hidden="true" />Share
          </button>
          <span className="pill-act views" aria-label={`${fmt(shot.views)} views`}>
            <Eye className="i" aria-hidden="true" />{fmt(shot.views)}
          </span>
        </div>

        <div className="modal-body">
          <div>
            <p className="modal-desc">{shot.desc}</p>

            <p className="modal-section-label">Tags</p>
            <div className="tag-row">
              {shot.tags.map((t) => (
                <button key={t} className="chip" onClick={() => onTagSearch(t)}>{t}</button>
              ))}
            </div>

            <p className="modal-section-label">
              Comments{comments ? ` (${comments.length})` : ""}
            </p>
            <div className="comments">
              {comments === null && <p className="comments-loading">Loading comments…</p>}
              {(comments || []).map((c) => (
                <div className="comment" key={c.id}>
                  <span className="ava" style={{ background: c.hue }} aria-hidden="true">{c.init}</span>
                  <div className="c-body">
                    <b>{c.author}</b><time>{c.when}</time>
                    <p>{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <form className="comment-form" onSubmit={postComment}>
              <input
                type="text"
                required
                maxLength={500}
                placeholder="Add a comment…"
                aria-label="Add a comment"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
              <button className="btn btn-primary" type="submit" disabled={posting}>
                {posting ? "Posting…" : "Post"}
              </button>
            </form>
          </div>

          <div>
            <p className="modal-section-label">Color palette</p>
            <div className="palette-row">
              {shot.c.map((h) => (
                <button key={h} style={{ background: h }} onClick={() => copyHex(h)} aria-label={`Copy ${h}`}>
                  <small>{h}</small>
                </button>
              ))}
            </div>

            <p className="modal-section-label">Tools used</p>
            <div className="tools-row">
              {shot.tools.map((t) => <span key={t}>{t}</span>)}
            </div>

            {more.length > 0 && (
              <>
                <p className="modal-section-label">More by {des.n.split(" ")[0]}</p>
                <div className="more-by">
                  {more.map((m) => (
                    <button key={m.id} onClick={() => onOpenShot(m.id)} aria-label={`Open ${m.t}`}>
                      <Thumb shot={m} />
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
