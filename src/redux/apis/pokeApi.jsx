import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokeApi = createApi({
  reducerPath: "pokemons",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://pokeapi.co/api/v2",
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: (id) => `/pokemon?limit=10&offset=${id}`,
    }),
    getPokemonByName: builder.query({
      query: (name) => `/pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonByNameQuery } = pokeApi;
