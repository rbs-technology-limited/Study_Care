import { handleLogin } from "@/API_CALL/PostData/Login/Login";
import { saveDataInCookies } from "@/Redux/action";
// import { handleRegister } from "@/API_CALL/PostData/Register/Register";
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

// console.log(initialState);

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
    //for login
    builder.addCase(handleLogin.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      const value = action.payload;
      state.loginDetails = {
        ...state.loginDetails,
        isLogin: true,
      };
      // localStorage.setItem(
      //   "userInfo",
      //   JSON.stringify({
      //     ...value,
      //     isLogin: true,
      //   })
      // );
      //save data also in cookies for refresh token httpOnly

      saveDataInCookies({
        data: value,
      });
    });
    builder.addCase(handleLogin.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export const { getLoginInfo } = authSlice.actions;

export default authSlice.reducer;
