import { useState } from 'react'
import Button from './Button'
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  let num = 0,num2=num
  const changeNote = () => {
    do{
      num2=num
      const num3 = Math.round(Math.random()*10)
      num=num3
      setSelected(num)
    }while(num>7 || num==selected)
  }
  const [points,setPoints] = useState([0,0,0,0,0,0,0,0])
  const [number,setNumber] = useState(0)
  let anecdotes2=0;
  const vote = () => {
    const copy = [...points]
    copy[selected] +=1
    setPoints(copy)
    for(let i in [...copy]){
      if(copy[i] == [...copy].sort()[7]){
        setNumber(i)
        break;
      }
    }
  }
  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selected]}
      <br/>
      <Button event={changeNote} text='Next anecdote'/>
      <p>Has {points[selected]} votes</p>
      <Button event={vote} text='Vote'/>
      <h2>Anecdote with most votes</h2>
      {anecdotes[number]}
      <p>Has {points[number]} votes</p>
    </div>
  )
}

export default App