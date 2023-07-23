import { postCall } from "@/Global/(ApiCalingFunc)/PostCall/PostCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const handleLogin = createAsyncThunk(
  "posts/login",
  async (initialPost: any) => {
    const response = await postCall("login/", {
      body: initialPost,
    });
    // console.log(response)
    return response.post;
  }
);
