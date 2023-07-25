import apiUrl from "@/Base/apiUrl";
import {getTokenCookies} from "@/Global/(cockies)/getCoockies";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: apiUrl,
        prepareHeaders: async (headers, {getState, endpoint}) => {
            const token = await getTokenCookies();
            if (token) {
                headers.set("Authorization", `Bearer ${token.accessToken}`);
            }
            return headers;
        },
    }) as any,
    tagTypes: [],
    endpoints: (builder) => ({}),
});