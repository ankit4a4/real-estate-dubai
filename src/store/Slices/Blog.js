import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../../../package.json";

export const BlogApi = createApi({
  reducerPath: "blog",
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseUrl,
    tagType: "Property",
  }),

  endpoints: (builder) => ({
    getAllBlog: builder.query({
      query: (page) => ({
        url: `/blog/getAllBlogs?page=${page}&limit=10`,
        method: "GET",
      }),
    }),

    getSingleBlog: builder.query({
      query: ({ id }) => ({
        url: `/blog/getSingleBlog/${id}`,
        method: "GET",
      }),
    }),

    getBlogComments: builder.query({
      query: ({ id }) => ({
        url: `comment/getSingleBlogComments/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAllBlogQuery, useGetSingleBlogQuery , useGetBlogCommentsQuery } = BlogApi;
