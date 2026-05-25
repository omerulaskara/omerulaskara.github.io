/* repos.jsx — 19-repository inventory, clustered by domain
   ────────────────────────────────────────────────────────── */

function Repos({ t }) {
  return (
    <section id="repos" className="section">
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

        {t.clusters.map((cluster, ci) => (
          <div className="repo-cluster reveal" key={ci} style={{ "--reveal-delay": `${ci * 80}ms` }}>
            <div className="repo-cluster-head">
              <span className="repo-cluster-title">{cluster.name}</span>
              <span className="repo-cluster-count">— {cluster.count}</span>
            </div>
            <div className="repo-grid">
              {cluster.repos.map((r, ri) => (
                <div className="repo" key={ri}>
                  <div className="repo-name">
                    <span>{r.name}</span>
                    <span className={r.priv === "public" ? "pub" : "lock"}>{r.priv}</span>
                  </div>
                  <div className="repo-desc">{r.desc}</div>
                  <div className="repo-stack">
                    {r.stack.map((s, si) => <span key={si}>{s}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { Repos });
