import React from 'react';
import './App.css';
import data from './data';
import Tours from './components/Tours';
import { useState } from 'react';

function App() {

  const [tours, setTour] = useState(data)

  function BtnHandler(id){
      const newTours= tours.filter(tour=>tour.id !== id);
      setTour(newTours);
  }

  return (
   <div>
        <Tours tours = {tours} BtnHandler={BtnHandler}/>
   </div>
  )
}

export default App
