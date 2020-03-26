import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h3>Give Feedback</h3>
      <Button review="good" state={good} setState={setGood} />
      <Button review="neutral" state={neutral} setState={setNeutral} />
      <Button review="bad" state={bad} setState={setBad} />
      <div>
        <h3>Statistics</h3>
        {(good || neutral || bad)?
          <table>
            <Statistic review="good" state={good} />
            <Statistic review="neutral" state={neutral} />
            <Statistic review="bad" state={bad} />
            <Statistic review="all" state={good+neutral+bad} />
            <Statistic review="average" state={(good+neutral+bad)/3} />
            <Statistic review="positive" state={(good/(good+neutral+bad))*100 + ' %'} />
          </table>
         : 
          <p>No feedback given</p>
        }
      </div>
    </div>
  )
}

const Button = ({ review, state, setState }) => {
  const setReview = (state, setState) => {
    setState(state + 1)
    console.log(state);
  }
  return (
    <input type="button" value={review} onClick={() => setReview(state, setState)} />
    )
}

const Statistic = ({ review, state }) => {

  return (
    <tr>
      <td>{review}</td>
      <td>{state}</td>
    </tr>
  )
}


ReactDOM.render(<App />, 
  document.getElementById('root')
)