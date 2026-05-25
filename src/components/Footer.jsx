import { BarChart3 } from "lucide-react";

function SocialIcon({ type }) {
  const icons = {
    Instagram: (
      <>
        <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.5" cy="7.5" r="0.7" fill="currentColor" />
      </>
    ),
    Facebook: <path d="M14 8.3h2.1V5.2c-.4-.1-1.7-.2-3.1-.2-3 0-5 1.8-5 5.2v2.8H5v3.5h3V24h3.7v-7.5h3l.5-3.5h-3.5v-2.4c0-1 .3-2.3 2.3-2.3Z" />,
    Twitter: <path d="M19.6 7.5c.1.2.1.4.1.7 0 7-5.3 15-15 15-3 0-5.8-.9-8.1-2.4h1.3c2.5 0 4.8-.8 6.6-2.3-2.3 0-4.2-1.5-4.9-3.6.3.1.6.1 1 .1.5 0 .9-.1 1.3-.2-2.4-.5-4.2-2.6-4.2-5.1v-.1c.7.4 1.5.6 2.4.7-1.4-.9-2.3-2.5-2.3-4.3 0-.9.2-1.8.7-2.5 2.6 3.2 6.5 5.3 10.9 5.5-.1-.4-.1-.8-.1-1.2 0-2.8 2.3-5.1 5.1-5.1 1.5 0 2.8.6 3.7 1.6 1.1-.2 2.2-.6 3.2-1.2-.4 1.2-1.2 2.2-2.2 2.8 1-.1 1.9-.4 2.8-.8-.7 1-1.5 1.8-2.3 2.4Z" />,
    LinkedIn: (
      <>
        <path d="M4.8 9h3.8v12H4.8V9Z" />
        <path d="M6.7 7.4A2.2 2.2 0 1 0 6.7 3a2.2 2.2 0 0 0 0 4.4Z" />
        <path d="M11 9h3.6v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.8c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H11V9Z" />
      </>
    ),
    YouTube: (
      <>
        <path d="M22.5 7.4a2.8 2.8 0 0 0-2-2c-1.8-.5-8.5-.5-8.5-.5s-6.7 0-8.5.5a2.8 2.8 0 0 0-2 2A29.2 29.2 0 0 0 1 12a29.2 29.2 0 0 0 .5 4.6 2.8 2.8 0 0 0 2 2c1.8.5 8.5.5 8.5.5s6.7 0 8.5-.5a2.8 2.8 0 0 0 2-2A29.2 29.2 0 0 0 23 12a29.2 29.2 0 0 0-.5-4.6Z" />
        <path d="m10 15.4 5.2-3.4L10 8.6v6.8Z" fill="#10100c" />
      </>
    ),
  };

  return (
    <svg className="social-icon" viewBox="0 0 24 24" aria-hidden="true">
      {icons[type]}
    </svg>
  );
}

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Facebook", href: "https://www.facebook.com/" },
  { label: "Twitter", href: "https://twitter.com/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "YouTube", href: "https://www.youtube.com/" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="brand footer-brand">
        <span className="brand-mark">
          <BarChart3 size={22} strokeWidth={2.5} />
        </span>
        <span>ChartKingz</span>
      </div>
      <div className="footer-copy">
        <strong>SUBSCRIBE OUR YOUTUBE FOR DAILY LIVE STREAM @7pm</strong>
        <div className="social-links" aria-label="Chartkingz social links">
          {socialLinks.map((link) => {
            return (
              <a href={link.href} target="_blank" rel="noreferrer" aria-label={link.label} key={link.label}>
                <SocialIcon type={link.label} />
              </a>
            );
          })}
        </div>
        <p>Copyright © 2026 Chartkingz.</p>
        <p>By using this platform, you acknowledge and accept these terms.</p>
      </div>
    </footer>
  );
}
