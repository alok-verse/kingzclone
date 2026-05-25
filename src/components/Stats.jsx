const stats = [
  { value: "24/7", label: "community access" },
  { value: "50+", label: "lesson modules" },
  { value: "3x", label: "weekly live sessions" },
  { value: "1:1", label: "strategy reviews" },
];

export default function Stats() {
  return (
    <section className="stats" aria-label="Program statistics">
      {stats.map((stat) => (
        <div key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
