import { Route, Routes } from "react-router";
import { ADMIN_PAGE_ROUTE, DASHBOARD_PAGE_ROUTE, LOGIN_PAGE_ROUTE } from "./route-paths";
import React from "react";
import LoginPage from "presentation/pages/login/login_page";
import DashboardPage from "presentation/pages/dashboard/dashboard_page";
import InputModal from "presentation/components/inputModal/inputModal";
import AdminPage from "presentation/pages/admin/admin_page";

function AppRouter(props) {
  return (
    <Routes>
      <Route path={LOGIN_PAGE_ROUTE} element={<LoginPage />} />
      <Route path={DASHBOARD_PAGE_ROUTE} element={<DashboardPage />} />
      <Route path={ADMIN_PAGE_ROUTE} element={<AdminPage />} />
      <Route path="/modal" element={<InputModal />} />
    </Routes>
  );
}

export default AppRouter;
