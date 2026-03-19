import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const isDark = theme === "dark";

  function handleThemeToggle() {
    setTheme(isDark ? "light" : "dark");
  }

  return (
    <main className="app-shell">
      <div className="top-bar">
        <button
          type="button"
          className={`theme-toggle ${isDark ? "is-dark" : ""}`}
          onClick={handleThemeToggle}
          aria-label="Toggle color theme"
          aria-pressed={isDark}
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-thumb">
              {isDark ? "🌙" : "☀"}
            </span>
          </span>
        </button>

      </div>

      <section className="hero">
        <p className="eyebrow">Personal Learning Project</p>
        <h1>Word Finder</h1>
        <p className="intro">
          Search for a word to explore its synonyms and antonyms.
        </p>
      </section>

      <section className="search-panel" aria-labelledby="search-heading">
        <h2 id="search-heading">Search</h2>

        <form
          className="search-form"
          onSubmit={(event) => event.preventDefault()}
        >
          <label htmlFor="word-input">Enter a word</label>

          <div className="search-row">
            <input
              id="word-input"
              name="word"
              type="text"
              placeholder="Try happy"
              autoComplete="off"
            />
            <button type="submit">Search</button>
          </div>
        </form>

      </section>

      <section className="results-panel" aria-labelledby="results-heading">
        <h2 id="results-heading">Results</h2>
        <p className="placeholder">
          Search for a word to see synonyms and antonyms.
        </p>
      </section>
    </main>
  );
}

export default App;
