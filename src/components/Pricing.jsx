import { Check } from "lucide-react";
import { useState } from "react";

const currencies = [
  { code: "USD", symbol: "$", rate: 1 },
  { code: "INR", symbol: "₹", rate: 83.2 },
  { code: "EUR", symbol: "€", rate: 0.92 },
  { code: "GBP", symbol: "£", rate: 0.79 },
  { code: "AED", symbol: "د.إ", rate: 3.67 },
  { code: "CAD", symbol: "C$", rate: 1.36 },
];

const plans = [
  {
    name: "Monthly",
    price: 49,
    detail: "per month",
    badge: "Starter",
    items: ["Private community", "Weekly chart sessions", "Trade planning templates"],
  },
  {
    name: "Pro",
    price: 149,
    detail: "per quarter",
    featured: true,
    badge: "Save 18%",
    items: ["Everything in Monthly", "Strategy reviews", "Priority market breakdowns"],
  },
  {
    name: "Lifetime",
    price: 499,
    detail: "one-time payment",
    badge: "Best value",
    items: ["Lifetime access", "All future modules", "Member-only live events"],
  },
];

function formatPrice(price, currency) {
  const convertedPrice = price * currency.rate;
  const maximumFractionDigits = currency.code === "USD" ? 0 : 2;

  return `${currency.symbol}${convertedPrice.toLocaleString("en-US", {
    maximumFractionDigits,
  })}`;
}

export default function Pricing() {
  const [selectedCurrencies, setSelectedCurrencies] = useState(
    Object.fromEntries(plans.map((plan) => [plan.name, currencies[0].code]))
  );

  function updateCurrency(planName, currencyCode) {
    setSelectedCurrencies((current) => ({
      ...current,
      [planName]: currencyCode,
    }));
  }

  return (
    <section className="section pricing-section" id="pricing">
      <div className="section-heading">
        <p className="eyebrow">Membership</p>
        <h2>Choose the access level that fits your pace.</h2>
      </div>

      <div className="pricing-grid">
        {plans.map((plan) => {
          const selectedCurrency =
            currencies.find((currency) => currency.code === selectedCurrencies[plan.name]) ??
            currencies[0];

          return (
            <article className={`card price-card ${plan.featured ? "featured" : ""}`} key={plan.name}>
              <span className="plan-badge">{plan.badge}</span>
              <h3>{plan.name}</h3>
              <div className="price">
                <strong>{formatPrice(plan.price, selectedCurrency)}</strong>
                <span>{plan.detail}</span>
              </div>

              <label className="currency-control">
                <span>Convert price</span>
                <select
                  value={selectedCurrency.code}
                  onChange={(event) => updateCurrency(plan.name, event.target.value)}
                >
                  {currencies.map((currency) => (
                    <option key={currency.code} value={currency.code}>
                      {currency.code}
                    </option>
                  ))}
                </select>
              </label>

              <ul>
                {plan.items.map((item) => (
                  <li key={item}>
                    <Check size={18} />
                    {item}
                  </li>
                ))}
              </ul>
              <a className="button full-width" href="#top">
                Join now
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
}
