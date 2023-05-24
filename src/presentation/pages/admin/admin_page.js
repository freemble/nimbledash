import React, { useEffect, useState } from "react";
import "./admin_page.css";
import DropdownComponent from "presentation/components/dropdownMenu/dropdown";
import SideBar from "presentation/components/sideBar/side_bar";
import { useFilePicker } from "use-file-picker";
import { encode as base64_encode } from "base-64";
import { Buffer } from "buffer";
import { Base64 } from "js-base64";
import { useSelector } from "react-redux";
import { ACCESS_TOKEN, CLIENT_ID, USER_EMAIL } from "core/constants";
import axios from "axios";
import { toast } from "react-toastify";

function AdminPage() {
  var modelContentBase64 = "";
  var modelConfigJson = {};
  const uploadType = ["New Model", "Build", "Update", "Fix"];
  const [selectedUploadTypeIndex, setSelectedUploadTypeIndex] = useState(0);
  const [selectedModelIndex, setSelectedModelIndex] = useState(0);
  const [modelList, setModelList] = useState([]);
  const [openFileSelector, { filesContent, loading }] = useFilePicker({
    accept: [".onnx", ".json"],
    readAs: "ArrayBuffer",
    multiple: true,
    limitFilesConfig: { max: 2, min: 2 },
  });
  const [openConfigSelector] = useFilePicker({
    accept: ".json",
    readAs: "Text",
    multiple: false,
  });

  useEffect(() => {
    fetchModelList();
  }, []);

  const fetchModelList = async () => {
    await axios
      .get("http://localhost:8010/proxy/mds/api/v1/admin/models", {
        headers: {
          clientid: localStorage.getItem(CLIENT_ID),
          tokenid: localStorage.getItem(USER_EMAIL),
          SsoToken: localStorage.getItem(ACCESS_TOKEN),
        },
      })
      .then((res) => {
        setModelList(res.data.models);
      })
      .catch((e) => {
        console.log(e);
        var errorDescription = e.response.data?.error?.description;
        if (errorDescription != null) toast.error(errorDescription);
        else toast.error("Something Went Wrong.");
      });
  };

  filesContent.map((file, index) => {
    if (file["name"].includes(".onnx")) {
      const binary8 = new Uint8Array(file.content);
      modelContentBase64 = Buffer.from(binary8).toString("base64");
    } else {
      modelConfigJson = JSON.parse(new TextDecoder().decode(file.content))
      console.log(modelConfigJson);
    }
  });

  const uploadModel = async () => {
    const modelName = document.getElementById("modelNameInput").value;
    if (modelContentBase64 == "") {
      toast.error("Please select a valid model");
    } else if (Object.keys(modelConfigJson).length == 0) {
      toast.error("Please select a valid model config");
    } else {
      if (selectedUploadTypeIndex == 0) {
        if (modelName == null || modelName == "") {
          toast.error("Please enter a valid model name");
        } else {
          await axios
            .post(
              "http://localhost:8010/proxy/mds/api/v1/admin/model",
              {
                modelConfig: modelConfigJson,
                modelName: modelName,
                model: modelContentBase64,
              },
              {
                headers: {
                  clientid: localStorage.getItem(CLIENT_ID),
                  tokenid: localStorage.getItem(USER_EMAIL),
                  SsoToken: localStorage.getItem(ACCESS_TOKEN),
                },
              }
            )
            .then((res) => {
              toast.success("Model uploaded successfully")
            })
            .catch((e) => {
              console.log(e);
              var errorDescription = e.response.data?.error?.description;
              if (errorDescription != null) toast.error(errorDescription);
              else toast.error("Something Went Wrong.");
            });
        }
      }
    }
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

        {modelList.map((item, index) => (
          <div className="model-holder-card">
            <div className="left-content">
              <p className="heading5">{item.modelName}</p>
              <p className="subHeading3">{item.modelVersion}</p>
            </div>
            <div className="right-content">
              <img
                className="clickable"
                src="/assets/icons/download_model.svg"
              ></img>
            </div>
          </div>
        ))}
      </div>

      <div className="divider flex-vertical"></div>

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
                await openFileSelector();
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
          <div
            className="upload-card clickable"
            onClick={async () => {
              try {
                await openConfigSelector();
              } catch (err) {
                console.log("can't open file picker.");
              }
            }}
          >
            <div className="upload-card-content">
              <img src="/assets/icons/upload.svg"></img>
              <p className="heading6 margin-top-8">Upload Config</p>
              <p className="subHeading2">Max upload size is 1 MB</p>
            </div>
          </div>
          <DropdownComponent
            selectedItemIndex={selectedUploadTypeIndex}
            onChangeCallback={(selectedIndex) => {
              setSelectedUploadTypeIndex(selectedIndex);
            }}
            itemList={uploadType}
            customClass={"model-upload-custom-dropdown"}
          ></DropdownComponent>
          {selectedUploadTypeIndex == 0 && (
            <form className="expanded">
              <input
                id="modelNameInput"
                type="text"
                name="clientID"
                className="model-upload-custom-dropdown"
                placeholder={"Enter Model Name"}
              />
            </form>
          )}
          {selectedUploadTypeIndex != 0 && (
            <DropdownComponent
              selectedItemIndex={selectedModelIndex}
              itemList={modelList.map((item) => item.modelName)}
              onChangeCallback={(selectedIndex) => {
                setSelectedModelIndex(selectedIndex);
              }}
              customClass={"model-upload-custom-dropdown"}
            ></DropdownComponent>
          )}
        </div>
        <div className="upload-button clickable" onClick={uploadModel}>
          <p className="buttonText center-text">Upload</p>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
