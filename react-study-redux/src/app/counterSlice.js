import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  // 초깃값
  initialState: {
    value: 0
  },
  // 리듀서
  reducers: {
    // 액션
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByQuantity: (state, action) => {
      state.value += action.payload;
    },
    decrementByQuantity: (state, action) => {
      state.value -= action.payload;
    },
    refrash:(state) => {
      state.value = 0;
    }
    
  }
});



export const { increment, decrement, incrementByQuantity, decrementByQuantity, refrash } = counterSlice.actions;

export const incrementAsync = (quantity) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByQuantity(quantity));
  }, 1000);
};

export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
