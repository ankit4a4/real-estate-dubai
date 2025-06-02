import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import api from "../../../package.json";

export const ContactApi = createApi({
  reducerPath: "contact",
  baseQuery: fetchBaseQuery({
    baseUrl: api.baseUrl,
  }),
  endpoints: (builder) => ({
    setContact: builder.mutation({
      query: (formData) => ({
        url: "/comment/addComment",
        method: "POST",
        body: {
          fullName: formData.name,
          email: formData.email,
          phoneNumber: formData.phone,
          comment: formData.message,
          serviceType: formData.subject,
          propertyId: formData?.propertyId,
          blogId: formData?.blogId,
        },
      }),
    }),

    ////////////////// add SubScribe //////////////////////

    addSubscribe: builder.mutation({
      query: (email) => ({
        url: "/subscription/addSubscription",
        method: "POST",
        body: {
          email: email,
        },
      }),
    }),
  }),
  
});

export const { useSetContactMutation, useAddSubscribeMutation  } = ContactApi;
