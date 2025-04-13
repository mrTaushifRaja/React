import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,Updationcounter]=useState(16);
//let counter = 15

const addValue = ()=>{
  //counter= counter+1;
 Updationcounter(counter+1);

}
const decrease = () =>{
//decrease= decrease-1;
Updationcounter(counter-1);
}



  return (
    <>
     <h1>Md Taushif Raja with React:{addValue}{counter}</h1> 
     <h2>User Input in the browser:{decrease}{counter}</h2>
    <button 
    onClick={addValue}
    >Add Value {counter}</button>
     <br/>


    <button
    onClick={decrease}
    >Remove Value {counter}</button>
    </>
  )
}

export default App
