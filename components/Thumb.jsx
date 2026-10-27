/* Shot artwork: seeded mock images (same seed = same image for a shot
   everywhere it appears), tinted toward the shot's palette, with the
   palette gradient as loading/fallback background. */

export default function Thumb({ shot, className = "" }) {
  const [c1, c2] = shot.c;
  return (
    <div className={`th ${className}`} style={{ background: `linear-gradient(135deg, ${c2}, ${c1})` }}>
      <img
        className="th-img"
        src={`https://picsum.photos/seed/forma-${shot.id}/1000/750`}
        alt=""
        loading="lazy"
      />
      <span
        className="th-tint"
        style={{ background: `linear-gradient(135deg, ${c2}, transparent 70%)` }}
        aria-hidden="true"
      />
    </div>
  );
}
