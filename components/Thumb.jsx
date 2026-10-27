/* Procedural CSS-art thumbnails — no external images. */

export default function Thumb({ shot, className = "" }) {
  const [c1, c2, c3, c4] = shot.c;
  const bg = { background: `linear-gradient(135deg, ${c2}, ${c1})` };
  const seed = shot.id;

  switch (shot.art) {
    case "dash": {
      const hs = [62, 38, 80, 52, 70, 30].map((h) => ((h + seed * 7) % 70) + 22);
      return (
        <div className={`th ${className}`} style={bg}>
          <div className="a-win">
            <div className="a-dots"><i /><i /><i /></div>
            <div className="a-side">
              <i /><i style={{ width: "55%" }} /><i style={{ width: "70%" }} /><i style={{ width: "45%" }} />
            </div>
            <div className="a-bars">
              {hs.map((h, i) => (
                <b key={i} style={{ height: `${h}%`, background: i === 3 ? c4 : c3 }} />
              ))}
            </div>
          </div>
        </div>
      );
    }
    case "dashlt": {
      const hs = [48, 72, 36, 60, 84, 44].map((h) => ((h + seed * 11) % 64) + 24);
      return (
        <div className={`th ${className}`} style={bg}>
          <div className="a-win lt">
            <div className="a-dots"><i /><i /><i /></div>
            <div className="a-side">
              <i /><i style={{ width: "60%" }} /><i style={{ width: "72%" }} />
            </div>
            <div className="a-bars">
              {hs.map((h, i) => (
                <b key={i} style={{ height: `${h}%`, background: i === 2 ? c1 : c2, opacity: i === 2 ? 1 : 0.82 }} />
              ))}
            </div>
          </div>
        </div>
      );
    }
    case "mobile":
      return (
        <div className={`th ${className}`} style={bg}>
          <div className="ci" style={{ width: "46%", aspectRatio: "1", background: c3, opacity: 0.3, left: "-12%", top: "-14%" }} />
          <div className="ci" style={{ width: "30%", aspectRatio: "1", background: c4, opacity: 0.5, right: "-6%", bottom: "18%" }} />
          <div className="a-ph">
            <div className="notch" />
            <div className="blk" style={{ height: "34%", background: `linear-gradient(135deg, ${c1}, ${c4})` }} />
            <div className="blk" style={{ height: "9%", background: c3 }} />
            <div className="blk" style={{ height: "9%", background: c3, width: "70%" }} />
            <div className="blk" style={{ height: "14%", background: c1, width: "52%", borderRadius: 999 }} />
          </div>
        </div>
      );
    case "brand":
      return (
        <div className={`th ${className}`} style={bg}>
          <div className="ci" style={{ width: "58%", aspectRatio: "1", background: c3, opacity: 0.22, right: "-14%", top: "-18%" }} />
          <div className="sq" style={{ width: "22%", aspectRatio: "1", background: c4, borderRadius: 8, left: "10%", bottom: "12%", transform: "rotate(-8deg)" }} />
          <div className="a-letter">{shot.t.charAt(0)}</div>
        </div>
      );
    case "illo":
      return (
        <div className={`th ${className}`} style={bg}>
          <div className="ci" style={{ width: "72%", aspectRatio: "1", background: c3, opacity: 0.85, left: "-16%", bottom: "-28%", borderRadius: "46% 54% 52% 48%/58% 44% 56% 42%" }} />
          <div className="ci" style={{ width: "48%", aspectRatio: "1", background: c4, opacity: 0.9, right: "-8%", top: "-14%", borderRadius: "52% 48% 44% 56%/48% 56% 44% 52%" }} />
          <div className="ci" style={{ width: "26%", aspectRatio: "1", background: c1, right: "24%", bottom: "16%", borderRadius: "50% 50% 46% 54%/54% 46% 54% 46%" }} />
          <div className="ln" style={{ width: "30%", background: c3, left: "14%", top: "22%", transform: "rotate(-18deg)" }} />
        </div>
      );
    case "typo":
      return (
        <div className={`th ${className}`} style={bg}>
          <div className="a-typo">
            <div className="big">Aa</div>
            <div className="rule" />
            <span className="ln" style={{ width: "82%" }} />
            <span className="ln" style={{ width: "64%" }} />
            <span className="ln" style={{ width: "74%", background: c4 }} />
          </div>
        </div>
      );
    case "orb":
      return (
        <div className={`th ${className}`} style={bg}>
          <div className="a-orb" style={{ width: "52%", aspectRatio: "1", left: "10%", top: "14%", background: `radial-gradient(circle at 32% 28%, ${c3}, ${c1} 68%)` }} />
          <div className="a-orb" style={{ width: "30%", aspectRatio: "1", right: "12%", top: "8%", background: `radial-gradient(circle at 32% 28%, #fff, ${c4} 70%)` }} />
          <div className="a-orb" style={{ width: "24%", aspectRatio: "1", right: "26%", bottom: "10%", background: `radial-gradient(circle at 32% 28%, ${c3}, ${c2} 72%)`, opacity: 0.9 }} />
          <div className="ln" style={{ left: "8%", bottom: "14%", width: "34%", background: c3, opacity: 0.5 }} />
        </div>
      );
    case "motion":
      return (
        <div className={`th ${className}`} style={bg}>
          <div className="a-arc" style={{ width: "110%", aspectRatio: "1", left: "-30%", top: "18%", borderWidth: 14, borderTopColor: c3 }} />
          <div className="a-arc" style={{ width: "84%", aspectRatio: "1", left: "-14%", top: "34%", borderWidth: 10, borderTopColor: c4 }} />
          <div className="a-arc" style={{ width: "60%", aspectRatio: "1", left: "2%", top: "50%", borderWidth: 7, borderTopColor: "#fff", opacity: 0.7 }} />
          <div className="ci" style={{ width: "13%", aspectRatio: "1", background: c4, right: "14%", top: "16%" }} />
        </div>
      );
    case "product":
      return (
        <div className={`th ${className}`} style={bg}>
          <div className="ci" style={{ width: "40%", aspectRatio: "1", background: c4, opacity: 0.4, right: "-8%", top: "-10%" }} />
          <div className="a-card" style={{ left: "12%", top: "16%", width: "56%" }}>
            <span className="ln" style={{ width: "58%", background: c1, height: 9 }} />
            <span className="ln" style={{ width: "84%", background: c3 }} />
            <span className="ln" style={{ width: "70%", background: c3 }} />
          </div>
          <div className="a-card" style={{ right: "8%", bottom: "12%", width: "34%", display: "flex", alignItems: "center", justifyContent: "center", padding: "6%" }}>
            <span className="a-tgl" style={{ background: c1 }} />
          </div>
        </div>
      );
    default:
      return <div className={`th ${className}`} style={bg} />;
  }
}
