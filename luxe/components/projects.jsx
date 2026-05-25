/* projects.jsx — Featured projects, each with a custom mock visual.
   ────────────────────────────────────────────────────────── */

/* ─── Per-project animated SVG visuals ──────────────────── */

function VisualCallCenter() {
  // Wallboard mock with animated stat bars + live waveform
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1100);
    return () => clearInterval(id);
  }, []);

  const queue = 6 + (tick % 4);
  const active = 18 + ((tick * 3) % 7);
  const sla = 92 + ((tick * 2) % 7);

  // Live agent rows
  const agents = [
    { name: "Mert K.",    state: "talking", t: "04:21" },
    { name: "Selin A.",   state: "wrap",    t: "00:38" },
    { name: "Burcu Y.",   state: "ready",   t: "—"     },
    { name: "Ali D.",     state: "talking", t: "12:09" },
    { name: "Ece T.",     state: "break",   t: "02:47" },
  ];
  const stateColor = { talking: "var(--green)", wrap: "var(--accent)", ready: "var(--accent-3)", break: "var(--fg-3)" };

  return (
    <div className="project-visual">
      <div className="pv-chrome">
        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
        <span className="url">https://ccp.stroke-app.com/wallboard</span>
      </div>
      <div className="pv-body" style={{ padding: 18, fontFamily: "var(--font-mono)", fontSize: 11 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 14 }}>
          {[
            { label: "QUEUE",   v: queue,    c: "var(--accent-3)" },
            { label: "ACTIVE",  v: active,   c: "var(--green)" },
            { label: "SLA %",   v: sla,      c: "var(--accent)" },
          ].map((s, i) => (
            <div key={i} style={{ padding: "10px 12px", border: "1px solid var(--line)", borderRadius: 8, background: "rgba(0,0,0,0.3)" }}>
              <div style={{ color: "var(--fg-3)", fontSize: 9, letterSpacing: ".12em", marginBottom: 4 }}>{s.label}</div>
              <div style={{ color: s.c, fontFamily: "var(--font-display)", fontSize: 28, lineHeight: 1, fontStyle: "italic" }}>{s.v}</div>
            </div>
          ))}
        </div>
        <div style={{ border: "1px solid var(--line)", borderRadius: 8, padding: 8 }}>
          {agents.map((a, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "12px 1fr 60px 50px", gap: 10, padding: "6px 8px", alignItems: "center", borderBottom: i < agents.length - 1 ? "1px solid var(--line)" : "none" }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: stateColor[a.state], boxShadow: a.state === "talking" ? `0 0 8px ${stateColor[a.state]}` : "none" }} />
              <span style={{ color: "var(--fg-1)" }}>{a.name}</span>
              <span style={{ color: stateColor[a.state], textTransform: "uppercase", fontSize: 9, letterSpacing: ".1em" }}>{a.state}</span>
              <span style={{ color: "var(--fg-3)", textAlign: "right" }}>{a.t}</span>
            </div>
          ))}
        </div>
        {/* Waveform */}
        <div style={{ marginTop: 12, display: "flex", alignItems: "center", gap: 1, height: 28 }}>
          {Array.from({ length: 80 }).map((_, i) => {
            const h = 4 + Math.abs(Math.sin((tick + i) * 0.5) * 18) + Math.random() * 6;
            return <span key={i} style={{ width: 2, height: h, background: "var(--accent)", opacity: 0.55, borderRadius: 1 }} />;
          })}
        </div>
      </div>
    </div>
  );
}

