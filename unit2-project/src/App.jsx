import React, { useState, useEffect } from 'react'
import FlashCard from './components/Flashcard'
import './App.css'


function App() {
  const [index, setIndex] = useState(0)
  const [qAndA, setQAndA] = useState([])
  console.log(`checking useState: ${index}`)

  useEffect(() => {
    fetch('/Q&A.json').then((response) => response.json()).then((data) => {console.log('Fetched data:', data); setQAndA(data)})
  },[]);

  return (
    <>
      <div className='title'>
        <h1>Guess This Company Logo</h1>
        <p>How good are you with company's logo? Time to test your skills!</p>
        <div className='card-flex' >
          <FlashCard question={qAndA[index]?.question} answer={qAndA[index]?.answer}/>
        </div>
        <button className="btn" type="button">{"-->"}</button>
      </div>
    </>
  )
}

export default App
