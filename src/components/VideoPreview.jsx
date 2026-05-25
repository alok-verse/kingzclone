import { Play, Radio } from "lucide-react";
import Countdown from "./Countdown.jsx";

export default function VideoPreview() {
  return (
    <section className="section video-section" id="live">
      <div className="section-heading">
        <p className="eyebrow">Daily live class</p>
        <h2>Watch the market plan before the session starts.</h2>
      </div>

      <div className="video-layout">
        <div className="video-frame">
          <div className="video-grid-bg"></div>
          <button className="play-button" aria-label="Play live class preview">
            <Play size={34} fill="currentColor" />
          </button>
          <div className="video-meta">
            <span>
              <Radio size={17} />
              Live at 7:00 PM
            </span>
            <strong>ChartKingz Market Breakdown</strong>
          </div>
        </div>

        <div className="card live-card">
          <Countdown />
          <h3>Daily prep room</h3>
          <p>
            Add your YouTube video or live-stream embed here and turn this into
            the main place visitors go before joining the community.
          </p>
          <a className="button full-width" href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            Subscribe now
          </a>
        </div>
      </div>
    </section>
  );
}
