import { apiSlice } from "../api/apiSlice";

export const forgetPassSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        forgetPass: builder.mutation({
            query: (data) => ({
                url: '/verify_email_token/v2/',
                method: "POST",
                body: data,
            }),
        }),

    }),
});
export const { useForgetPassMutation } = forgetPassSlice;