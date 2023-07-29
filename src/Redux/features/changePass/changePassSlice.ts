import { apiSlice } from "../api/apiSlice";

export const changePassSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        changePass: builder.mutation({
            query: (data) => ({
                url: '/password-change/',
                method: "POST",
                body: data,
            }),
        }),

    }),
});
export const { useChangePassMutation } = changePassSlice;