function VisualStroke() {
  // Animated SVG that "draws" itself like an event-sourced stroke replay
  const pathRef = React.useRef(null);
  const [progress, setProgress] = React.useState(0);
  React.useEffect(() => {
    let raf, start = performance.now();
    function loop(now) {
      const t = ((now - start) / 4200) % 1;
      setProgress(t);
      raf = requestAnimationFrame(loop);
    }
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Generate a flowing curve
  const points = React.useMemo(() => {
    const arr = [];
    for (let i = 0; i <= 200; i++) {
      const x = 40 + (i / 200) * 460;
      const y = 160 + Math.sin(i * 0.12) * 50 + Math.cos(i * 0.05) * 30;
      arr.push([x, y]);
    }
    return arr;
  }, []);

  const visible = Math.floor(progress * points.length);
  const path = points.slice(0, visible).map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ");
  const head = points[visible] || points[points.length - 1];

  return (
    <div className="project-visual">
      <div className="pv-chrome">
        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
        <span className="url">https://stroke-app.com — drawing replay</span>
      </div>
      <div className="pv-body" style={{ background: "linear-gradient(135deg, #0e0e15 0%, #1a1024 100%)" }}>
        <svg viewBox="0 0 540 340" style={{ width: "100%", height: "100%" }}>
          <defs>
            <linearGradient id="strokeGrad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#7c5cff" />
              <stop offset="50%" stopColor="#c9a45c" />
              <stop offset="100%" stopColor="#00d4ff" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="4" result="b" />
              <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          {/* Faint guide */}
          <path
            d={points.map((p, i) => (i === 0 ? `M${p[0]},${p[1]}` : `L${p[0]},${p[1]}`)).join(" ")}
            stroke="rgba(245, 241, 232, 0.06)"
            strokeWidth="2"
            fill="none"
          />
          <path d={path} stroke="url(#strokeGrad)" strokeWidth="3.5" fill="none" strokeLinecap="round" filter="url(#glow)" />
          {head && (
            <circle cx={head[0]} cy={head[1]} r="6" fill="#c9a45c" filter="url(#glow)" />
          )}
          {/* Event ticks */}
          {points.filter((_, i) => i % 12 === 0 && i < visible).map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r="1.5" fill="#f5f1e8" opacity="0.4" />
          ))}
          {/* Labels */}
          <text x="40" y="40" fontFamily="var(--font-mono)" fontSize="10" fill="#c9a45c" letterSpacing="2">EVENT</text>
          <text x="40" y="54" fontFamily="var(--font-mono)" fontSize="10" fill="rgba(245,241,232,0.5)">{`${visible} / ${points.length} strokes replayed`}</text>
          <text x="500" y="40" fontFamily="var(--font-mono)" fontSize="10" fill="#c9a45c" letterSpacing="2" textAnchor="end">SKIA</text>
          <text x="500" y="54" fontFamily="var(--font-mono)" fontSize="10" fill="rgba(245,241,232,0.5)" textAnchor="end">{`pressure ${(0.4 + Math.sin(progress * 8) * 0.3).toFixed(2)}`}</text>
        </svg>
      </div>
    </div>
  );
}

