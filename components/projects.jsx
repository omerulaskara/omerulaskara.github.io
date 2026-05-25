/* projects.jsx — Featured projects as git-log entries with
   terminal-style mini visuals.
   ────────────────────────────────────────────────────────── */

/* ─── Visual: live asterisk event tail ─── */
function VisCallCenter() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 900);
    return () => clearInterval(id);
  }, []);
  const events = [
    { ts: "14:22:01", c: "g", t: "INBOUND",  d: "+90 532 ••• ••36 → queue:sales" },
    { ts: "14:22:03", c: "cy", t: "ANSWER",   d: "agent:mert.k extension:1024" },
    { ts: "14:22:04", c: "u",  t: "RECORD",   d: "mix=true → minio://recordings/" },
    { ts: "14:22:47", c: "g",  t: "TRANSFER", d: "queue:support → agent:selin.a" },
    { ts: "14:23:12", c: "u",  t: "HOLD",     d: "wait_music=on duration=00:18" },
    { ts: "14:23:30", c: "g",  t: "RESUME",   d: "talk_duration=00:01:29" },
    { ts: "14:24:58", c: "cy", t: "HANGUP",   d: "disposition=resolved sla=ok" },
    { ts: "14:25:01", c: "u",  t: "WRAPUP",   d: "agent_state=wrap timer=30s" },
  ];
  const head = (t % events.length);
  return (
    <div className="pv">
      <div className="pv-chrome">
        <span className="d"></span><span className="d"></span><span className="d"></span>
        <span className="url">$ tail -f /var/log/asterisk/events.log</span>
      </div>
      <div className="pv-body" style={{ padding: 12, fontSize: 11, lineHeight: 1.6 }}>
        {events.slice(0, head + 1).map((e, i) => {
          const colors = { g: "var(--green)", cy: "var(--prompt)", u: "var(--user)", k: "var(--key)" };
          return (
            <div key={i} style={{ display: "flex", gap: 8, opacity: i === head ? 1 : 0.55 }}>
              <span style={{ color: "var(--fg-3)" }}>[{e.ts}]</span>
              <span style={{ color: colors[e.c], minWidth: 70 }}>{e.t}</span>
              <span style={{ color: "var(--fg-1)" }}>{e.d}</span>
            </div>
          );
        })}
        <div style={{ marginTop: 6, color: "var(--prompt)" }}>
          $ <span className="cursor-blink" style={{ background: "var(--prompt)" }}></span>
        </div>
      </div>
    </div>
  );
}

