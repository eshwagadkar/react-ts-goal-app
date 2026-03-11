import { useState } from 'react'
import CourseGoal from './components/CourseGoal'
import goalsImg from './assets/goals.jpg'
import Header from './components/Header'

type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([])

  function handleAddGoal() {

    setGoals(prevGoals => {

      const newGoal: CourseGoal = {
        id: Math.random(),
        title: 'Learn Typescript with React',
        description: 'A fundamental from scratch' 
      }

      return [...prevGoals, newGoal]
    })
  } 

  return <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
     <h1>Your Course Goals</h1> 
    </Header>

    <button onClick={handleAddGoal}>Add Goal</button>
   
    <ul>
      {goals.map(goal => <li key={goal.id}>
        <CourseGoal  title={goal.title}
          //  description='Learn it from the ground up.'
        >{goal.description}
        </CourseGoal>
        </li>
      )}
    </ul>
    
  </main>
}
