import apiUrl from "@/Base/apiUrl";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: apiUrl }),
    tagTypes: [],
    endpoints: (builder) => ({}),
});