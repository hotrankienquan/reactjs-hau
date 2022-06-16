import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import userAPI from 'api/userApi';

// First, create the thunk
export const register = createAsyncThunk('user/register', async (payload) => {
  // call api to register
  const data = await userAPI.register(payload);
  //save data to lcoal storage
  localStorage.setItem('access_token_hau', data.jwt);
  localStorage.setItem('user_hau', JSON.stringify(data.user));
  // return user data
  return data.user;
});
const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    settings: {},
  },
  reducers: {},
  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.current = action.payload;
    },
  },
});

const { reducer } = userSlice;

export default reducer; // default export
