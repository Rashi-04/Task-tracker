import { useState } from 'react'
import './App.css'
import Task from './Task'
import Status from './Status'
import Board from './Board'
import DeleteTask from './DeleteTask'
import CreateTask from './CreateTask'
import EditTask from './EditTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Board/>
    </>
    
  )
}

export default App
