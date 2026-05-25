/* blocks.jsx — Helpers + all sections in terminal/IDE style.
   ────────────────────────────────────────────────────────── */

/* ─── Reusable Block wrapper ─── */
function Block({ id, num, children }) {
  return (
    <section id={id} className="block" data-section={num}>
      <div className="gutter">
        <div>{num}</div>
        <div style={{ marginTop: 4, color: "var(--prompt)" }}>❯</div>
      </div>
      <div className="block-body">{children}</div>
    </section>
  );
}

function CmdLine({ cmd, flags = [], args = [], comment }) {
  return (
    <div className="cmd-line">
      <span className="user">ulaskara</span>
      <span className="at">@</span>
      <span className="host">studio</span>
      <span className="arrow">❯</span>
      <span className="cmd">{cmd}</span>
      {flags.map((f, i) => <span className="flag" key={`f${i}`}>{f}</span>)}
      {args.map((a, i) => <span className="str" key={`a${i}`}>{a}</span>)}
      {comment && <span className="c">{comment}</span>}
    </div>
  );
}

/* ─── Reveal observer ─── */
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

/* ─── useActiveSection — tracks which block is in view ─── */
function useActiveSection(ids) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    function update() {
      const yMid = window.innerHeight * 0.3;
      let best = ids[0], bestDist = Infinity;
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const dist = Math.abs(rect.top - yMid);
        if (rect.top - yMid <= 0 && dist < bestDist) {
          bestDist = dist;
          best = id;
        }
      });
      setActive(best);
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [ids.join(",")]);
  return active;
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
          const dur = 1300;
          const start = performance.now();
          function tick(now) {
            const p = Math.min(1, (now - start) / dur);
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
  return <span ref={ref}>{val}{suffix && <span className="suf">{suffix}</span>}</span>;
}

/* ─── HERO ─── */
function Hero({ t, lang }) {
  return (
    <Block id="whoami" num="01">
      <CmdLine cmd="whoami" />
      <div className="hero">
        <h1 className="ascii-name">
          <span>Ömer Ulaş </span>
          <span className="gold">Kara</span>
          <span className="em">.</span>
        </h1>

        <div className="whoami output">
          {t.lines.map((line, i) => (
            <div className="row" key={i} style={{ animationDelay: `${300 + i * 60}ms` }}>
              <span className="k">{line.k}</span>
              <span className="p">=</span>
              <span className="v">{renderValue(line.v)}</span>
            </div>
          ))}
          <div className="done">
            {t.done}<span className="cursor-blink"></span>
          </div>
        </div>

        <p className="tagline">
          {t.positioning_pre} <em>{t.positioning_em}</em>{t.positioning_post}
        </p>

        <div className="cta-row">
          <a className="cta primary" href="#projects">
            cd ./projects <span className="arrow">→</span>
          </a>
          <a className="cta" href="#contact">
            mailto: contact <span className="arrow">→</span>
          </a>
          <a className="cta" href="https://github.com/omerulaskara" target="_blank" rel="noopener">
            gh repo open <span className="arrow">↗</span>
          </a>
        </div>
      </div>
    </Block>
  );
}

/* Token-color strings: highlight inline `code`, e.g. URLs, names */
function renderValue(text) {
  if (typeof text !== "string") return text;
  // very light highlighting: anything with dots/slashes shows as string
  const parts = text.split(/(\S+\.\S+|\b\d{1,4}\b|true|false)/g);
  return parts.map((p, i) => {
    if (!p) return null;
    if (/^\d+$/.test(p)) return <span className="n" key={i}>{p}</span>;
    if (p === "true" || p === "false") return <span className="b" key={i}>{p}</span>;
    if (/\S+\.\S+/.test(p) && p.indexOf("·") < 0 && p.indexOf(" ") < 0) {
      return <span className="s" key={i}>{p}</span>;
    }
    return <span key={i}>{p}</span>;
  });
}

