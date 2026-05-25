/* hero.jsx — Hero section with split name, terminal whoami,
   particle canvas, CTAs, and a scroll cue.
   ────────────────────────────────────────────────────────── */

function SplitText({ text, className = "", delay = 0 }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState(false);
  React.useEffect(() => {
    const t = setTimeout(() => setShown(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const chars = React.useMemo(() => Array.from(text), [text]);
  return (
    <span ref={ref} className={`split-text ${shown ? "in" : ""} ${className}`}>
      {chars.map((c, i) => (
        <span key={i} className={`ch ${c === " " ? "space" : ""}`} style={{ "--i": i }}>
          {c === " " ? "\u00A0" : c}
        </span>
      ))}
    </span>
  );
}

function Terminal({ t }) {
  const [stage, setStage] = React.useState(0);       // 0 = pre-prompt, 1 = typing cmd, 2 = output running
  const [cmdTyped, setCmdTyped] = React.useState("");
  const [outputLineIdx, setOutputLineIdx] = React.useState(-1);

  // Cycle entry — reset & retype on language change (t reference change)
  React.useEffect(() => {
    setStage(0);
    setCmdTyped("");
    setOutputLineIdx(-1);
    const t1 = setTimeout(() => setStage(1), 600);
    return () => clearTimeout(t1);
  }, [t]);

  // Type the command
  React.useEffect(() => {
    if (stage !== 1) return;
    const target = t.cmd;
    if (cmdTyped.length >= target.length) {
      const t2 = setTimeout(() => setStage(2), 350);
      return () => clearTimeout(t2);
    }
    const t2 = setTimeout(() => setCmdTyped(target.slice(0, cmdTyped.length + 1)), 70 + Math.random() * 50);
    return () => clearTimeout(t2);
  }, [stage, cmdTyped, t]);

  // Reveal output lines one by one
  React.useEffect(() => {
    if (stage !== 2) return;
    if (outputLineIdx >= t.lines.length) return;
    const t3 = setTimeout(() => setOutputLineIdx((i) => i + 1), 200);
    return () => clearTimeout(t3);
  }, [stage, outputLineIdx, t]);

  return (
    <div className="terminal">
      <div className="terminal-head">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="title mono">{t.host}: {t.path}</div>
      </div>
      <div className="terminal-body">
        <div>
          <span className="user">{t.host}</span>
          <span className="prompt"> ❯ </span>
          {stage === 0 && <span className="cursor"></span>}
          {stage >= 1 && (
            <>
              <span className="cmd">{cmdTyped}</span>
              {stage === 1 && <span className="cursor"></span>}
            </>
          )}
        </div>

        {stage >= 2 && (
          <div style={{ marginTop: 14 }}>
            {t.lines.map((line, i) => (
              <div
                key={i}
                className="br"
                style={{
                  opacity: outputLineIdx >= i ? 1 : 0,
                  transform: outputLineIdx >= i ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.4s, transform 0.4s",
                }}
              >
                <span className="key">{line.k.padEnd(13, " ")}</span>
                <span className="val"> = </span>
                <span className="val">{line.v}</span>
              </div>
            ))}
            {outputLineIdx >= t.lines.length && (
              <div className="br" style={{ marginTop: 12 }}>
                <span className="comment">{t.done}</span>
                <span className="cursor"></span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Hero({ t, lang }) {
  return (
    <section id="hero" className="hero">
      <ParticleCanvas />
      <div className="container hero-inner">
        <div>
          <div className="hero-meta">
            <span>{t.meta.split(" · ")[0]}</span>
            <span className="sep"></span>
            <span>{t.meta.split(" · ")[1]}</span>
            <span className="sep"></span>
            <span>{t.meta.split(" · ")[2]}</span>
          </div>
          <h1 className="hero-name">
            <span className="first">
              <SplitText text={t.first} delay={300} />
            </span>
            <span className="last">
              <SplitText text={t.last} delay={650} />
            </span>
          </h1>
          <p className="hero-positioning reveal" style={{ "--reveal-delay": "1100ms" }}>
            {t.positioning_pre} <b><em>{t.positioning_em}</em></b>{t.positioning_post}
          </p>
          <div className="hero-cta reveal" style={{ "--reveal-delay": "1300ms" }}>
            <a className="btn primary" href="#projects">
              {t.cta1} <span className="arrow">↗</span>
            </a>
            <a className="btn ghost" href="#contact">
              {t.cta2} <span className="arrow">↗</span>
            </a>
          </div>
        </div>

        <div className="reveal-fade in" style={{ transitionDelay: "800ms" }}>
          <Terminal t={t.terminal} />
        </div>
      </div>

      <div className="scroll-cue">
        <span>{t.scroll}</span>
        <span className="line"></span>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Terminal, SplitText });