/* ─── Visual: stroke event JSON ─── */
function VisStroke() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 220);
    return () => clearInterval(id);
  }, []);
  const total = 12;
  const visible = Math.min(t % (total + 8), total);

  // Mini SVG of growing path
  const pts = React.useMemo(() => {
    const a = [];
    for (let i = 0; i < total; i++) {
      a.push({
        t: i * 16,
        x: 20 + i * 18 + Math.sin(i * 0.7) * 12,
        y: 50 + Math.cos(i * 0.5) * 22,
        p: 0.3 + Math.abs(Math.sin(i * 0.4)) * 0.6,
      });
    }
    return a;
  }, []);

  const path = pts.slice(0, visible).map((p, i) => (i === 0 ? `M${p.x},${p.y}` : `L${p.x},${p.y}`)).join(" ");

  return (
    <div className="pv">
      <div className="pv-chrome">
        <span className="d"></span><span className="d"></span><span className="d"></span>
        <span className="url">stroke-app.com — drawing.json (event-sourced)</span>
      </div>
      <div className="pv-body" style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", height: "calc(100% - 0px)" }}>
        <div style={{ padding: 10, fontSize: 10.5, lineHeight: 1.55, overflow: "hidden", borderRight: "1px solid var(--line)" }}>
          <div style={{ color: "var(--punct)" }}>{"{"}</div>
          <div style={{ paddingLeft: 12 }}>
            <div><span className="k">"strokes"</span><span className="p">: [</span></div>
            {pts.slice(0, visible).map((p, i) => (
              <div key={i} style={{ paddingLeft: 12, color: "var(--fg-2)" }}>
                <span className="p">{"{"}</span>
                <span className="k">t</span>: <span className="n">{p.t}</span>,{" "}
                <span className="k">x</span>: <span className="n">{p.x.toFixed(0)}</span>,{" "}
                <span className="k">p</span>: <span className="n">{p.p.toFixed(2)}</span>
                <span className="p">{"}"}</span>
                {i < visible - 1 && <span className="p">,</span>}
              </div>
            ))}
            <div className="p">]</div>
          </div>
          <div className="p">{"}"}</div>
        </div>
        <div style={{ position: "relative", background: "linear-gradient(135deg, #0a0a14, #150c1f)" }}>
          <svg viewBox="0 0 260 110" style={{ width: "100%", height: "100%" }}>
            <defs>
              <linearGradient id="strokeG2" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#7c5cff" />
                <stop offset="50%" stopColor="#62c4ff" />
                <stop offset="100%" stopColor="#c4e890" />
              </linearGradient>
            </defs>
            <path d={path} stroke="url(#strokeG2)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {pts.slice(0, visible).map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="1.5" fill="#c4e890" opacity="0.5" />
            ))}
            <text x="10" y="14" fontSize="8" fill="var(--prompt)" fontFamily="JetBrains Mono">CANVAS</text>
            <text x="250" y="14" fontSize="8" fill="var(--user)" fontFamily="JetBrains Mono" textAnchor="end">{visible}/{total}</text>
          </svg>
        </div>
      </div>
    </div>
  );
}

