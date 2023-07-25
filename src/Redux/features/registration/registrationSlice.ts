import { apiSlice } from "../api/apiSlice";

export const registrationSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register/",
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const { useRegisterMutation } = registrationSlice;
