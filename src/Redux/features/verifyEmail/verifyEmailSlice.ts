import { apiSlice } from "../api/apiSlice";

export const verifyEmailSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        verifyEmail: builder.mutation({
            query: (data) => ({
                url: '/verify_email_token/v2/',
                method: "POST",
                body: data,
            }),
        }),

    }),
});
export const { useVerifyEmailMutation } = verifyEmailSlice;