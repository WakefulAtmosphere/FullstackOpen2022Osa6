import { createSlice } from '@reduxjs/toolkit';
import anecdoteService from '../services/anecdotes';

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      state[state.findIndex((anecdote) => anecdote.id === action.payload)].votes += 1;
      return state;
    },
    newAnecdote(state, action) {
      state.push(action.payload);
    },
    setAnecdotes(state, action) {
      return action.payload;
    },
  },
});

export const { vote, newAnecdote, setAnecdotes } = anecdoteSlice.actions;

export const initializeStore = () => async (dispatch) => {
  const anecdotes = await anecdoteService.getAll();
  dispatch(setAnecdotes(anecdotes));
};

export const addAnecdote = (content) => async (dispatch) => {
  const anecdote = { content, votes: 0 };
  const addedAnecdote = await anecdoteService.createAnecdote(anecdote);
  dispatch(newAnecdote(addedAnecdote));
};

export const voteAnecdote = (anecdote) => async (dispatch) => {
  await anecdoteService.sendVote(anecdote);
  dispatch(vote(anecdote.id));
};

export default anecdoteSlice.reducer;
