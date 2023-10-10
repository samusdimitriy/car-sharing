import { configureStore } from "@reduxjs/toolkit";
import { advertsApiSlice } from "./adverts/advertsSlice";
import { filtersReducer } from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    [advertsApiSlice.reducerPath]: advertsApiSlice.reducer,
    filters: filtersReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    advertsApiSlice.middleware,
  ],
});
