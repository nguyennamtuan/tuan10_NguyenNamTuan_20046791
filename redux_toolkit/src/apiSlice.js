
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6556cd42bd4bcef8b611a10d.mockapi.io' }),
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: (name) => name ? `/bai2?name=${name}` : '/screen2',
    }),
    addTask: builder.mutation({
      query: (newTask) => ({
        url: '/screen2',
        method: 'POST',
        body: newTask,
      }),
    }),
    deleteTask: builder.mutation({
      query: (id) => ({
        url: `/screen2/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const { useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation } = apiSlice;
