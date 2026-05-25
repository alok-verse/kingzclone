const markets = [
  { symbol: "BTC", price: "$68,420", change: "+4.8%" },
  { symbol: "ETH", price: "$3,720", change: "+2.1%" },
  { symbol: "NIFTY", price: "22,840", change: "-0.6%", down: true },
  { symbol: "GOLD", price: "$2,345", change: "+1.3%" },
  { symbol: "NASDAQ", price: "18,920", change: "+0.9%" },
];

export default function MarketTicker() {
  return (
    <section className="market-strip" aria-label="Market watchlist">
      {markets.map((market) => (
        <article className="market-card" key={market.symbol}>
          <span>{market.symbol}</span>
          <strong>{market.price}</strong>
          <em className={market.down ? "down" : ""}>{market.change}</em>
        </article>
      ))}
    </section>
  );
}
