const faqs = [
  {
    question: "Is this financial advice?",
    answer: "No. This is an educational landing page clone concept. Always do your own research before trading.",
  },
  {
    question: "Can I use this for my own brand?",
    answer: "Yes. Replace the copy, colors, logo, prices, and images so the finished site belongs to your brand.",
  },
  {
    question: "Does it work on mobile?",
    answer: "Yes. The layout uses responsive grids and mobile spacing so it adapts to small screens.",
  },
];

export default function FAQ() {
  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading">
        <p className="eyebrow">FAQ</p>
        <h2>Questions before launch.</h2>
      </div>

      <div className="faq-list">
        {faqs.map((faq) => (
          <details className="faq-item" key={faq.question}>
            <summary>{faq.question}</summary>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
