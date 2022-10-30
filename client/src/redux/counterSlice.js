import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "correct answer",
  initialState: {
    answerCounter: 0,
    userdata: {},
  },
  reducers: {
    IncrementCorrectAnswer: (state) => {
      state.answerCounter += 1;
    },
    ResetCorrectAnswer: (state) => {
      state.answerCounter = 0;
    },
    loginCalling: (state, action) => {
      state.userdata = {
        ...state,
        userdata: action.payload,
      };
      console.log(state.userdata, "from redux");
    },
  },
});

export const { IncrementCorrectAnswer, ResetCorrectAnswer, loginCalling } =
  counterSlice.actions;
export default counterSlice.reducer;
