const reviews = [
  {
    name: "Aarav M.",
    initials: "AM",
    text: "The lessons made my chart routine simpler. I finally know what I am looking for before entering trades.",
  },
  {
    name: "Maya S.",
    initials: "MS",
    text: "The risk modules are the best part. It feels serious, organized, and much easier to follow.",
  },
  {
    name: "Daniel R.",
    initials: "DR",
    text: "Clean watchlists, practical breakdowns, and a community that keeps the focus on process.",
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="reviews">
      <div className="section-heading">
        <p className="eyebrow">Reviews</p>
        <h2>Built for traders who want structure, not noise.</h2>
      </div>

      <div className="review-grid">
        {reviews.map((review) => (
          <article className="card review-card" key={review.name}>
            <p>"{review.text}"</p>
            <div className="review-author">
              <span>{review.initials}</span>
              <strong>{review.name}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
