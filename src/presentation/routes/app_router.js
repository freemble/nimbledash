import { Route, Routes } from "react-router";
import { DASHBOARD_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from "./route-paths";
import React from "react";
import LoginPage from "presentation/pages/login/login_page";
import DashboardPage from "presentation/pages/dashboard/dashboard_page";

function AppRouter(props) {
  return (
    <Routes>
      <Route path={LOGIN_PAGE_ROUTE} element={<LoginPage />} />
      <Route path={DASHBOARD_PAGE_ROUTE} element={<DashboardPage />} />
    </Routes>
  );
}

export default AppRouter;
