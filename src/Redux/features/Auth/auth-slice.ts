import { handleRegister } from "@/API_CALL/PostData/Register/Register";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type INITIAL_STATE = {
  registerProcess: {
    loading: boolean;
    error: any;
  };
  loginDetails: {
    email: string;
    password: string;
    isLogin: boolean;
  };
};

const initialState = {
  registerProcess: {
    loading: false,
    error: null,
  },
  loginDetails: {
    email: "",
    password: "",
    isLogin: false,
  },
} as INITIAL_STATE;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleRegister.pending, (state, action) => {
      state.registerProcess.loading = true;
      console.log("pending");
    });
    builder.addCase(handleRegister.fulfilled, (state, action) => {
      state.registerProcess.loading = false;
      state.loginDetails = {
        ...state.loginDetails,
        isLogin: true,
      };
      localStorage.setItem("loginDetails", JSON.stringify(state.loginDetails));
    });
    builder.addCase(handleRegister.rejected, (state, action) => {
      console.log("rejected");
      state.registerProcess.loading = false;
      state.registerProcess.error = action.error.message;
    });
  },
});

export const {} = authSlice.actions;

export default authSlice.reducer;
