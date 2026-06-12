import Header from "./components/Header";
import goalsImg from "./assets/goals.jpg";
import CourseGoals from "./components/CourseGoals";
import { useState } from "react";

function App() {

  const [goals, setGoals] = useState([
    { id: 1, title: "Finish the course", description: "Complete all modules and exercises" },
    { id: 2, title: "Learn TypeScript", description: "Understand the basics of TypeScript and how to use it with React" },
    { id: 3, title: "Build a project", description: "Create a small project using React and TypeScript to apply what I've learned" }
  ]);

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "Goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <CourseGoals goals={goals} />

    </main>
  )
}

export default App