function VisualIcraCeza() {
  // 14-step pipeline animation
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 16), 600);
    return () => clearInterval(id);
  }, []);
  const steps = [
    "kisiSorgula", "kurumSorgula", "icra_birimler", "dosya_tevzi_et", "evrak_yukle",
    "vekaletname", "dava_acilis", "harc_hesapla", "barobirlik_pay", "ode",
    "evrak_gonder", "tamamla", "PTT_barkod", "mail_bildirim",
  ];
  return (
    <div className="project-visual">
      <div className="pv-chrome">
        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
        <span className="url">icra-ceza-otomasyon — pipeline view</span>
      </div>
      <div className="pv-body" style={{ padding: "20px 22px", fontFamily: "var(--font-mono)", fontSize: 11, overflow: "auto" }}>
        <div style={{ display: "flex", gap: 24, marginBottom: 14, color: "var(--fg-3)", fontSize: 10, letterSpacing: ".14em" }}>
          <span>PROFILE_A</span>
          <span>PROFILE_B</span>
          <span>PROFILE_C</span>
          <span style={{ marginLeft: "auto", color: "var(--accent)" }}>3× THROUGHPUT</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {steps.map((s, i) => {
            const active = i === step % steps.length;
            const done = i < step % steps.length;
            return (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "20px 1fr 80px",
                gap: 10,
                alignItems: "center",
                padding: "4px 0",
                color: active ? "var(--accent)" : done ? "var(--fg-1)" : "var(--fg-3)",
                opacity: done && !active ? 0.7 : 1,
                transition: "color 0.3s",
              }}>
                <span style={{ color: "var(--fg-3)" }}>{String(i + 1).padStart(2, "0")}</span>
                <span>POST /{s}.ajx</span>
                <span style={{ textAlign: "right", color: active ? "var(--accent-3)" : done ? "var(--green)" : "var(--fg-3)", fontSize: 9 }}>
                  {active ? "200 ●●●" : done ? "200 OK" : "—"}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function VisualIctihat() {
  // RAG retrieval visualization — hybrid index → top-k → citation
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % 4), 1400);
    return () => clearInterval(id);
  }, []);

  const results = [
    { id: "2023/4421", score: 0.94, esas: "Esas 2023/4421" },
    { id: "2022/1180", score: 0.89, esas: "Esas 2022/1180" },
    { id: "2024/0096", score: 0.86, esas: "Esas 2024/0096" },
    { id: "2021/8772", score: 0.81, esas: "Esas 2021/8772" },
  ];

  return (
    <div className="project-visual">
      <div className="pv-chrome">
        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
        <span className="url">ictihat-motoru — hybrid retrieval</span>
      </div>
      <div className="pv-body" style={{ padding: 18, fontFamily: "var(--font-mono)", fontSize: 11 }}>
        <div style={{ padding: 12, border: "1px solid var(--line)", borderRadius: 6, marginBottom: 12, background: "rgba(0,0,0,0.25)" }}>
          <div style={{ color: "var(--fg-3)", fontSize: 9, letterSpacing: ".12em", marginBottom: 5 }}>QUERY</div>
          <div style={{ color: "var(--fg)", lineHeight: 1.5 }}>"Tüketici sözleşmesinde haksız şart denetimi"</div>
        </div>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          <div style={{ flex: 1, padding: 10, border: `1px solid ${phase >= 1 ? "var(--accent)" : "var(--line)"}`, borderRadius: 6, transition: "all 0.4s" }}>
            <div style={{ fontSize: 9, color: "var(--fg-3)", letterSpacing: ".1em" }}>BM25</div>
            <div style={{ color: phase >= 1 ? "var(--accent)" : "var(--fg-3)", fontFamily: "var(--font-display)", fontSize: 22, fontStyle: "italic" }}>top-50</div>
          </div>
          <div style={{ flex: 1, padding: 10, border: `1px solid ${phase >= 2 ? "var(--accent-2)" : "var(--line)"}`, borderRadius: 6, transition: "all 0.4s" }}>
            <div style={{ fontSize: 9, color: "var(--fg-3)", letterSpacing: ".1em" }}>VECTOR</div>
            <div style={{ color: phase >= 2 ? "var(--accent-2)" : "var(--fg-3)", fontFamily: "var(--font-display)", fontSize: 22, fontStyle: "italic" }}>top-50</div>
          </div>
          <div style={{ flex: 1, padding: 10, border: `1px solid ${phase >= 3 ? "var(--accent-3)" : "var(--line)"}`, borderRadius: 6, transition: "all 0.4s" }}>
            <div style={{ fontSize: 9, color: "var(--fg-3)", letterSpacing: ".1em" }}>FUSED</div>
            <div style={{ color: phase >= 3 ? "var(--accent-3)" : "var(--fg-3)", fontFamily: "var(--font-display)", fontSize: 22, fontStyle: "italic" }}>top-k</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {results.map((r, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "1fr 60px 80px",
              gap: 10,
              alignItems: "center",
              padding: "5px 10px",
              border: "1px solid var(--line)",
              borderRadius: 4,
              opacity: phase >= 3 ? 1 : 0.25,
              transform: phase >= 3 ? "translateX(0)" : "translateX(-8px)",
              transition: `all 0.4s ${i * 80}ms`,
            }}>
              <span style={{ color: "var(--fg)" }}>{r.esas}</span>
              <span style={{ color: "var(--accent)", textAlign: "right" }}>{r.score.toFixed(2)}</span>
              <span style={{ color: "var(--green)", textAlign: "right", fontSize: 10 }}>cited ✓</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualCultureLine() {
  // Multiplayer realtime — animated dots representing player events on Socket.IO
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 350);
    return () => clearInterval(id);
  }, []);

  const players = [
    { name: "P1", color: "var(--accent)" },
    { name: "P2", color: "var(--accent-2)" },
    { name: "P3", color: "var(--accent-3)" },
    { name: "P4", color: "var(--green)" },
  ];

  return (
    <div className="project-visual">
      <div className="pv-chrome">
        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
        <span className="url">culture-line — realtime channel state</span>
      </div>
      <div className="pv-body" style={{ padding: 18, fontFamily: "var(--font-mono)", fontSize: 11, position: "relative", background: "linear-gradient(135deg, #0e0e15, #1a1424)" }}>
        <div style={{ position: "absolute", inset: 0, padding: 18 }}>
          <svg viewBox="0 0 500 280" style={{ width: "100%", height: "100%" }}>
            {/* Central server */}
            <circle cx="250" cy="140" r="18" fill="rgba(201,164,92,0.15)" stroke="var(--accent)" />
            <text x="250" y="144" fontSize="8" fill="var(--accent)" textAnchor="middle" fontFamily="var(--font-mono)">REDIS</text>
            {/* Players orbit */}
            {players.map((p, i) => {
              const angle = (i / players.length) * Math.PI * 2 + (t * 0.04);
              const x = 250 + Math.cos(angle) * 110;
              const y = 140 + Math.sin(angle) * 90;
              const active = ((t + i * 2) % 4) === 0;
              return (
                <g key={i}>
                  <line x1="250" y1="140" x2={x} y2={y} stroke={p.color} strokeWidth={active ? 1.5 : 0.5} strokeDasharray={active ? "0" : "3 3"} opacity={active ? 1 : 0.3} />
                  <circle cx={x} cy={y} r="14" fill={`rgba(0,0,0,0.5)`} stroke={p.color} strokeWidth="1.2" />
                  <text x={x} y={y + 3} fontSize="9" fill={p.color} textAnchor="middle" fontFamily="var(--font-mono)">{p.name}</text>
                  {active && (
                    <circle cx={250 + Math.cos(angle) * 60} cy={140 + Math.sin(angle) * 50} r="3" fill={p.color}>
                      <animate attributeName="opacity" from="1" to="0" dur="0.6s" fill="freeze" />
                    </circle>
                  )}
                </g>
              );
            })}
            <text x="20" y="24" fontSize="10" fill="var(--accent)" fontFamily="var(--font-mono)" letterSpacing="2">SOCKET.IO · CHANNEL_STATE</text>
            <text x="20" y="260" fontSize="9" fill="rgba(245,241,232,0.5)" fontFamily="var(--font-mono)">presence · pub/sub · {16 + (t % 9)} msg/s</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

function VisualPusulaDava() {
  // Spreadsheet/table look — case rows with filters
  const cases = [
    { no: "2024/E.118", court: "1. Asliye Hukuk", debt: "₺ 142.500", status: "AÇIK" },
    { no: "2024/E.092", court: "Tüketici Mah.",     debt: "₺ 28.900",  status: "DERDEST" },
    { no: "2024/E.077", court: "İcra Müd.",         debt: "₺ 76.420",  status: "TAKİP" },
    { no: "2023/E.441", court: "Aile Mah.",         debt: "—",         status: "KARAR" },
    { no: "2023/E.388", court: "1. Asliye Hukuk", debt: "₺ 211.000", status: "DERDEST" },
  ];
  const statusColor = { "AÇIK": "var(--green)", "DERDEST": "var(--accent-3)", "TAKİP": "var(--accent)", "KARAR": "var(--fg-2)" };

  return (
    <div className="project-visual">
      <div className="pv-chrome">
        <span className="dot"></span><span className="dot"></span><span className="dot"></span>
        <span className="url">pusula-dava-web/cases — server-side filtered</span>
      </div>
      <div className="pv-body" style={{ padding: 16, fontFamily: "var(--font-mono)", fontSize: 11 }}>
        <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
          {["status: derdest", "court: asliye", "year: 2024", "+ smart preset"].map((f, i) => (
            <span key={i} style={{
              padding: "3px 10px",
              border: "1px solid var(--line-2)",
              borderRadius: 999,
              fontSize: 9,
              color: i === 3 ? "var(--accent)" : "var(--fg-2)",
              borderColor: i === 3 ? "var(--accent)" : "var(--line-2)",
            }}>{f}</span>
          ))}
        </div>
        <div style={{ border: "1px solid var(--line)", borderRadius: 6, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 90px 70px", gap: 10, padding: "8px 12px", background: "rgba(0,0,0,0.3)", fontSize: 9, color: "var(--fg-3)", letterSpacing: ".1em" }}>
            <span>DOSYA NO</span><span>MAHKEME</span><span style={{ textAlign: "right" }}>BORÇ</span><span style={{ textAlign: "right" }}>DURUM</span>
          </div>
          {cases.map((c, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr 90px 70px",
              gap: 10,
              padding: "10px 12px",
              borderTop: "1px solid var(--line)",
              alignItems: "center",
              transition: "background 0.3s",
            }}>
              <span style={{ color: "var(--accent)" }}>{c.no}</span>
              <span style={{ color: "var(--fg-1)" }}>{c.court}</span>
              <span style={{ color: "var(--fg)", textAlign: "right" }}>{c.debt}</span>
              <span style={{ textAlign: "right", color: statusColor[c.status], fontSize: 9, letterSpacing: ".1em" }}>{c.status}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, display: "flex", justifyContent: "space-between", fontSize: 9, color: "var(--fg-3)" }}>
          <span>showing 5 of 247</span>
          <span>GET /api/cases?status=derdest · 142ms</span>
        </div>
      </div>
    </div>
  );
}

const PROJECT_VISUALS = [
  VisualCallCenter,
  VisualStroke,
  VisualIcraCeza,
  VisualIctihat,
  VisualCultureLine,
  VisualPusulaDava,
];

function Projects({ t }) {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-header" style={{ marginBottom: 0, paddingTop: 140, paddingBottom: 56 }}>
          <div>
            <div className="section-eyebrow">{t.eyebrow}</div>
            <h2 className="section-title reveal">
              {t.title_pre} <span className="italic">{t.title_em}</span>
            </h2>
          </div>
          <p className="section-lede reveal" style={{ "--reveal-delay": "200ms", marginBottom: 0 }}>{t.lede}</p>
        </div>
      </div>

      <div className="projects">
        {t.items.map((p, i) => {
          const Visual = PROJECT_VISUALS[i] || VisualCallCenter;
          return (
            <div className="project" key={i}>
              <div className="container project-inner">
                <div className="reveal">
                  <div className="project-meta">
                    <span>— {String(i + 1).padStart(2, "0")} / {String(t.items.length).padStart(2, "0")}</span>
                    <span className="badge">{p.tag}</span>
                    <span className="live">{p.live}</span>
                  </div>
                  <h3 className="project-title">
                    {p.title_pre}<span className="italic">{p.title_em}</span>
                  </h3>
                  <div className="project-tagline">{p.tagline}</div>
                  <p className="project-body">{p.body}</p>
                  <ul className="project-highlights">
                    {p.highlights.map((h, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: h }} />
                    ))}
                  </ul>
                  <div className="project-stack">
                    {p.stack.map((s, j) => <span className="tag" key={j}>{s}</span>)}
                  </div>
                </div>
                <div className="project-visual-wrap reveal">
                  <Visual />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

Object.assign(window, { Projects });
