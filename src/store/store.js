import { configureStore } from "@reduxjs/toolkit";
import { PropertyApi } from "./Slices/PropertySlice";
import { BlogApi } from "./Slices/Blog";
import { ContactApi } from "./Slices/Contact";

export const store = configureStore({
  reducer: {
    [PropertyApi.reducerPath]: PropertyApi.reducer,
    [BlogApi.reducerPath]: BlogApi.reducer,
    [ContactApi.reducerPath]: ContactApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(PropertyApi.middleware)
      .concat(BlogApi.middleware)
      .concat(ContactApi.middleware),
});
