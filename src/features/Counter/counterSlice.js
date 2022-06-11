const { createSlice } = require('@reduxjs/toolkit');
const counterSlice = createSlice({
  name: 'name_slice',
  initialState: 0,
  reducers: {
    increase(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
    decreaseTwo(state) {
      return state - 2;
    },
  },
});

const { actions, reducer } = counterSlice;

export const { increase, decrease, decreaseTwo } = actions; // named export

export default reducer; // default export
