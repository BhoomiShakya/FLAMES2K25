import React, { useState } from 'react'
import './App.css'

function App() {

  const [formData, setFormData] = useState ({
    name:"",
    email:"",
    message:""
  })
  // name:"sia"
  //email:"abc@gamil.com"
  const handleChange = (e)=>{
      const {name, value} = e.target //name:sia............ email:jksggad
      setFormData((prev)=>({
        ...prev, //name:mahak, message :hello, email:kjbbgjagdja ,  
        [name]:value, //name:"sia"//dynamic key
      }))
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    // const response= "abc.net/fillform"
    console.log("submitted data", formData);
    alert("form submitted successfully")
  }


  return (
   <div className='min-h-screen flex item-center justify-center bg-gray-100 p-6'>
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-lg p-8 rounded-xl w-full max-w-md space-y-4'
      >
        <h2 className='text-2xl font-bold text-center text-blue-700'>Contact Form</h2>
        <input
              type="text"
              name="name"
              placeholder='enter your name'
              value={formData.name}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              required
          />

           <input
    
              name="message"
              placeholder='write your message'
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              required
          />
           <input
              type="email"
              name="email"
              placeholder='enter your email'
              value={formData.email}
              onChange={handleChange}
              className='w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400'
              required
          />

          <button
              type="submit"
              className='w-full bg-blue-600 
              text-white py-2 rounded hover:bg-blue-700 
              transition'
          >Submit</button>

      </form>
   </div>
  )
}

export default App
