import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals";
import { useState } from "react";
import NewGoal from "./components/NewGoal";

function App() {

  const [goals, setGoals] = useState([
    { id: 1, title: "Finish the course", description: "Complete all modules and exercises" },
    { id: 2, title: "Learn TypeScript", description: "Understand the basics of TypeScript and how to use it with React" },
    { id: 3, title: "Build a project", description: "Create a small project using React and TypeScript to apply what I've learned" }
  ]);

  function handleAddGoal(text: string, summary: string) {
    const newGoal = {
      id: Math.random(), // Generate a random ID for the new goal
      title: text,
      description: summary
    };
    setGoals((prevGoals) => [...prevGoals, newGoal]); // Add the new goal to the existing goals
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAdd={handleAddGoal} />
      <CourseGoals goals={goals} onDelete={(id) => setGoals(goals.filter(goal => goal.id !== id))} />

    </main>
  )
}

export default App
