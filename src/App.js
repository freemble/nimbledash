import logo from "./logo.svg";
import "./App.css";
import AppRouter from "presentation/routes/app_router";
import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { loaderActions } from "presentation/redux/stores/store";
import { InfinitySpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import { ACCENT_COLOR } from "core/constants";

function App() {
  return (
    <GoogleOAuthProvider clientId="405865671851-44bn30c6pc9ltep4ikkquabb1o9ajah3.apps.googleusercontent.com">
      <div className="App">
        {useSelector(
          (state) =>
            // @ts-ignore
            state.loaderReducer.isLoading
        ) && (
          <div className="loader-wrapper">
            <InfinitySpin color={ACCENT_COLOR}></InfinitySpin>
          </div>
        )}
        <AppRouter></AppRouter>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
