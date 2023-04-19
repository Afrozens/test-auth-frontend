import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

//generar una peticion
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:5000/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.userToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getDetails: build.query({
      query: () => ({
        url: 'api/user/profile',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDetailsQuery } = userApi;
