/* sections.jsx — Stats, Marquee, Domains, Stack, Architecture,
   Security, Contact. (Projects + Repos in their own files.)
   ────────────────────────────────────────────────────────── */

/* ─── useReveal: IntersectionObserver-driven .in toggle ─── */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-fade, .split-text:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ─── Animated counter ─── */
function Counter({ target, suffix = "" }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let started = false;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started) {
          started = true;
          const dur = 1600;
          const start = performance.now();
          function tick(now) {
            const p = Math.min(1, (now - start) / dur);
            // easeOutExpo
            const e2 = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
            setVal(Math.round(target * e2));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [target]);
  return (
    <span ref={ref}>
      {val}
      {suffix && <span className="suffix">{suffix}</span>}
    </span>
  );
}

/* ─── Stats ─── */
function Stats({ t }) {
  return (
    <section id="stats" className="stats">
      <div className="container">
        <div className="stats-grid">
          {t.items.map((s, i) => (
            <div className="stat reveal" key={i} style={{ "--reveal-delay": `${i * 100}ms` }}>
              <div className="stat-num"><Counter target={s.num} suffix={s.suf} /></div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Marquee ─── */
function Marquee({ items }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((w, i) => (
          <React.Fragment key={i}>
            <span>{w}</span>
            <span className="star">✦</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

/* ─── Domains ─── */
function Domains({ t }) {
  return (
    <section id="domains" className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">{t.eyebrow}</div>
            <h2 className="section-title reveal">
              {t.title_pre} <span className="italic">{t.title_em}</span>
            </h2>
          </div>
          <p className="section-lede reveal" style={{ "--reveal-delay": "200ms" }}>{t.lede}</p>
        </div>

        <div className="domains-grid">
          {t.items.map((d, i) => (
            <div className="domain reveal" key={i} style={{ "--reveal-delay": `${i * 100}ms` }}>
              <div className="domain-glyph">{d.glyph}</div>
              <div className="domain-num mono">— {d.num}</div>
              <h3 className="domain-title">
                {d.title_pre} <span className="italic">{d.title_em}</span>
              </h3>
              <div className="domain-sub">{d.sub}</div>
              <p className="domain-body">{d.body}</p>
              <div className="domain-tags">
                {d.tags.map((tag, j) => <span className="tag" key={j}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Stack matrix ─── */
function Stack({ t }) {
  return (
    <section id="stack" className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">{t.eyebrow}</div>
            <h2 className="section-title reveal">
              {t.title_pre} <span className="italic">{t.title_em}</span>
            </h2>
          </div>
          <p className="section-lede reveal" style={{ "--reveal-delay": "200ms" }}>{t.lede}</p>
        </div>

        <div className="reveal">
          {t.rows.map((row, i) => (
            <div className="stack-row" key={i}>
              <div className="stack-cat">
                <span className="num">— {row.num}</span>
                {row.cat}
              </div>
              <div className="stack-items">
                {row.items.map((item, j) => (
                  <div className="stack-pill" key={j} style={{ animationDelay: `${j * 30}ms` }}>
                    {item[0]}
                    {item[1] && <span className="lvl">{item[1]}</span>}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Architecture ─── */
function Architecture({ t }) {
  return (
    <section id="arch" className="section">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">{t.eyebrow}</div>
            <h2 className="section-title reveal">
              {t.title_pre} <span className="italic">{t.title_em}</span>
            </h2>
          </div>
          <p className="section-lede reveal" style={{ "--reveal-delay": "200ms" }}>{t.lede}</p>
        </div>

        <div className="arch-canvas reveal">
          <div className="arch-layers">
            {t.layers.map((layer, i) => (
              <React.Fragment key={i}>
                <div className="arch-layer" style={{ "--reveal-delay": `${i * 80}ms` }}>
                  <div className="arch-layer-label">{layer.label}</div>
                  <div className="arch-layer-items">
                    {layer.items.map((it, j) => <span key={j}>{it}</span>)}
                  </div>
                </div>
                {i < t.layers.length - 1 && <div className="arch-down">↓</div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Security & Ops ─── */
function Security({ t }) {
  return (
    <section id="security" className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-eyebrow">{t.eyebrow}</div>
            <h2 className="section-title reveal">
              {t.title_pre} <span className="italic">{t.title_em}</span>
            </h2>
          </div>
          <p className="section-lede reveal" style={{ "--reveal-delay": "200ms" }}>{t.lede}</p>
        </div>

        <div className="sec-grid reveal">
          {t.items.map((s, i) => (
            <div className="sec-cell" key={i}>
              <div className="sec-cell-icon">{s.icon}</div>
              <div className="sec-cell-title">{s.title}</div>
              <div className="sec-cell-body">{s.body}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ─── */
function Contact({ t }) {
  return (
    <section id="contact" className="contact">
      <div className="contact-bg"></div>
      <div className="container contact-inner">
        <div className="contact-eyebrow">{t.eyebrow}</div>

        <div className="portrait-frame reveal">
          {/* image-slot is a custom element — user drops their photo */}
          <image-slot
            id="portrait"
            shape="circle"
            placeholder={window.__LANG === "tr" ? "Profil fotoğrafı bırak" : "Drop portrait"}
          ></image-slot>
        </div>

        <h2 className="contact-title reveal">
          {t.title_pre} <span className="italic">{t.title_em}</span>
        </h2>
        <p className="contact-lede reveal" style={{ "--reveal-delay": "150ms" }}>{t.lede}</p>

        <div className="contact-channels reveal" style={{ "--reveal-delay": "300ms" }}>
          {t.channels.map((c, i) => (
            <a className="channel" key={i} href={c.href} target="_blank" rel="noopener">
              <span className="label">{c.label}</span>
              <span className="value">{c.value}</span>
            </a>
          ))}
        </div>

        <div className="footer container" style={{ paddingLeft: 0, paddingRight: 0, marginTop: 80, width: "100%" }}>
          <span>{t.footer_left}</span>
          <span>{t.footer_right}</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, {
  useReveal, Counter, Stats, Marquee, Domains, Stack, Architecture, Security, Contact,
});
