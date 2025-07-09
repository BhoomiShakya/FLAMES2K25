import React from 'react'
import './App.css'
import Parent from './components/Parent'

function App() {

  const user={
    name:"Sia Shakya",
    email:"abc@gmail.com",
    role:"Data Scientist"
  }

  return (
     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 ">
            {/* comment */}
            <Parent user_for_parent = {user}/>
    </div>
  )
}

export default App
