const terms = [
  {
    term: "Support",
    meaning: "A zone where buyers often defend price and look for continuation.",
  },
  {
    term: "Resistance",
    meaning: "A zone where sellers may reject price or where profits are taken.",
  },
  {
    term: "Breakout",
    meaning: "A strong move through a level, ideally with volume and follow-through.",
  },
  {
    term: "Risk Reward",
    meaning: "The comparison between what you risk and what you aim to make.",
  },
  {
    term: "Stop Loss",
    meaning: "The invalidation level that closes a trade when the idea is wrong.",
  },
];

export default function Glossary() {
  return (
    <section className="section glossary-section">
      <div className="section-heading">
        <p className="eyebrow">Trading glossary</p>
        <h2>Learn the words behind every clean setup.</h2>
      </div>

      <div className="glossary-grid">
        {terms.map((item) => (
          <article className="glossary-card" key={item.term}>
            <strong>{item.term}</strong>
            <p>{item.meaning}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
