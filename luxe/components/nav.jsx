/* nav.jsx — Fixed top nav with section anchors + TR/EN toggle
   ────────────────────────────────────────────────────────── */

function Nav({ t, lang, setLang }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#domains",  num: "01", label: t.domains },
    { href: "#projects", num: "02", label: t.projects },
    { href: "#stack",    num: "03", label: t.stack },
    { href: "#arch",     num: "04", label: t.arch },
    { href: "#security", num: "05", label: t.security },
    { href: "#repos",    num: "06", label: t.repos },
    { href: "#contact",  num: "07", label: t.contact },
  ];

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#hero" className="nav-logo">
          <span className="dot"></span>
          ÖMER ULAŞ KARA
        </a>
        <div className="nav-links">
          {links.map((l, i) => (
            <a key={i} href={l.href}>
              <span className="num">{l.num}</span>{l.label}
            </a>
          ))}
        </div>
        <div className="lang-toggle">
          <button className={lang === "tr" ? "active" : ""} onClick={() => setLang("tr")}>TR</button>
          <button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button>
        </div>
      </div>
    </nav>
  );
}

/* ─── Magnetic cursor ─── */
function CursorRing() {
  const ringRef = React.useRef(null);
  React.useEffect(() => {
    const ring = ringRef.current;
    if (!ring) return;
    let x = 0, y = 0, tx = 0, ty = 0, raf;
    function onMove(e) { tx = e.clientX; ty = e.clientY; }
    function onHover(e) {
      const el = e.target.closest("a, button, .stack-pill, .repo, .domain, .sec-cell, .channel, image-slot");
      if (el) ring.classList.add("hover");
      else ring.classList.remove("hover");
    }
    function loop() {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      ring.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(loop);
    }
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onHover);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onHover);
    };
  }, []);
  return <div className="cursor-ring" ref={ringRef}></div>;
}

/* ─── Loader ─── */
function Loader() {
  const [gone, setGone] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setGone(true), 1100);
    return () => clearTimeout(t);
  }, []);
  return (
    <div className={`loader ${gone ? "gone" : ""}`}>
      <div className="loader-mark">Ö.</div>
      <div className="loader-bar"></div>
      <div className="loader-text">Loading portfolio</div>
    </div>
  );
}

Object.assign(window, { Nav, CursorRing, Loader });
