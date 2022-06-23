import { createSlice } from '@reduxjs/toolkit';

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: 'welcome to the application :)',
  reducers: {
    setNotification(state, action) {
      return action.payload;
    },
  },
});

const notificationTimeouts = [];

export const { setNotification } = notificationSlice.actions;

export const createNotification = (content, timeout) => async (dispatch) => {
  dispatch(setNotification(content));
  for (let i = 0; i < notificationTimeouts.length; i += 1) {
    clearTimeout(notificationTimeouts[i]);
  }
  notificationTimeouts.push(setTimeout(() => (dispatch(setNotification(null))), timeout * 1000));
};
export default notificationSlice.reducer;
