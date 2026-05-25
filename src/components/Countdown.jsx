import { useEffect, useState } from "react";

function getTimeLeft() {
  const now = new Date();
  const nextLive = new Date(now);
  nextLive.setHours(19, 0, 0, 0);

  if (now >= nextLive) {
    nextLive.setDate(nextLive.getDate() + 1);
  }

  const difference = nextLive - now;

  return {
    hours: Math.floor(difference / (1000 * 60 * 60)),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft);

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <div className="countdown" aria-label="Countdown to next live stream">
      <span>Next live in</span>
      <strong>{String(timeLeft.hours).padStart(2, "0")}</strong>
      <span>h</span>
      <strong>{String(timeLeft.minutes).padStart(2, "0")}</strong>
      <span>m</span>
      <strong>{String(timeLeft.seconds).padStart(2, "0")}</strong>
      <span>s</span>
    </div>
  );
}
