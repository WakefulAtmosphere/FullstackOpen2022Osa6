import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { initializeStore } from './reducers/anecdoteReducer';
import Anecdotes from './components/Anecdotes';
import AnecdoteForm from './components/AnecdoteForm';
import Notification from './components/Notification';
import Filter from './components/Filter';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeStore());
  }, []);

  return (
    <div>
      <Notification />
      <Filter />
      <Anecdotes />
      <AnecdoteForm />
    </div>
  );
}

export default App;
