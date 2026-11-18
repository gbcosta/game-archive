const games = [
  {
    name: 'Street Fighter III: 3rd Strike',
    slug: 'street-fighter-3rd-strike',
    genre: 'Fighting game',
    description: 'Mechanics, frame data, character guides and matchups.',
  },
  {
    name: 'Ultra Street Fighter IV',
    slug: 'ultra-street-fighter-iv',
    genre: 'Fighting game',
    description: 'Combos, system mechanics, matchups and strategies.',
  },
  {
    name: 'Marvel Rivals',
    slug: 'marvel-rivals',
    genre: 'Hero shooter',
    description: 'Heroes, abilities, team compositions and strategies.',
  },
  {
    name: 'League of Legends',
    slug: 'league-of-legends',
    genre: 'MOBA',
    description: 'Champions, items, mechanics and game knowledge.',
  },
]

const recentArticles = [
  {
    title: 'Understanding Frame Data',
    game: 'Ultra Street Fighter IV',
    category: 'Mechanics',
    updatedAt: 'November 17, 2026',
    slug: 'understanding-frame-data',
  },
  {
    title: 'Character Matchups',
    game: 'Street Fighter III: 3rd Strike',
    category: 'Strategy',
    updatedAt: 'November 15, 2026',
    slug: 'character-matchups',
  },
  {
    title: 'Understanding Hero Roles',
    game: 'Marvel Rivals',
    category: 'Game Systems',
    updatedAt: 'November 12, 2026',
    slug: 'understanding-hero-roles',
  },
]

export default function HomePage() {
  return (
    <div className="site-container">
      <header className="site-header">
        <a href="/" className="site-logo">
          GAME ARCHIVE<span>.</span>
        </a>

        <nav className="header-nav">
          <a href="#games">Games</a>
          <a href="#recent">Recently updated</a>
          <a href="/admin">Admin</a>
        </nav>
      </header>

      <main>
        <section className="hero">
          <span className="eyebrow">PERSONAL GAMING KNOWLEDGE BASE</span>

          <h1>
            A collection of
            <br />
            gaming knowledge.
          </h1>

          <p>Technical references, mechanics, strategies and discoveries from the games I play.</p>
        </section>

        <section className="games-section" id="games">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE COLLECTION</span>
              <h2>Games</h2>
            </div>

            <span className="section-count">{String(games.length).padStart(2, '0')} TITLES</span>
          </div>

          <div className="games-grid">
            {games.map((game, index) => (
              <a href={`/games/${game.slug}`} className="game-item" key={game.slug}>
                <span className="game-index">{String(index + 1).padStart(2, '0')}</span>

                <div className="game-info">
                  <span className="game-genre">{game.genre}</span>
                  <h3>{game.name}</h3>
                  <p>{game.description}</p>
                </div>

                <span className="game-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>

        <section className="recent-section" id="recent">
          <div className="section-heading">
            <div>
              <span className="eyebrow">LATEST ACTIVITY</span>
              <h2>Recently updated</h2>
            </div>

            <span className="section-count">
              {String(recentArticles.length).padStart(2, '0')} ARTICLES
            </span>
          </div>

          <div className="article-list">
            {recentArticles.map((article) => (
              <a href={`/articles/${article.slug}`} className="article-item" key={article.slug}>
                <div className="article-info">
                  <h3>{article.title}</h3>
                  <span>
                    {article.game} <span className="article-separator">/</span> {article.category}
                  </span>
                </div>

                <time>{article.updatedAt}</time>
                <span className="article-arrow">↗</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>GAME ARCHIVE.</span>
        <span>A personal collection of gaming knowledge.</span>
      </footer>
    </div>
  )
}
