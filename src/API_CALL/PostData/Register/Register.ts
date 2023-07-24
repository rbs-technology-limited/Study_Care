import { callAction } from "@/Global/(ApiCalingFunc)/CallAction/callAction";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const handleRegister = createAsyncThunk(
  "posts/register",
  async (initialPost: any) => {
    const response = await callAction("register/", {
      body: initialPost,
    });
    return response;
  }
);
