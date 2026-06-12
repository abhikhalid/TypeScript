import React from 'react'

type Goal = {
  id: number;
  title: string;
  description: string;
};

interface CourseGoalsProps {
  // Define any props if needed
  goals: Goal[];
};

export default function CourseGoals({ goals }: CourseGoalsProps) { // modern approach
//  const CourseGoals: React.FC<CourseGoalsProps> = ({ goals }) => { //old approach
  return (
    <ul>
        {goals.map((goal) => (
        <li key={goal.id}>
            <article>
                <div>
                    <h2>{goal.title}</h2>
                    <p>{goal.description}</p>
                </div>

                <button>Delete</button>
            </article>
        </li>
        ))}
    </ul>
  )
}
