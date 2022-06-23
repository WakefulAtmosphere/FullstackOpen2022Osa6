/* eslint-disable react/destructuring-assignment */
import { connect } from 'react-redux';
import React from 'react';
import { addAnecdote } from '../reducers/anecdoteReducer';
import { createNotification } from '../reducers/notificationReducer';

function AnecdoteForm(props) {
  const newAnecdote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.addAnecdote(content);
    props.createNotification(`successfully added anecdote ${content}`, 5);
  };
  return (
    <>
      <h2>create new</h2>
      <form onSubmit={newAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </>
  );
}

const mapDispatchToProps = {
  addAnecdote,
  createNotification,
};

const ConnectedForm = connect(
  null,
  mapDispatchToProps,
)(AnecdoteForm);

export default ConnectedForm;
