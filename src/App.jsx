import './App.css'

const TITLE = 'Site en construction'

function App() {
  return (
    <div className="construction-page">
      <div className="stripes-bar stripes-top" />

      <div className="floating-shapes" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <span key={i} className={`shape shape-${i + 1}`} />
        ))}
      </div>

      <main className="content">
        <div className="cone-wrapper">
          <span className="cone" role="img" aria-label="Travaux en cours">
            🚧
          </span>
        </div>

        <h1 className="title">
          {TITLE.split(' ').map((word, wi) => (
            <span className="word" key={wi}>
              {word.split('').map((char, i) => (
                <span
                  key={i}
                  className="letter"
                  style={{ animationDelay: `${(wi * 12 + i) * 0.06}s` }}
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </h1>

        <p className="subtitle">
          Nous préparons quelque chose de génial. Revenez très bientôt !
        </p>

        <div className="progress-track" aria-hidden="true">
          <div className="progress-fill" />
        </div>

        <div className="gears" aria-hidden="true">
          <span className="gear gear-1">⚙️</span>
          <span className="gear gear-2">⚙️</span>
        </div>

        <p className="status">
          Disponible bientôt
          <span className="dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </main>

      <div className="stripes-bar stripes-bottom" />
    </div>
  )
}

export default App
