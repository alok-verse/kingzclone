import { ArrowRight, CandlestickChart, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="eyebrow">Trading education and market community</p>
        <h1>Read the charts with sharper confidence.</h1>
        <p className="hero-text">
          A premium trading-style landing page with market lessons, live chart
          sessions, watchlists, and risk-first coaching for disciplined traders.
        </p>

        <div className="hero-actions">
          <a className="button" href="#pricing">
            Start learning
            <ArrowRight size={18} />
          </a>
          <a className="button button-secondary" href="#features">
            See features
          </a>
        </div>

        <div className="hero-points" aria-label="Highlights">
          <span>
            <ShieldCheck size={18} />
            Risk-first framework
          </span>
          <span>
            <CandlestickChart size={18} />
            Live chart breakdowns
          </span>
        </div>
      </div>

      <div className="terminal-panel" aria-label="Trading dashboard preview">
        <div className="terminal-top">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="chart-card">
          <div className="chart-header">
            <div>
              <p>BTC / USD</p>
              <strong>$68,420.75</strong>
            </div>
            <span className="gain">+4.82%</span>
          </div>
          <div className="chart-lines">
            {Array.from({ length: 18 }).map((_, index) => (
              <span
                key={index}
                style={{
                  "--height": `${28 + ((index * 17) % 72)}%`,
                  "--delay": `${index * 0.08}s`,
                }}
              />
            ))}
          </div>
          <div className="signal-row">
            <span>Entry zone</span>
            <strong>Confirmed</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
