import { postCall } from "@/Global/(ApiCalingFunc)/PostCall/PostCall";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const handleLogin = createAsyncThunk(
  "posts/login",
  async (initialPost: any) => {
    const response = await postCall("login/", {
      body: initialPost,
    });
    // console.log(response);
    return response;
  }
);

// if (response.status === 200) {
//   return response;
// }
// return rejectWithValue(response);
