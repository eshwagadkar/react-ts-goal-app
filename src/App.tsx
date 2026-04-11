import { useState } from 'react'
import goalsImg from './assets/goals.jpg'
import Header from './components/Header'
import CourseGoalList from './components/CourseGoalList'

export type CourseGoal = {
  title: string;
  description: string;
  id: number;
}

export default function App() {

  const [goals, setGoals] = useState<CourseGoal[]>([])

  // Adding a Goal
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

  // Delete a Goal
  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter(goal => goal.id !== id))    
  }

  return <main>
    <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
     <h1>Your Course Goals</h1> 
    </Header>

    <button onClick={handleAddGoal}>Add Goal</button>
   
    <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    
  </main>
}
