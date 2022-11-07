import type { NextPage } from 'next'
import NavBar from '../components/navbar'
import Timer from '../components/timer'
import React from "react"; 

const Home: NextPage = () => {
  const[time, setTime]  = React.useState(25) 
  return (
    <div className="bg-teal-100 h-screen">
      <NavBar></NavBar>
      <Timer timeProp={time}></Timer>
    </div>
  )
}

export default Home
