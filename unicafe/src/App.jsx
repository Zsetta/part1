import { useState } from "react";
import Button from "./Button";
import Statistics from "./Statistics";
const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const handleGood = () => {
    setGood(good+1)
    setAll(all+1)
  }
  const handleNeutral = () => {
    const newNeutral = neutral+1;
    setNeutral(newNeutral)
    setAll(all+1)
  }
  const handleBad = () => {
    setBad(bad+1)
    setAll(all+1)
  }
  
  return(
    <div>
      <h1>Give feedback</h1>
     <Button handleClick={handleGood} text='good'/>
     <Button handleClick={handleNeutral} text='neutral'/>
     <Button handleClick={handleBad} text='bad'/>
     <h2>Statistics</h2>
     <Statistics good={good} neutral={neutral} bad={bad} all={all}/>
    </div>
  )
}
export default App
