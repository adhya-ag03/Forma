"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";

export default function ArticleModal({ article, onClose }) {
  const closeRef = useRef(null);
  const boxRef = useRef(null);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  function trapTab(e) {
    if (e.key !== "Tab") return;
    const focusables = boxRef.current.querySelectorAll("button");
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
      <div className="modal article" role="dialog" aria-modal="true" aria-label={article.title} ref={boxRef}>
        <button className="modal-close" ref={closeRef} onClick={onClose} aria-label="Close">
          <X className="i" aria-hidden="true" />
        </button>
        <div className="article-cover" style={{ background: article.grad }}>
          <p className="mono">The Forma Journal</p>
          <h2>{article.title}</h2>
          <p className="article-meta mono">{article.meta}</p>
        </div>
        <div className="article-body">
          <p className="article-lede">{article.blurb}</p>
          <p>{article.paras[0]}</p>
          <blockquote className="pull">{article.quote}</blockquote>
          <p>{article.paras[1]}</p>
          <p>{article.paras[2]}</p>
          <p className="article-sig mono">— The Forma editors</p>
        </div>
      </div>
    </div>
  );
}
