import { handleLogin } from "@/API_CALL/PostData/Login/Login";
import { handleRegister } from "@/API_CALL/PostData/Register/Register";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type INITIAL_STATE = {
  isLoading: boolean;
  registerProcess: {
    loading: boolean;
    error: any;
  };
  loginDetails: {
    loading?: boolean;
    username: string;
    password: string;
    isLogin: boolean;
  };
};

const initialState = {
  isLoading: false,
  registerProcess: {
    loading: false,
    error: null,
  },
  loginDetails: {
    username: "",
    password: "",
    isLogin: false,
  },
} as INITIAL_STATE;

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    getLoginInfo: (state, action: PayloadAction<any>) => {
      state.loginDetails = {
        ...state.loginDetails,
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    // builder.addCase(handleRegister.pending, (state, action) => {
    //   state.registerProcess.loading = true;
    //   console.log("pending");
    // });
    // builder.addCase(handleRegister.fulfilled, (state, action) => {
    //   state.registerProcess.loading = false;
    //   state.loginDetails = {
    //     ...state.loginDetails,
    //     isLogin: true,
    //   };
    //   localStorage.setItem("loginDetails", JSON.stringify(state.loginDetails));
    // });
    // builder.addCase(handleRegister.rejected, (state, action) => {
    //   console.log("rejected");
    //   state.registerProcess.loading = false;
    //   state.registerProcess.error = action.error.message;
    // });

    //for login
    builder.addCase(handleLogin.pending, (state, action) => {
      state.isLoading = true;
      // console.log("fulfilled", handleLogin);
      // console.log("pending", state.isLoading);
    });
    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.loginDetails = {
        ...state.loginDetails,
        isLogin: true,
      };
      // console.log("fulfilled", handleLogin);
      localStorage.setItem("userInfo", JSON.stringify(state.loginDetails));
    });
    builder.addCase(handleLogin.rejected, (state, action) => {
      // console.log("fulfilled", handleLogin);
      // console.log("rejected");
      state.isLoading = false;
    });
  },
});

export const { getLoginInfo } = authSlice.actions;

export default authSlice.reducer;
