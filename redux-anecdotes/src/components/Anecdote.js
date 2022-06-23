import { useDispatch } from 'react-redux';
import React from 'react';
import { voteAnecdote } from '../reducers/anecdoteReducer';
import { createNotification } from '../reducers/notificationReducer';

function Anecdote({ anecdote }) {
  const dispatch = useDispatch();
  const likeAnecdote = () => {
    dispatch(voteAnecdote(anecdote));
    dispatch(createNotification(`successfully voted for ${anecdote.content}`, 5));
  };

  return (
    <div>
      <div>
        {anecdote.content}
      </div>
      <div>
        has
        {' '}
        {anecdote.votes}
        <button type="button" onClick={likeAnecdote}>vote</button>
      </div>
    </div>
  );
}

export default Anecdote;
