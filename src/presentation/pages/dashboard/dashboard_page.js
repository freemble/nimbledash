import React, { useEffect } from "react";
import "./dashboard_page.css";
import "react-dropdown/style.css";
import DropdownComponent from "../../components/dropdownMenu/dropdown";
import Dropdown from "react-bootstrap/Dropdown";
import { DropdownButton, SplitButton, ButtonGroup } from "react-bootstrap";
import { useState } from "react";
import DashboardCard from "../../components/dashboardCard/dashboard_card";
import AnalyticsLineChart from "../../components/charts/line_chart";
import PieChartComponent from "../../components/charts/pie_chart";
import AnalyticsPieChart from "../../components/charts/pie_chart";
import AnalyticsRadarChart from "../../components/charts/radar_chart";
import InputModal from "../../components/inputModal/inputModal";
import { getRequest } from "data/remote_datasource";

function DashboardPage() {
  var [totalInferences, setTotalInferences] = useState(0);
  var [totalErrors, setTotalErrors] = useState(0);
  var [averageInferences, setAverageInferences] = useState(0);
  var [averageLatency, setAverageLatency] = useState(0);
  var [latencyTrends, setLatencyTrends] = useState({});
  var [totalInferencesTrends, setTotalInferencesTrends] = useState({});
  var [activeUsersTrends, setActiveUsersTrends] = useState({});

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

  useEffect(() => {
    if (clientID != "N/A") {
      fetchRemoteData();
    }
  }, [clientID]);

  const fetchRemoteData = async () => {
    var res = await getRequest("agg");
    setTotalInferences(res["total_inferences"]);
    setTotalErrors(res["total_errors"]);
    setAverageInferences(res["avg_inferences"]);
    setAverageLatency(res["avg_latency"]);
    setLatencyTrends(res["latency_trends"]);
    setTotalInferencesTrends(res["total_inferences_trends"]);
    setActiveUsersTrends(res["active_users_trends"]);

    console.log(res);
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
          <DropdownComponent itemList={modelIdList} customClass={"custom-dropdown"}></DropdownComponent>
          <DropdownComponent itemList={modelVersionList} customClass={"custom-dropdown"}></DropdownComponent>
        </div>
        <div className="number-card-array">
          <DashboardCard
            cardIconAddress="/assets/icons/total_inferences.jpg"
            cardInfoTitle="Total Inferences"
            cardInfoSubtitle="Lifetime"
            cardText={totalInferences}
            cardSubText="calls made"
          ></DashboardCard>

          <div className="right-margin24"></div>

          <DashboardCard
            cardIconAddress="/assets/icons/total_error.jpg"
            cardInfoTitle="Total Errors"
            cardInfoSubtitle="Lifetime"
            cardText={totalErrors}
            cardSubText="calls made"
          ></DashboardCard>

          <div className="right-margin24"></div>

          <DashboardCard
            cardIconAddress="/assets/icons/avg_inferences.jpg"
            cardInfoTitle="Average Inferences"
            cardInfoSubtitle="Per Day"
            cardText={averageInferences}
            cardSubText="calls made"
          ></DashboardCard>

          <div className="right-margin24"></div>

          <DashboardCard
            cardIconAddress="/assets/icons/avg_latency.jpg"
            cardInfoTitle="Average Latency"
            cardInfoSubtitle="Per Day"
            cardText={averageLatency}
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
          <AnalyticsLineChart trends={latencyTrends}></AnalyticsLineChart>
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
            <AnalyticsPieChart
              trends={totalInferencesTrends}
            ></AnalyticsPieChart>
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
            <AnalyticsRadarChart
              trends={activeUsersTrends}
            ></AnalyticsRadarChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
