import { createSlice } from "@reduxjs/toolkit";
import { dashboardInitState } from "../initState/dashboardInitState";
import { dashboardReducer } from "../reducers/dashboardReducer";

export const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState: dashboardInitState,
  reducers: dashboardReducer,
});
