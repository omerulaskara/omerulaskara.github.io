/* app.jsx — Terminal Edition root */

const { useState, useEffect } = React;

const TABS = [
  { id: "whoami",   name: "01_whoami",   ext: "sh"  },
  { id: "stats",    name: "02_stats",    ext: "json" },
  { id: "domains",  name: "03_domains",  ext: "json" },
  { id: "projects", name: "04_projects", ext: "gitlog" },
  { id: "stack",    name: "05_stack",    ext: "json" },
  { id: "arch",     name: "06_arch",     ext: "tree" },
  { id: "security", name: "07_security", ext: "yaml" },
  { id: "repos",    name: "08_repos",    ext: "txt" },
  { id: "contact",  name: "09_contact",  ext: "vcf" },
];

const ACTIVE_LABELS = {
  whoami:   "whoami.sh",
  stats:    "stats.json",
  domains:  "domains.json",
  projects: "projects.gitlog",
  stack:    "stack.json",
  arch:     "architecture.tree",
  security: "security.yaml",
  repos:    "repos.txt",
  contact:  "contact.vcf",
};

function App() {
  const [lang, setLang] = useState(() => {
    try {
      const s = localStorage.getItem("ouk_lang");
      if (s === "tr" || s === "en") return s;
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
  const active = useActiveSection(TABS.map((x) => x.id));
  useReveal();

  return (
    <>
      <Loader />
      <Coderain />
      <Titlebar lang={lang} setLang={setLang} current={ACTIVE_LABELS[active] || "whoami.sh"} />
      <Tabs items={TABS} active={active} />
      <main key={lang}>
        <Hero t={{ ...t.hero, ...t.hero.terminal }} lang={lang} />
        <Stats t={t.stats} />
        <Domains t={t.domains} />
        <Projects t={t.projects} />
        <Stack t={t.stack} />
        <Architecture t={t.arch} />
        <Security t={t.security} />
        <Repos t={t.repos} />
        <Contact t={t.contact} lang={lang} />
      </main>
      <Statusbar active={ACTIVE_LABELS[active] || "whoami.sh"} lang={lang} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