/* ─── Visual: 14-step pipeline ─── */
function VisIcraCeza() {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % 18), 550);
    return () => clearInterval(id);
  }, []);
  const steps = [
    "kisiSorgula", "kurumSorgula", "icra_birimler", "dosya_tevzi_et", "evrak_yukle",
    "vekaletname", "dava_acilis_baslat", "harc_hesapla", "barobirlik_pay", "ode",
    "evrak_gonder", "tamamla", "PTT_barkod_sorgula", "mail_bildirim",
  ];
  return (
    <div className="pv">
      <div className="pv-chrome">
        <span className="d"></span><span className="d"></span><span className="d"></span>
        <span className="url">$ icra-ceza --profile=A --debug=adim2</span>
      </div>
      <div className="pv-body" style={{ padding: 12, fontSize: 11, lineHeight: 1.55 }}>
        {steps.map((s, i) => {
          const active = i === step % steps.length;
          const done = i < step % steps.length;
          return (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "20px 1fr 60px",
              gap: 6,
              padding: "2px 0",
              color: active ? "var(--prompt)" : done ? "var(--fg-1)" : "var(--fg-3)",
              opacity: done && !active ? 0.6 : 1,
              transition: "color 0.2s",
            }}>
              <span style={{ color: "var(--fg-3)" }}>{String(i + 1).padStart(2, "0")}</span>
              <span>POST /{s}.ajx</span>
              <span style={{ textAlign: "right", color: active ? "var(--orange)" : done ? "var(--green)" : "var(--fg-3)", fontSize: 9 }}>
                {active ? "···" : done ? "200" : "—"}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Visual: RAG retrieval ─── */
function VisIctihat() {
  const [phase, setPhase] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setPhase((p) => (p + 1) % 5), 1100);
    return () => clearInterval(id);
  }, []);
  const results = [
    { id: "2023/4421", score: 0.94 },
    { id: "2022/1180", score: 0.89 },
    { id: "2024/0096", score: 0.86 },
    { id: "2021/8772", score: 0.81 },
    { id: "2020/3344", score: 0.77 },
  ];
  return (
    <div className="pv">
      <div className="pv-chrome">
        <span className="d"></span><span className="d"></span><span className="d"></span>
        <span className="url">$ ictihat search "haksız şart denetimi" -k 5</span>
      </div>
      <div className="pv-body" style={{ padding: 12, fontSize: 11, lineHeight: 1.55, fontFamily: "var(--font-mono)" }}>
        <div style={{ color: "var(--comment)", marginBottom: 6 }}># indexing pipeline</div>
        {[
          { l: "BM25  top-50", on: phase >= 1, c: "var(--prompt)" },
          { l: "VECTOR top-50", on: phase >= 2, c: "var(--key)" },
          { l: "FUSE  top-5",  on: phase >= 3, c: "var(--user)" },
          { l: "RAG   generate", on: phase >= 4, c: "var(--green)" },
        ].map((s, i) => (
          <div key={i} style={{ display: "flex", gap: 8, color: s.on ? s.c : "var(--fg-3)", opacity: s.on ? 1 : 0.4, transition: "all 0.3s" }}>
            <span>{s.on ? "▸" : "○"}</span>
            <span>{s.l}</span>
            {s.on && <span style={{ marginLeft: "auto", color: "var(--green)", fontSize: 10 }}>✓</span>}
          </div>
        ))}
        <div style={{ marginTop: 10, color: "var(--comment)" }}># results</div>
        {results.map((r, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "20px 1fr 60px 60px",
            gap: 6,
            color: phase >= 4 ? "var(--fg-1)" : "var(--fg-3)",
            opacity: phase >= 4 ? 1 : 0.3,
            transform: phase >= 4 ? "translateX(0)" : "translateX(-4px)",
            transition: `all 0.3s ${i * 80}ms`,
          }}>
            <span style={{ color: "var(--fg-3)" }}>{i + 1}.</span>
            <span style={{ color: "var(--user)" }}>Esas {r.id}</span>
            <span style={{ textAlign: "right", color: "var(--orange)" }}>{r.score.toFixed(2)}</span>
            <span style={{ textAlign: "right", color: "var(--green)", fontSize: 9 }}>cited</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Visual: Socket.IO event stream ─── */
function VisCultureLine() {
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    const id = setInterval(() => setT((x) => x + 1), 480);
    return () => clearInterval(id);
  }, []);
  const events = [
    { e: "room:join",      from: "P1", to: "room/4421", c: "var(--prompt)" },
    { e: "round:start",    from: "—",  to: "all",       c: "var(--user)" },
    { e: "guess:submit",   from: "P3", to: "server",    c: "var(--green)" },
    { e: "guess:correct",  from: "—",  to: "P3 +50",    c: "var(--green)" },
    { e: "presence:tick",  from: "P2", to: "online",    c: "var(--key)" },
    { e: "chat:msg",       from: "P4", to: "channel",   c: "var(--fg-1)" },
    { e: "round:end",      from: "—",  to: "winners=[P3]", c: "var(--user)" },
    { e: "stats:update",   from: "—",  to: "leaderboard",  c: "var(--orange)" },
  ];
  const head = t % events.length;
  return (
    <div className="pv">
      <div className="pv-chrome">
        <span className="d"></span><span className="d"></span><span className="d"></span>
        <span className="url">socket.io → room/4421 · pubsub:redis</span>
      </div>
      <div className="pv-body" style={{ padding: 12, fontSize: 11, lineHeight: 1.6 }}>
        {events.map((ev, i) => {
          const visible = i <= head;
          return (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "16px 100px 60px 1fr",
              gap: 6,
              padding: "2px 0",
              opacity: visible ? (i === head ? 1 : 0.5) : 0,
              transform: visible ? "translateX(0)" : "translateX(-6px)",
              transition: "all 0.25s",
            }}>
              <span style={{ color: ev.c }}>▸</span>
              <span style={{ color: ev.c }}>{ev.e}</span>
              <span style={{ color: "var(--fg-2)" }}>{ev.from}</span>
              <span style={{ color: "var(--fg-1)" }}>→ {ev.to}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ─── Visual: SQL query + result ─── */
function VisPusulaDava() {
  const rows = [
    { no: "2024/E.118", court: "1. Asliye Hukuk", debt: "₺ 142.500", st: "AÇIK",    c: "var(--green)" },
    { no: "2024/E.092", court: "Tüketici Mah.",    debt: "₺ 28.900",  st: "DERDEST", c: "var(--prompt)" },
    { no: "2024/E.077", court: "İcra Müd.",        debt: "₺ 76.420",  st: "TAKİP",   c: "var(--user)" },
    { no: "2023/E.441", court: "Aile Mah.",        debt: "—",         st: "KARAR",   c: "var(--fg-2)" },
    { no: "2023/E.388", court: "1. Asliye Hukuk", debt: "₺ 211.000", st: "DERDEST", c: "var(--prompt)" },
  ];
  return (
    <div className="pv">
      <div className="pv-chrome">
        <span className="d"></span><span className="d"></span><span className="d"></span>
        <span className="url">GET /api/cases?status=derdest&year=2024 — 142ms · 5 rows</span>
      </div>
      <div className="pv-body" style={{ padding: 10, fontSize: 10.5, lineHeight: 1.55 }}>
        <div style={{ color: "var(--comment)", marginBottom: 4 }}>
          SELECT no, court, debt, status FROM cases
        </div>
        <div style={{ color: "var(--comment)", marginBottom: 8 }}>
          WHERE status='derdest' AND year=2024 LIMIT 5;
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "100px 1fr 80px 60px", gap: 8, color: "var(--fg-3)", fontSize: 9, paddingBottom: 4, borderBottom: "1px solid var(--line)" }}>
          <span>NO</span><span>COURT</span><span style={{ textAlign: "right" }}>DEBT</span><span style={{ textAlign: "right" }}>STATUS</span>
        </div>
        {rows.map((r, i) => (
          <div key={i} style={{
            display: "grid",
            gridTemplateColumns: "100px 1fr 80px 60px",
            gap: 8,
            padding: "5px 0",
            borderBottom: i < rows.length - 1 ? "1px dashed var(--line)" : "none",
            alignItems: "baseline",
          }}>
            <span style={{ color: "var(--user)" }}>{r.no}</span>
            <span style={{ color: "var(--fg-1)" }}>{r.court}</span>
            <span style={{ color: "var(--string)", textAlign: "right" }}>{r.debt}</span>
            <span style={{ color: r.c, textAlign: "right", fontSize: 9, letterSpacing: ".1em" }}>{r.st}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const VISUALS = [VisCallCenter, VisStroke, VisIcraCeza, VisIctihat, VisCultureLine, VisPusulaDava];
const HASHES = ["c0ffee1", "a11ce42", "deadbef", "1234567", "abc4567", "fedcba9"];

function Projects({ t }) {
  return (
    <Block id="projects" num="04">
      <CmdLine cmd="git" args={["log", "--featured", "--oneline"]} flags={["-n", "6"]} />
      <div className="gitlog" style={{ marginTop: 4 }}>
        {t.items.map((p, i) => {
          const V = VISUALS[i] || VisCallCenter;
          return (
            <div className="commit reveal" key={i}>
              <div className="marker"></div>
              <div className="commit-body">
                <div>
                  <div className="commit-meta">
                    <span className="hash">{HASHES[i]}</span>
                    <span className="tag">{p.tag}</span>
                    <span className="live">● {p.live}</span>
                  </div>
                  <h3>
                    {p.title_pre}<span className="accent">{p.title_em}</span>
                  </h3>
                  <div className="tagline">{p.tagline}</div>
                  <div className="body">{p.body}</div>
                  <ul className="highlights">
                    {p.highlights.slice(0, 4).map((h, j) => (
                      <li key={j} dangerouslySetInnerHTML={{ __html: h }} />
                    ))}
                  </ul>
                  <div className="stack">
                    {p.stack.slice(0, 6).map((s, j) => <span key={j}>{s}</span>)}
                  </div>
                </div>
                <div><V /></div>
              </div>
            </div>
          );
        })}
      </div>
    </Block>
  );
}

Object.assign(window, { Projects });
