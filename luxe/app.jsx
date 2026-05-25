/* app.jsx — Main React app: language state, sections composition
   ────────────────────────────────────────────────────────── */

const { useState, useEffect } = React;

function App() {
  // Persist language preference; default to system or TR
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem("ouk_lang");
      if (saved === "tr" || saved === "en") return saved;
    } catch (e) {}
    const sys = (navigator.language || "tr").slice(0, 2).toLowerCase();
    return sys === "en" ? "en" : "tr";
  });

  useEffect(() => {
    try { localStorage.setItem("ouk_lang", lang); } catch (e) {}
    document.documentElement.lang = lang;
    window.__LANG = lang;
  }, [lang]);

  const t = window.I18N[lang];

  // Mount IntersectionObservers
  useReveal();

  return (
    <>
      <Loader />
      <CursorRing />
      <Nav t={t.nav} lang={lang} setLang={setLang} />
      <main key={lang /* re-trigger fade-ins on language swap */}>
        <Hero t={t.hero} lang={lang} />
        <Stats t={t.stats} />
        <Marquee items={t.marquee} />
        <Domains t={t.domains} />
        <Projects t={t.projects} />
        <Stack t={t.stack} />
        <Architecture t={t.arch} />
        <Security t={t.security} />
        <Repos t={t.repos} />
        <Contact t={t.contact} />
      </main>
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
