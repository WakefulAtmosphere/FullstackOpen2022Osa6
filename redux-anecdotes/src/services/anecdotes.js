import axios from 'axios';

const baseUrl = 'http://localhost:3001/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};
const createAnecdote = async (content) => {
  const response = await axios.post(baseUrl, content);
  return response.data;
};

const sendVote = async (content) => {
  const response = await axios.put(`${baseUrl}/${content.id}`, { ...content, votes: content.votes + 1 });
  return response.data;
};

export default { getAll, createAnecdote, sendVote };
