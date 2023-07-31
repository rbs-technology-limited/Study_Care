import { createSlice } from "@reduxjs/toolkit";

type INITIALSTATE = {
  quizQAs: Array<any>;
};

const initialState: INITIALSTATE = {
  quizQAs: [],
};

const courseAccessSlice = createSlice({
  name: "courseAccess",
  initialState,
  reducers: {
    saveQuizQAs: (state, action) => {
      const { question, options } = action.payload;

      // Find the existing question in the state
      const existingQuestion = state.quizQAs.find(
        (qa) => qa.question === question
      );

      if (existingQuestion) {
        // If the question already exists, add new options that don't already exist
        options.forEach((newOption: any) => {
          if (!existingQuestion.options.includes(newOption)) {
            existingQuestion.options.push(newOption);
          }
        });
      } else {
        // If the question does not exist, add it as a new entry
        state.quizQAs.push({
          question,
          options,
        });
      }
    },
    removeQuizQA: (state, action) => {
      const { question, option } = action.payload;
      const existingQuestion = state.quizQAs.find(
        (qa) => qa.question === question
      );

      if (existingQuestion) {
        // Remove the option from the existing question's options array
        existingQuestion.options = existingQuestion.options.filter(
          (op: any) => op !== option
        );

        // If the question has no options left, remove it from the quizQAs array
        if (existingQuestion.options.length === 0) {
          state.quizQAs = state.quizQAs.filter(
            (qa) => qa.question !== question
          );
        }
      }
    },
  },
});

export const { saveQuizQAs, removeQuizQA } = courseAccessSlice.actions;

export default courseAccessSlice.reducer;
