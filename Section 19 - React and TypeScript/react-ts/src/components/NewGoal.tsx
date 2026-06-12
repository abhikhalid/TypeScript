import React from "react";

interface NewGoalProps {
  // Define any props if needed
  onAdd: (text: string, summary: string) => void; // Example prop for adding a new goal
}

export default function NewGoal({ onAdd }: NewGoalProps) {
  
  const goalRef = React.useRef<HTMLInputElement>(null);
  const summaryRef = React.useRef<HTMLInputElement>(null);


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredGoal = goalRef.current?.value;
    const enteredSummary = summaryRef.current?.value;
    // Handle form submission logic here

    onAdd(enteredGoal || "", enteredSummary || ""); // Call the onAdd prop with the entered values
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
