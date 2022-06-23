import { connect } from 'react-redux';
import React from 'react';
import Anecdote from './Anecdote';

function Anecdotes({ anecdotes }) {
  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes
        .map((anecdote) => <Anecdote key={anecdote.id} anecdote={anecdote} />)}
    </>
  );
}

const mapStateToProps = (state) => {
  const sortingFunction = (a, b) => {
    if (a.votes > b.votes) {
      return -1;
    }
    if (a.votes < b.votes) {
      return 1;
    }
    return 0;
  };
  return {
    anecdotes: [...state.anecdotes]
      .filter((anecdote) => anecdote.content.includes(state.filter))
      .sort(sortingFunction),
  };
};

const connectedAnecdotes = connect(mapStateToProps)(Anecdotes);
export default connectedAnecdotes;
