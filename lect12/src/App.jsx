import React, {useEffect, useState} from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)

  //case 1 ---> no depen.
  useEffect(()=>{
      // console.log("Effect running with no dependency runs for every render")//code 
  })

  // case 2 ---> empty depen.
  useEffect(()=>{
      console.log("Effect running with empty dependency runs for only once")//code 
   },[])

  //case 3----->runs when specific change
   useEffect(()=>{
      console.log("Count changed: ", count)//code 
   },[count])

   //case 4
   useEffect(()=>{
    const interval = setInterval(()=>{
        console.log("timer tick")
    }, 2000 )
    
    return ()=>{
      clearInterval(interval);
      console.log("clean up")
    }
    
  }, [])

  return (
    <div>
        <div>
          <button
            onClick={()=>setCount(count+1)}
            className='bg-blue-600 text-white px-4 py-2 rounded-lg'
          >
            Increment Count
          </button>
          <p className='text-lg'>Count :{count}</p>
        </div>
    </div>
  )
}

export default App
