import { handleLogin } from "@/API_CALL/PostData/Login/Login";
// import { getTokenCookies } from "@/Global/(cockies)/getCoockies";
import { saveDataInCookies } from "@/Global/(cockies)/setCookies";
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
  usersInfo: any;
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
  usersInfo: {},
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
    getUserInfo: (state, action: PayloadAction<any>) => {
      state.usersInfo = {
        ...state.usersInfo,
        ...action.payload,
      };

      saveDataInCookies({
        data: state.usersInfo,
        name: "userData",
      });
    },
    logout: (state) => {
      state.usersInfo = {};
      state.loginDetails = {
        username: "",
        password: "",
        isLogin: false,
      };
      saveDataInCookies({
        data: {
          isLogin: false,
        },
      });
    },
  },
  extraReducers: (builder) => {
    //for login
    builder.addCase(handleLogin.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(handleLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      const value = {
        ...action.payload,
        isLogin: true,
      };
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
      state.loginDetails = {
        ...state.loginDetails,
        isLogin: false,
      };
      // localStorage.setItem(
      //   "userInfo",
      //   JSON.stringify({
      //     isLogin: false,
      //   })
      // );
      //save data also in cookies for refresh token httpOnly
      saveDataInCookies({
        data: {
          isLogin: false,
        },
      });
    });
  },
});

export const { getLoginInfo, getUserInfo, logout } = authSlice.actions;

export default authSlice.reducer;
