import React from 'react';
import './App.css';
import data from './data';
import Tours from './components/Tours';
import { useState } from 'react';

function App() {

  const [tours, setTour] = useState(data)

  return (
   <div>
        <Tours tours = {tours}/>
   </div>
  )
}

export default App
