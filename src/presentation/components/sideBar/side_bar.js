import { ACCESS_TOKEN, CLIENT_ID, USER_EMAIL } from "core/constants";
import {
  ADMIN_PAGE_ROUTE,
  DASHBOARD_PAGE_ROUTE,
} from "presentation/routes/route-paths";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function SideBar() {
  const navigateTo = useNavigate();
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    if (window.location.href.includes("/admin")) {
      setCurrentTab(1);
    }
    else{
      setCurrentTab(0);
    }
  });

  return (
    <div className="sidebar">
      <div className="sidebar-margin">
        <img className="sidebar-logo" src="/assets/logo.png"></img>
        <div
          className={
            (currentTab == 0 ? "sidebar-item-selected " : "") +
            "sidebar-item clickable"
          }
          onClick={() => {
            setCurrentTab(0);
            navigateTo(DASHBOARD_PAGE_ROUTE);
          }}
        >
          <img
            className="sidebar-icon"
            src={currentTab==0?"/assets/icons/dashboard_selected.svg":"/assets/icons/dashboard.svg"}
          ></img>
          <p className={(currentTab==0?"selected-desc ":"") + "sidebar-item-desc"}>Dashboard</p>
        </div>
        <div
          className={
            (currentTab == 1 ? "sidebar-item-selected " : "") +
            "sidebar-item clickable"
          }
          onClick={() => {
            setCurrentTab(1);
            navigateTo(ADMIN_PAGE_ROUTE);
          }}
        >
          <img className="sidebar-icon" src={currentTab==1?"/assets/icons/admin_selected.svg": "/assets/icons/admin.svg"}></img>
          <p className={(currentTab==1?"selected-desc ":"") + "sidebar-item-desc"}>Upload model</p>
        </div>
        <div
          className="sidebar-item"
          onClick={() => {
            localStorage.removeItem(ACCESS_TOKEN);
            localStorage.removeItem(USER_EMAIL);
            localStorage.removeItem(CLIENT_ID);
            window.location.reload();
          }}
        >
          <img className="sidebar-icon" src="/assets/icons/logout.svg"></img>
          <p className="sidebar-item-desc">Logout</p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default SideBar;
