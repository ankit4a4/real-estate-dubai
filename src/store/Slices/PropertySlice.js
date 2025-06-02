import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../../../package.json";

export const PropertyApi = createApi({
  reducerPath: "property",
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseUrl,
    tagType: "Property",
  }),

  endpoints: (builder) => ({
    getAllProperty: builder.query({
      query: ({ queryParams, page, limit,  }) => ({
        url: `/properties/getAllPropertiesWeb?page=${page}&category=${queryParams.category}&limit=${limit}&search=${queryParams.search}&emirates=${queryParams.emirates}&buy=${queryParams.buy}&rent=${queryParams.rent}&maxPrice=${queryParams.maxPrice}`,
        method: "GET",
      }),
    }),
    getSingleProperty: builder.query({
      query: ({ id }) => ({
        url: `/properties/getSinglePropertyWeb/${id}`,
        method: "GET",
      }),
    }),

    ///////////////////// Get All Gallery //////////////////////////

    getGallery: builder.query({
      query: (page) => ({
        url: `/gallery/getGallery?page=${page}&limit=10`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllPropertyQuery,
  useGetSinglePropertyQuery,
  useGetGalleryQuery,
} = PropertyApi;
