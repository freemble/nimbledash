import React, { useState } from "react";
import "./admin_page.css";
import DropdownComponent from "presentation/components/dropdownMenu/dropdown";
import SideBar from "presentation/components/sideBar/side_bar";
import { useFilePicker } from "use-file-picker";
import {encode as base64_encode} from 'base-64';

function AdminPage() {
  var modelName = "";
  var modelContentBase64 = "";
  var modelConfigJson = {};
  const uploadType = ["New Model", "Build", "Update", "Fix"];
  const [selectedUploadType, setSelectedUploadType] = useState(uploadType[0]);
  const [openModelSelector, { filesContent, loading }] = useFilePicker({
    accept: ".onnx",
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (filesContent.length != 0) {
    console.log(filesContent[0]["content"]);
    modelContentBase64 = base64_encode(filesContent[0]["content"]);
    console.log(modelContentBase64);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var userInput = event.target.clientID.value;
    if (userInput == "") {
      //   setModalErrorMessage("ClientID can't be null");
    } else {
      //   getInputCallback(userInput);
    }
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <div className="adminPage">
      <SideBar></SideBar>

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
            <img className="clickable" src="/assets/icons/download_model.svg"></img>
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
          <div
            className="upload-card clickable"
            onClick={async () => {
              try {
                const selectedModel = await openModelSelector();
                // console.log(selectedModel);
                // console.log(filesContent);
              } catch (err) {
                console.log("can't open file picker.");
              }
            }}
          >
            <div className="upload-card-content">
              <img src="/assets/icons/upload.svg"></img>
              <p className="heading6 margin-top-8">Upload Model</p>
              <p className="subHeading2">Max upload size is 20 MBs</p>
            </div>
          </div>
          <div className="upload-card clickable">
            <div className="upload-card-content">
              <img src="/assets/icons/upload.svg"></img>
              <p className="heading6 margin-top-8">Upload Config</p>
              <p className="subHeading2">Max upload size is 1 MB</p>
            </div>
          </div>
          <DropdownComponent
            onChangeCallback={(selectedIndex) => {
              setSelectedUploadType(uploadType[selectedIndex]);
            }}
            itemList={uploadType}
            customClass={"model-upload-custom-dropdown"}
          ></DropdownComponent>
          {selectedUploadType == "New Model" && (
            <form className="expanded" onSubmit={handleSubmit}>
              <input
                type="text"
                name="clientID"
                className="model-upload-custom-dropdown"
                placeholder={"Enter Model Name"}
              />
            </form>
          )}
          {selectedUploadType != "New Model" && (
            <DropdownComponent
              itemList={["Select Model", "some"]}
              customClass={"model-upload-custom-dropdown"}
            ></DropdownComponent>
          )}
        </div>
        <div className="upload-button clickable">
          <p className="buttonText center-text">Upload</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
