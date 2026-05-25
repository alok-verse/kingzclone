import { BarChart3, Menu } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Live", href: "#live" },
  { label: "Plans", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  return (
    <header className="navbar">
      <a className="brand" href="#top" aria-label="ChartKingz home">
        <span className="brand-mark">
          <BarChart3 size={22} strokeWidth={2.5} />
        </span>
        <span>ChartKingz</span>
      </a>

      <nav className="nav-links" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <a href={link.href} key={link.label}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="nav-actions">
        <a className="ghost-link" href="#pricing">
          Login
        </a>
        <a className="button button-small" href="#pricing">
          Join Now
        </a>
        <button className="icon-button mobile-menu" aria-label="Open menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  );
}
