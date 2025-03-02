import React, { useState, useEffect } from 'react'
import FlashCard from './components/Flashcard'
import './App.css'


function App() {
  const [index, setIndex] = useState(0)
  const [qAndA, setQAndA] = useState([])

  useEffect(() => {
    fetch('/Q&A.json').then((response) => response.json()).then((data) => {console.log('Fetched data:', data); setQAndA(data)})
  },[]);

  const handleBtnClickNext = () => {
    if (index === qAndA.length - 1){
      return 
    }
    setIndex(index + 1)
  }

  const handleBtnClickPrev = () => {
    if (index > 0){
      setIndex(index - 1)
    }
  }

  return (
    <>
      <div className='title'>
        <h1>Guess This Company Logo</h1>
        <p>How good are you with company's logo? Time to test your skills!</p>
        <div className='card-flex' >
          <FlashCard question={qAndA[index]?.question} answer={qAndA[index]?.answer}/>
        </div>
        <div className='btn-flex' style={{marginTop: "10px"}}> 
          <button className="btn" type="button" onClick={handleBtnClickPrev}>{"<--"}</button>
          <button className="btn" type="button" onClick={handleBtnClickNext}>{"-->"}</button>
        </div>
      </div>
    </>
  )
}

export default App
