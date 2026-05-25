/* chrome.jsx — Title bar (traffic lights + path + lang toggle),
   Tab bar (sections as files), Status bar, Loader, Code-rain bg.
   ────────────────────────────────────────────────────────── */

function Titlebar({ lang, setLang, current }) {
  return (
    <div className="titlebar">
      <div className="lights">
        <span className="dot"></span>
        <span className="dot"></span>
        <span className="dot"></span>
      </div>
      <div className="titlebar-path">
        <span>ulaskara@studio</span>
        <span className="sep">:</span>
        <span><b>~/portfolio</b></span>
        <span className="sep">·</span>
        <span className="dim" style={{ color: "var(--fg-3)" }}>{current}</span>
      </div>
      <div className="titlebar-actions">
        <div className="lang-toggle">
          <button className={lang === "tr" ? "active" : ""} onClick={() => setLang("tr")}>TR</button>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </div>
  );
}

function Tabs({ items, active, onPick }) {
  return (
    <div className="tabs" role="tablist">
      {items.map((it, i) => (
        <a
          key={i}
          className={`tab ${active === it.id ? "active" : ""}`}
          href={`#${it.id}`}
          onClick={() => onPick && onPick(it.id)}
        >
          <span className="num">{String(i + 1).padStart(2, "0")}</span>
          <span>{it.name}</span>
          <span className="ext">.{it.ext}</span>
        </a>
      ))}
    </div>
  );
}

function Statusbar({ active, lang }) {
  return (
    <div className="statusbar">
      <span className="pill cyan">⎇ main</span>
      <span className="hide-sm">UTF-8</span>
      <span className="hide-sm">LF</span>
      <span className="pill gold">17 repos</span>
      <span className="pill green hide-sm"><span className="live-dot"></span> Sprint 19</span>
      <span className="right">
        <span className="hide-sm">{active}</span>
        <span>İstanbul · {lang.toUpperCase()}</span>
        <span className="hide-sm dim">v2.0</span>
      </span>
    </div>
  );
}

function Loader() {
  const [gone, setGone] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setGone(true), 850);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`loader ${gone ? "gone" : ""}`}>
      <div className="glyph">ulaskara@studio</div>
      <div className="bar"></div>
      <div className="label">initializing portfolio...</div>
    </div>
  );
}

/* ─── Code-rain background — sparse, subtle ─── */
function Coderain() {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const cvs = ref.current;
    if (!cvs) return;
    const ctx = cvs.getContext("2d");
    let DPR = Math.min(window.devicePixelRatio || 1, 2);
    let W, H, cols, drops;
    const charset = "01アイウエオカキクケコサシスセソタチツテト∑λπ{}[]<>/=*+-";
    const fontSize = 14;

    function resize() {
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      cvs.width = W * DPR;
      cvs.height = H * DPR;
      cvs.style.width = W + "px";
      cvs.style.height = H + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      cols = Math.floor(W / fontSize / 2.4);  // sparser
      drops = Array.from({ length: cols }).map(() => Math.random() * -H);
    }
    resize();
    window.addEventListener("resize", resize);

    let raf;
    function frame() {
      ctx.fillStyle = "rgba(13, 13, 20, 0.18)";
      ctx.fillRect(0, 0, W, H);
      ctx.font = `${fontSize}px JetBrains Mono, monospace`;
      ctx.textBaseline = "top";
      for (let i = 0; i < cols; i++) {
        const x = i * fontSize * 2.4;
        const y = drops[i];
        const ch = charset[Math.floor(Math.random() * charset.length)];
        // Head bright, tail dim
        ctx.fillStyle = "rgba(98, 196, 255, 0.55)";
        ctx.fillText(ch, x, y);
        ctx.fillStyle = "rgba(126, 217, 154, 0.16)";
        ctx.fillText(charset[Math.floor(Math.random() * charset.length)], x, y - fontSize);
        drops[i] += fontSize * 0.7;
        if (drops[i] > H + Math.random() * 200) drops[i] = -Math.random() * 200;
      }
      raf = requestAnimationFrame(frame);
    }
    frame();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas ref={ref} className="coderain" aria-hidden="true"></canvas>;
}

Object.assign(window, { Titlebar, Tabs, Statusbar, Loader, Coderain });
