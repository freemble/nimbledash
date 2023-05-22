import React, { useEffect } from "react";
import "./admin_page.css";
import DropdownComponent from "presentation/components/dropdownMenu/dropdown";

function AdminPage() {
  return (
    <div className="adminPage">
      <div className="admin-page-left-pane">
        <div className="page-title">
          <p className="heading3">Dashboard</p>
          <p className="subHeading">Live Analytical Updates.</p>
        </div>

        <p className="heading4 pane-title">Your uploads.</p>
        <div className="model-holder-card">
          <div className="left-content">
            <p className="heading5">nadaan_parindey</p>
            <p className="subHeading3">v4.0</p>
          </div>
          <div className="right-content">
            <img src="/assets/icons/download_model.svg"></img>
          </div>
        </div>

        <div className="model-holder-card">
          <div className="left-content">
            <p className="heading5">nadaan_parindey</p>
            <p className="subHeading3">v4.0</p>
          </div>
          <div className="right-content">
            <img src="/assets/icons/download_model.svg"></img>
          </div>
        </div>

        <div className="model-holder-card">
          <div className="left-content">
            <p className="heading5">nadaan_parindey</p>
            <p className="subHeading3">v4.0</p>
          </div>
          <div className="right-content">
            <img src="/assets/icons/download_model.svg"></img>
          </div>
        </div>
      </div>

      <div className="divider"></div>

      <div className="admin-page-right-pane">
      <div className="page-title invisible">
          <p className="heading3 invisible">Dashboard</p>
          <p className="subHeading invisible">Live Analytical Updates.</p>
        </div>

        <p className="heading4">New upload.</p>
        
        <div className="upload-card-grid">
          <div className="upload-card">
          <div className="upload-card-content">
          <img src="/assets/icons/upload.svg"></img>
            <p className="heading6 margin-top-8">Upload Model</p>
            <p className="subHeading2">Max upload size is 20 MBs</p>
          </div>
          </div>
          <div className="upload-card">
          <div className="upload-card-content">
          <img src="/assets/icons/upload.svg"></img>
            <p className="heading6 margin-top-8">Upload Config</p>
            <p className="subHeading2">Max upload size is 1 MB</p>
          </div>
          </div>
            <DropdownComponent itemList={["Select Upload Type","some"]} customClass={"model-upload-custom-dropdown"}></DropdownComponent>
            <DropdownComponent itemList={["Select Model","some"]} customClass={"model-upload-custom-dropdown"}></DropdownComponent>
        </div>
        <div className="upload-button">
            <p className="buttonText center-text">Upload</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
