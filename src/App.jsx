import { useState } from 'react'
import './App.css'
import ScoreKeeper from './ScoreKeeper'

function App() {
  

  return (
    
      <div>
       <ScoreKeeper numPlayers={10} target={5}/>
      </div>
      
    
  )
}

export default App
