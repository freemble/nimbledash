import React, { useEffect } from "react";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-margin">
        <img className="sidebar-logo" src="/assets/logo.png"></img>
        <div className="sidebar-item sidebar-item-selected">
          <img
            className="sidebar-icon"
            src="/assets/icons/dashboard_selected.svg"
          ></img>
          <p className="sidebar-item-desc selected-desc">Dashboard</p>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-icon" src="/assets/icons/admin.svg"></img>
          <p className="sidebar-item-desc">Upload model</p>
        </div>
        <div className="sidebar-item">
          <img className="sidebar-icon" src="/assets/icons/logout.svg"></img>
          <p className="sidebar-item-desc">Logout</p>
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
}

export default SideBar;