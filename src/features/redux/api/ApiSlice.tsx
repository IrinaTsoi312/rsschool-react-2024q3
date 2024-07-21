import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../../../components/CardCollection/CardCollection.constants";

export const characterAPI = createApi({
  reducerPath: "characterAPI",
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (build) => ({
    fetchCharacters: build.query({
      query: (page = 1) => (`/?page=${page}`)
    })
  })
});
