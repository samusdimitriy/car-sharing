import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advertsApiSlice = createApi({
  reducerPath: 'advert',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://647dc2cfaf984710854a42ef.mockapi.io',
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getAdverts: builder.query({
      query: () => '/advert',
      providesTags: ['Advert'],
    }),
    getAdvertById: builder.query({
      query: id => `/advert/${id}`,
      providesTags: ['Advert'],
    }),
    updateFavoriteAdvertById: builder.mutation({
      query: fields => ({
        url: `/advert/${fields.id}`,
        method: 'PUT',
        body: fields,
      }),
      invalidatesTags: ['Advert'],
    }),
  }),
});

export const {
  useGetAdvertsQuery,
  useGetAdvertByIdQuery,
  useUpdateFavoriteAdvertByIdMutation,
} = advertsApiSlice;
