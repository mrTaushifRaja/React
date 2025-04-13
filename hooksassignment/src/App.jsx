import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 //let [value,clickValue]=useState(10);

const add = () =>{
  clickValue(value+1);
  if(value<20)
    conaole.log("Not going to over the 20",value)
}
const decrease = () =>{
  clickValue(value-1);
  if(value<0)
    console.log("zero is last number",value)
}

  return (
    <>
      <h1>I am Md taushif Raja: </h1>
      <h2>Hooks Concept </h2>

      <button 
      onClick={add}
      >Addition:{value}</button> 

      <br/>

      <button
      onClick ={decrease}
      >Substraction {value}</button>
    </>
  )
}

export default App