/* ─── STATS ─── */
function Stats({ t }) {
  return (
    <Block id="stats" num="02">
      <CmdLine cmd="stats" flags={["--portfolio"]} args={["--format=json"]} />
      <div className="stats-grid reveal">
        {t.items.map((s, i) => (
          <div className="stat-box" key={i}>
            <div className="label">{s.label}</div>
            <div className="num"><Counter target={s.num} suffix={s.suf} /></div>
            <div className="sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </Block>
  );
}

/* ─── DOMAINS ─── */
function Domains({ t }) {
  return (
    <Block id="domains" num="03">
      <CmdLine cmd="cat" args={["domains.json"]} />
      <div className="json-block reveal">
        <div className="p">{"{"}</div>
        {t.items.map((d, i) => (
          <div className="domain" key={i}>
            <span className="k">"{d.num}_{d.title_pre.toLowerCase().replace(/\s+/g, "_")}"</span>
            <span className="p">:</span>
            <div>
              <div>
                <span className="p">{"{"}</span>
                <div style={{ paddingLeft: 16 }}>
                  <div>
                    <span className="k">"title"</span><span className="p">: </span>
                    <span className="s">"{d.title_pre} {d.title_em}"</span><span className="p">,</span>
                  </div>
                  <div>
                    <span className="k">"category"</span><span className="p">: </span>
                    <span className="s">"{d.sub}"</span><span className="p">,</span>
                  </div>
                  <div className="body">{d.body}</div>
                  <div>
                    <span className="k">"stack"</span><span className="p">: [</span>
                    <div className="tags">
                      {d.tags.map((tag, j) => <span key={j}>"{tag}"{j < d.tags.length - 1 ? "," : ""}</span>)}
                    </div>
                    <span className="p">]</span>
                  </div>
                </div>
                <span className="p">{"}"}{i < t.items.length - 1 ? "," : ""}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="p">{"}"}</div>
      </div>
    </Block>
  );
}

/* ─── STACK ─── */
function Stack({ t }) {
  return (
    <Block id="stack" num="05">
      <CmdLine cmd="cat" args={["package.json"]} comment={'| jq ".dependencies"'} />
      <div className="pkg-block reveal">
        <div className="p">{"{"}</div>
        {t.rows.map((row, i) => (
          <div className="grp" key={i}>
            <div className="head">
              <span className="ord">{row.num}</span>
              <span className="name">"{row.cat.toLowerCase().replace(/[\s/]+/g, "_")}"</span>
              <span className="p">: [</span>
              <span className="desc">{row.cat}</span>
            </div>
            <div className="items">
              {row.items.map((item, j) => (
                <span key={j}>"{item[0]}"{item[1] ? ` (${item[1]})` : ""}{j < row.items.length - 1 ? "," : ""}</span>
              ))}
            </div>
            <span className="p" style={{ paddingLeft: 24 }}>]{i < t.rows.length - 1 ? "," : ""}</span>
          </div>
        ))}
        <div className="p">{"}"}</div>
      </div>
    </Block>
  );
}

/* ─── ARCHITECTURE — ASCII tree ─── */
function Architecture({ t }) {
  const layers = t.layers;
  return (
    <Block id="arch" num="06">
      <CmdLine cmd="tree" args={["architecture/"]} flags={["-L 2"]} />
      <div className="arch-tree reveal">
        <pre>
{`architecture/
│
`}{layers.map((layer, i) => {
  const last = i === layers.length - 1;
  const branch = last ? "└──" : "├──";
  const childPrefix = last ? "    " : "│   ";
  const items = layer.items;
  return (
    <React.Fragment key={i}>
      <span className="pipe">{branch} </span><span className="layer-label">{layer.label}/</span>{"\n"}
      {items.map((it, j) => {
        const isLast = j === items.length - 1;
        const subBranch = isLast ? "└──" : "├──";
        return (
          <React.Fragment key={j}>
            <span className="pipe">{childPrefix}{subBranch} </span>
            <span className="layer-item">{it}</span>{"\n"}
          </React.Fragment>
        );
      })}
      {!last && <span className="pipe">│{"\n"}</span>}
    </React.Fragment>
  );
})}
        </pre>
      </div>
    </Block>
  );
}

/* ─── SECURITY — YAML ─── */
function Security({ t }) {
  return (
    <Block id="security" num="07">
      <CmdLine cmd="cat" args={["security.config.yaml"]} />
      <div className="yaml-block reveal">
        <div style={{ marginBottom: 10, color: "var(--comment)" }}># {t.lede}</div>
        {t.items.map((s, i) => (
          <div className="entry" key={i}>
            <span className="dash">-</span>
            <div>
              <span className="title">{s.title.toLowerCase().replace(/[\s+/]+/g, "_")}</span>
              <span className="p">: </span>
              <span className="s">"{s.title}"</span>
              <div className="desc">{s.body}</div>
            </div>
          </div>
        ))}
      </div>
    </Block>
  );
}

/* ─── REPOS — gh repo list output ─── */
function Repos({ t }) {
  return (
    <Block id="repos" num="08">
      <CmdLine cmd="gh" flags={["repo", "list", "omerulaskara"]} args={["--limit=20"]} />
      {t.clusters.map((cluster, ci) => (
        <div className="cluster reveal" key={ci}>
          <div className="cluster-head">
            <span className="name"># {cluster.name}</span>
            <span className="count">{cluster.count}</span>
          </div>
          {cluster.repos.map((r, ri) => (
            <React.Fragment key={ri}>
              <div className="repo-row">
                <span className="repo-name">{r.name}</span>
                <span className="repo-desc">{r.desc}</span>
                <span className={`repo-vis ${r.priv === "public" ? "pub" : "priv"}`}>
                  {r.priv === "public" ? "● public" : "○ private"}
                </span>
                <div className="repo-stack">
                  {r.stack.map((s, si) => <span key={si}>{s}</span>)}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      ))}
    </Block>
  );
}

/* ─── CONTACT — vCard ─── */
function Contact({ t, lang }) {
  return (
    <Block id="contact" num="09">
      <CmdLine cmd="cat" args={["contact.vcf"]} />
      <div className="vcard reveal">
        <div className="portrait">
          <image-slot
            id="terminal-portrait"
            shape="rect"
            placeholder={lang === "tr" ? "Foto bırak" : "Drop photo"}
          ></image-slot>
        </div>
        <div className="vrow">
          <span className="k">FN</span><span className="p">:</span>
          <span className="v">Ömer Ulaş Kara</span>
        </div>
        <div className="vrow">
          <span className="k">TITLE</span><span className="p">:</span>
          <span className="v">Senior Full-Stack Developer</span>
        </div>
        <div className="vrow">
          <span className="k">ADR</span><span className="p">:</span>
          <span className="v">İstanbul, Türkiye</span>
        </div>
        {t.channels.map((c, i) => (
          <div className="vrow" key={i}>
            <span className="k">{c.label.toUpperCase()}</span><span className="p">:</span>
            <a className="value" href={c.href} target="_blank" rel="noopener">{c.value}</a>
          </div>
        ))}
        <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px dashed var(--line)", color: "var(--comment)", fontSize: 12 }}>
          # {t.lede}
        </div>
        <div style={{ marginTop: 18, color: "var(--comment)", fontSize: 11 }}>
          {t.footer_left} · {t.footer_right}
        </div>
      </div>
      <div className="cmd-line" style={{ marginTop: 32 }}>
        <span className="user">ulaskara</span>
        <span className="at">@</span>
        <span className="host">studio</span>
        <span className="arrow">❯</span>
        <span className="c">{lang === "tr" ? "# end of session — komut bekleniyor" : "# end of session — awaiting command"}</span>
        <span className="cursor-blink"></span>
      </div>
    </Block>
  );
}

Object.assign(window, {
  Block, CmdLine, useReveal, useActiveSection, Counter,
  Hero, Stats, Domains, Stack, Architecture, Security, Repos, Contact,
});
