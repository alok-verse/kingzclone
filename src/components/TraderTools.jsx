import { useMemo, useState } from "react";
import { BarChart2, CheckCircle2, ClipboardCheck, Gauge, GraduationCap } from "lucide-react";

const roadmap = [
  { title: "Market Structure", progress: 92 },
  { title: "Fibonacci Planning", progress: 76 },
  { title: "Risk Management", progress: 88 },
  { title: "Trading Psychology", progress: 64 },
];

const checklistItems = [
  "Trend direction is clear",
  "Entry has invalidation",
  "Risk is under control",
  "Target is realistic",
  "No revenge trade",
];

const quizOptions = [
  { label: "Fast scalper", result: "You prefer momentum setups and short sessions." },
  { label: "Swing planner", result: "You like patience, structure, and bigger chart levels." },
  { label: "Risk manager", result: "You should focus on consistency and clean invalidation." },
];

export default function TraderTools() {
  const [account, setAccount] = useState(1000);
  const [risk, setRisk] = useState(2);
  const [reward, setReward] = useState(3);
  const [mood, setMood] = useState(68);
  const [quizResult, setQuizResult] = useState(quizOptions[1].result);
  const [checkedItems, setCheckedItems] = useState(["Entry has invalidation", "Risk is under control"]);

  const riskStats = useMemo(() => {
    const riskAmount = account * (risk / 100);
    return {
      riskAmount,
      possibleReward: riskAmount * reward,
    };
  }, [account, risk, reward]);

  function toggleChecklist(item) {
    setCheckedItems((current) =>
      current.includes(item) ? current.filter((entry) => entry !== item) : [...current, item]
    );
  }

  return (
    <section className="section tools-section" id="tools">
      <div className="section-heading">
        <p className="eyebrow">Trader tools</p>
        <h2>Interactive features that make the page feel useful.</h2>
      </div>

      <div className="tools-grid">
        <article className="card tool-card risk-tool">
          <CalculatorIcon />
          <h3>Risk calculator</h3>
          <label>
            Account size
            <input type="number" value={account} min="100" onChange={(event) => setAccount(Number(event.target.value))} />
          </label>
          <label>
            Risk %
            <input type="number" value={risk} min="0.1" max="10" step="0.1" onChange={(event) => setRisk(Number(event.target.value))} />
          </label>
          <label>
            Reward multiplier
            <input type="number" value={reward} min="1" max="10" step="0.5" onChange={(event) => setReward(Number(event.target.value))} />
          </label>
          <div className="tool-result">
            <span>Risk amount</span>
            <strong>${riskStats.riskAmount.toFixed(2)}</strong>
            <span>Possible reward</span>
            <strong>${riskStats.possibleReward.toFixed(2)}</strong>
          </div>
        </article>

        <article className="card tool-card">
          <Gauge size={30} />
          <h3>Market mood meter</h3>
          <input
            className="mood-slider"
            type="range"
            min="0"
            max="100"
            value={mood}
            onChange={(event) => setMood(Number(event.target.value))}
          />
          <div className="mood-meter" style={{ "--mood": `${mood}%` }}>
            <span></span>
          </div>
          <div className="tool-result compact">
            <span>Current bias</span>
            <strong>{mood > 65 ? "Bullish" : mood < 35 ? "Bearish" : "Neutral"}</strong>
          </div>
        </article>

        <article className="card tool-card">
          <BarChart2 size={30} />
          <h3>Trading style quiz</h3>
          <div className="quiz-buttons">
            {quizOptions.map((option) => (
              <button type="button" key={option.label} onClick={() => setQuizResult(option.result)}>
                {option.label}
              </button>
            ))}
          </div>
          <p className="quiz-result">{quizResult}</p>
        </article>

        <article className="card tool-card">
          <ClipboardCheck size={30} />
          <h3>Pre-trade checklist</h3>
          <div className="checklist">
            {checklistItems.map((item) => (
              <label key={item}>
                <input
                  type="checkbox"
                  checked={checkedItems.includes(item)}
                  onChange={() => toggleChecklist(item)}
                />
                {item}
              </label>
            ))}
          </div>
          <div className="tool-result compact">
            <span>Readiness</span>
            <strong>{checkedItems.length}/5</strong>
          </div>
        </article>

        <article className="card tool-card roadmap-tool">
          <GraduationCap size={30} />
          <h3>Course roadmap</h3>
          <div className="roadmap-list">
            {roadmap.map((item) => (
              <div className="roadmap-item" key={item.title}>
                <div>
                  <span>{item.title}</span>
                  <strong>{item.progress}%</strong>
                </div>
                <em>
                  <i style={{ width: `${item.progress}%` }}></i>
                </em>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function CalculatorIcon() {
  return <CheckCircle2 size={30} />;
}
