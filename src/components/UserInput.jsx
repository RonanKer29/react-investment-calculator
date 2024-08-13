import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput);
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input type="number" required />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" required />
        </p>
        <p>
          <label>DURATION</label>
          <input type="number" required />
        </p>
      </div>
    </section>
  );
}
