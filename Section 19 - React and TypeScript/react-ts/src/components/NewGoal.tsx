import React from "react";

export default function NewGoal() {
  
  const goalRef = React.useRef<HTMLInputElement>(null);
  const summaryRef = React.useRef<HTMLInputElement>(null);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredGoal = goalRef.current?.value;
    const enteredSummary = summaryRef.current?.value;
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goalRef} />
      </p>

      <p>
        <label htmlFor="summary">Short summary</label>
        <input id="summary" type="text" ref={summaryRef} />
      </p>

      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}
