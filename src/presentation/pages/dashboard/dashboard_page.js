import React from "react";
import "./dashboard_page.css";
import "react-dropdown/style.css";
import DropdownComponent from "../components/dropdownMenu/dropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton, SplitButton, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import DashboardCard from "../components/dashboardCard/dashboard_card";
import AnalyticsLineChart from "../components/charts/line_chart";
import PieChartComponent from "../components/charts/pie_chart";
import AnalyticsPieChart from "../components/charts/pie_chart";
import AnalyticsRadarChart from "../components/charts/radar_chart";
import InputModal from "../components/inputModal/inputModal";

function DashboardPage() {
  var modelIdList = [
    "All Models",
    "Nadaan Parindey",
    "om_prakash_mishra",
    "we_will_rock_you",
  ];
  var modelVersionList = ["v1.0.0", "v2.0.0", "v2.0.1", "v2.3.0"];
  var [isModalVisible, setModalVisiblity] = useState(true);
  var [clientID, setClientID] = useState("N/A");

  const handleClientIDChange = (input) => {
    setClientID(input);
    setModalVisiblity(false);
  };

  const closeModalCallback = () => {
    setModalVisiblity(false);
  };

  return (
    <div className="dashboardPage">
      {isModalVisible && (
        <InputModal
          initValue={clientID}
          getInputCallback={handleClientIDChange}
          closeModalCallback={closeModalCallback}
        ></InputModal>
      )}
      <div className="sidebar">
        <div className="sidebar-margin">
          <img className="sidebar-logo" src="/assets/logo.png"></img>
          <div className="sidebar-item sidebar-item-selected">
            <img
              className="sidebar-icon"
              src="/assets/icons/dashboard_selected.svg"
            ></img>
          </div>
          <div className="sidebar-item">
            <img className="sidebar-icon" src="/assets/icons/admin.svg"></img>
          </div>
          <div className="sidebar-item">
            <img className="sidebar-icon" src="/assets/icons/logout.svg"></img>
          </div>
        </div>
        <div className="divider"></div>
      </div>

      <div className="dashboard-content">
        <div className="page-title">
          <p className="heading3">Dashboard</p>
          <p className="subHeading">Live Analytical Updates.</p>
        </div>
        <div className="dropdown-array">
          <div
            className="clientID-selector"
            onClick={() => setModalVisiblity(true)}
          >
            <p className="buttonText spinner-text">{clientID}</p>
          </div>
          <DropdownComponent itemList={modelIdList}></DropdownComponent>
          <DropdownComponent itemList={modelVersionList}></DropdownComponent>
        </div>
        <div className="number-card-array">
          <DashboardCard
            cardIconAddress="/assets/icons/total_inferences.jpg"
            cardInfoTitle="Total Inferences"
            cardInfoSubtitle="Lifetime"
            cardText="584734"
            cardSubText="calls made"
          ></DashboardCard>

          <div className="right-margin24"></div>

          <DashboardCard
            cardIconAddress="/assets/icons/total_error.jpg"
            cardInfoTitle="Total Errors"
            cardInfoSubtitle="Lifetime"
            cardText="84"
            cardSubText="calls made"
          ></DashboardCard>

          <div className="right-margin24"></div>

          <DashboardCard
            cardIconAddress="/assets/icons/avg_inferences.jpg"
            cardInfoTitle="Average Inferences"
            cardInfoSubtitle="Per Day"
            cardText="98734"
            cardSubText="calls made"
          ></DashboardCard>

          <div className="right-margin24"></div>

          <DashboardCard
            cardIconAddress="/assets/icons/avg_latency.jpg"
            cardInfoTitle="Average Latency"
            cardInfoSubtitle="Per Day"
            cardText="11.847"
            cardSubText="milliseconds"
          ></DashboardCard>
        </div>

        <div className="graph-holder">
          <div className="heading-row">
            <img
              className="card-icon"
              src="/assets/icons/avg_latency.jpg"
            ></img>
            <div className="card-info">
              <p className="bodyText">Latency Trends</p>
              <p className="subHeading2">Last 20 Inferences</p>
            </div>
          </div>
          <AnalyticsLineChart></AnalyticsLineChart>
        </div>

        <div className="row-flex">
          <div className="pie-graph-holder">
            <div className="heading-row">
              <img
                className="card-icon"
                src="/assets/icons/total_inferences.jpg"
              ></img>
              <div className="card-info">
                <p className="bodyText">Total Inferences</p>
                <p className="subHeading2">
                  Comparing latest versions of all model
                </p>
              </div>
            </div>
            <AnalyticsPieChart></AnalyticsPieChart>
          </div>

          <div className="right-margin24"></div>

          <div className="pie-graph-holder">
            <div className="heading-row">
              <img
                className="card-icon"
                src="/assets/icons/active_users.jpg"
              ></img>
              <div className="card-info">
                <p className="bodyText">Active Users</p>
                <p className="subHeading2">Across all the live models</p>
              </div>
            </div>
            <AnalyticsRadarChart></AnalyticsRadarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
