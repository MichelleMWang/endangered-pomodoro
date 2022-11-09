import type { NextPage } from 'next'
import NavBar from '../components/navbar'
import Timer from '../components/timer'
import React from "react"; 
import Canvas from '../components/canvas.jsx';

const Home: NextPage = () => {
  const[time, setTime]  = React.useState(25) 
  return (
    <div className="bg-teal-100 h-screen">
      <NavBar></NavBar>
      <Timer timeProp={time}></Timer>
      <Canvas draw="f" width="200" height="100"></Canvas>
    </div>
  )
}

export default Home
