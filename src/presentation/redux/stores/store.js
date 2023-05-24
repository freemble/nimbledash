import { configureStore } from "@reduxjs/toolkit";
import { loaderSlice } from "../slices/loaderSlice";
import { feedSlice } from "../slices/feedSlice";
import { dashboardSlice } from "../slices/dashboardSlice";

const store = configureStore({
  reducer: {
    loaderReducer: loaderSlice.reducer,
    feedReducer: feedSlice.reducer,
    dashboardReducer:dashboardSlice.reducer
  },
});

export default store;
export const loaderActions = loaderSlice.actions;
export const feedActions = feedSlice.actions;
export const dashboardActions = dashboardSlice.actions;
