import React, { useState } from 'react';
import ReactDOM from 'react-dom';


const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(0);
  const mostVotes = votesStoreCopy.indexOf(Math.max(...votesStoreCopy));
  console.log(votesStoreCopy, mostVotes);
  
  return (
    <div>
      <h3>Anecdote of the day</h3>
      {props.anecdotes[selected]}
      <div>
        <NextButton setSelected={setSelected} selected={selected} />
        <VoteButton setVotes={setVotes} votes={votes} selected={selected} />
      </div>
      <h3>Anecdote with most votes</h3>
      {props.anecdotes[mostVotes]}
    </div>
  )
}

const NextButton = ({ setSelected, selected }) => <input type="button" onClick={() => setSelected((selected + Math.floor(Math.random() * max)) % max)} value="next anecdote" />

const VoteButton = ({ setVotes, votes, selected }) => <input type="button" onClick={() =>
  {
    setVotes(votes + 1);
    votesStoreCopy[selected] += 1;
  }
} value="vote" />

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const max = anecdotes.length;

const votesStore = new Array(max).fill(0);
const votesStoreCopy = [...votesStore];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)