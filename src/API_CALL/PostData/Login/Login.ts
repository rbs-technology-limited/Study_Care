import { callAction } from "@/Global/(ApiCalingFunc)/CallAction/callAction";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const handleLogin = createAsyncThunk(
  "posts/login",
  async (initialPost: any) => {
    const response = await callAction("login/", {
      body: initialPost,
    });
    // console.log(response);
    return response;
  }
);
