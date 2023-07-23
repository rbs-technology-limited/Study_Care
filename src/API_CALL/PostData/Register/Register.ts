import { postCall } from "@/Global/(ApiCalingFunc)/PostCall/PostCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const handleRegister = createAsyncThunk(
    "posts/register",
    async (initialPost: any) => {
      const response = await postCall("register/", {
        body: initialPost,
      });
      return response.post;
    }
  );