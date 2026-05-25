import { BadgeDollarSign, BookOpen, LineChart, MessagesSquare } from "lucide-react";

const features = [
  {
    icon: LineChart,
    title: "Chart analysis",
    text: "Break down trends, liquidity zones, support, resistance, and market structure with repeatable routines.",
  },
  {
    icon: BookOpen,
    title: "Trading lessons",
    text: "Follow focused modules that explain technical analysis, trade planning, psychology, and journaling.",
  },
  {
    icon: MessagesSquare,
    title: "Community rooms",
    text: "Discuss setups, watchlists, and trade ideas with a private group built around disciplined execution.",
  },
  {
    icon: BadgeDollarSign,
    title: "Risk management",
    text: "Learn position sizing, invalidation planning, and rules that protect your account before profit targets.",
  },
];

export default function Features() {
  return (
    <section className="section" id="features">
      <div className="section-heading">
        <p className="eyebrow">What you get</p>
        <h2>Everything needed to build a cleaner trading process.</h2>
      </div>

      <div className="feature-grid">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <article className="card feature-card" key={feature.title}>
              <Icon size={28} />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
