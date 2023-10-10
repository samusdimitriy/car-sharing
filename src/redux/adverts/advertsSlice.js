import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advertsApiSlice = createApi({
  reducerPath: 'adverts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65211ea0a4199548356cd1f2.mockapi.io',
  }),
  tagTypes: ['Advert'],
  endpoints: builder => ({
    getAdverts: builder.query({
      query: () => '/adverts',
      providesTags: ['Advert'],
    }),
    getAdvertById: builder.query({
      query: id => `/adverts/${id}`,
      providesTags: ['Advert'],
    }),
    updateFavoriteAdvertById: builder.mutation({
      query: fields => ({
        url: `/adverts/${fields.id}`,
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
