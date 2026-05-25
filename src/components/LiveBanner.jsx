import { PlayCircle } from "lucide-react";

export default function LiveBanner() {
  return (
    <aside className="live-banner" aria-label="YouTube live stream announcement">
      <span className="live-dot"></span>
      <strong>LIVE STREAM DAILY @ 7PM</strong>
      <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
        <PlayCircle size={18} />
        Subscribe on YouTube
      </a>
    </aside>
  );
}
