import {
  ArrowRight,
  Building2,
  Cross,
  Home,
  Landmark,
  Leaf,
  Menu,
  Sprout,
} from "lucide-react";

const navItems = ["All", "Architecture", "Interiors", "Landscape", "Planning"];

const sectors = [
  {
    title: "Residential",
    subtitle: "Human Living",
    icon: Home,
    color: "#486a3b",
    projects: [
      "Forest Edge Retreat",
      "The Courtyard House",
      "Aranya Villas",
      "Riverline Residence",
      "Hillside Habitat",
    ],
  },
  {
    title: "Institutional",
    subtitle: "Learning & Culture",
    icon: Landmark,
    color: "#327271",
    projects: [
      "Knowledge Commons",
      "University Campus",
      "Research Pavilion",
      "Cultural Center",
      "Innovation Hub",
    ],
  },
  {
    title: "Hospitality",
    subtitle: "Experience & Leisure",
    icon: Sprout,
    color: "#3f7f45",
    projects: [
      "Eco Resort",
      "Lakeview Hotel",
      "Wilderness Lodge",
      "The Valley Retreat",
      "Coastal Escape",
    ],
  },
  {
    title: "Healthcare",
    subtitle: "Healing Spaces",
    icon: Cross,
    color: "#9a7a30",
    projects: [
      "Wellness Center",
      "Diagnostic Hub",
      "Healing Gardens",
      "Rehab Facility",
      "Care Home",
    ],
  },
  {
    title: "Commercial",
    subtitle: "Business & Innovation",
    icon: Building2,
    color: "#51445f",
    projects: [
      "Green Office Park",
      "Workplace Towers",
      "Design Studio",
      "Retail Complex",
      "Tech Park",
    ],
  },
];

function BranchField() {
  return (
    <div className="branch-field" aria-hidden="true">
      {sectors.map((sector, groupIndex) => (
        <div
          className={`branch-group branch-${groupIndex + 1}`}
          key={sector.title}
          style={{ "--branch-color": sector.color }}
        >
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              className="branch-stem"
              key={index}
              style={{
                "--i": index,
                "--length": `${180 + ((index * 29) % 190)}px`,
                "--angle": `${-30 + index * 3.6}deg`,
                "--delay": `${index * 0.04}s`,
              }}
            />
          ))}
        </div>
      ))}

      <div className="root-system">
        {Array.from({ length: 46 }).map((_, index) => (
          <span
            key={index}
            style={{
              "--root-angle": `${190 + index * 3.5}deg`,
              "--root-length": `${120 + ((index * 37) % 320)}px`,
              "--root-color": index % 2 ? "#7d7f53" : "#188273",
            }}
          />
        ))}
      </div>
      <div className="origin-dot" />
    </div>
  );
}

function SectorColumn({ sector }) {
  const Icon = sector.icon;

  return (
    <article className="sector-column" style={{ "--sector-color": sector.color }}>
      <div className="sector-icon">
        <Icon size={30} strokeWidth={1.8} />
      </div>
      <h2>{sector.title}</h2>
      <p>{sector.subtitle}</p>
      <ul>
        {sector.projects.map((project) => (
          <li key={project}>{project}</li>
        ))}
      </ul>
      <a href="#work">+ More</a>
    </article>
  );
}

export default function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Singularity Architects home">
          <strong>Singularity</strong>
          <span>Architects / Est. 2012</span>
        </a>

        <nav className="category-nav" aria-label="Portfolio categories">
          {navItems.map((item, index) => (
            <a className={index === 0 ? "active" : ""} href="#work" key={item}>
              {item}
            </a>
          ))}
        </nav>

        <nav className="meta-nav" aria-label="Company navigation">
          <a href="#about">About</a>
          <a href="#awards">Awards</a>
          <a href="#contact">Contact</a>
          <a className="admin-link" href="#admin">
            Admin
            <ArrowRight size={14} />
          </a>
          <button className="menu-button" aria-label="Open navigation">
            <Menu size={22} />
          </button>
        </nav>
      </header>

      <main className="hero-page" id="top">
        <BranchField />

        <section className="hero-copy" aria-labelledby="hero-title">
          <p className="eyebrow">
            <span />
            Singularity Architects / Since 2012
          </p>
          <h1 id="hero-title">
            Architecture
            <em>Redefined</em>
            by Vision
          </h1>
          <div className="metric-row">
            <span>
              <strong>6</strong>
              Projects
            </span>
            <span>
              <strong>38</strong>
              Awards
            </span>
            <span>
              <strong>18</strong>
              Countries
            </span>
          </div>
          <a className="explore-link" href="#work">
            Explore work
            <ArrowRight size={15} />
          </a>
        </section>

        <section className="sector-grid" id="work" aria-label="Project sectors">
          {sectors.map((sector) => (
            <SectorColumn key={sector.title} sector={sector} />
          ))}
        </section>

        <div className="balance-note nature-note">
          <Leaf size={18} />
          <strong>Nature</strong>
          <span>Organic Origins</span>
        </div>
        <div className="balance-note tech-note">
          <Building2 size={18} />
          <strong>Technology</strong>
          <span>Digital Intelligence</span>
        </div>
        <div className="singularity-note">
          <strong>Singularity</strong>
          <span>Unity of Nature & Technology</span>
          <span>Point of Divergence</span>
        </div>
      </main>
    </div>
  );
}
