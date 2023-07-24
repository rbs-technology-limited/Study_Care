import { callAction } from "@/Global/(ApiCalingFunc)/CallAction/callAction";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const refreshToken = createAsyncThunk(
  "posts/refreshToken",
  async (initialPost: any) => {
    // const response = await callAction("token_refresh/", {
    //   body: initialPost,
    // });
    // // console.log(response);
    // return response;
    const response = await apiRequestWithRetry(initialPost);
    return response;
  }
);
const apiRequestWithRetry = async (config: any, retryCount = 0) => {
  try {
    if (config.status === 401 && retryCount < 3) {
      const response = await callAction("token_refresh/", {
        body: config.refreshToken,
      });
      return response;
    }
  } catch (error) {
    return console.log(error);
  }
};
