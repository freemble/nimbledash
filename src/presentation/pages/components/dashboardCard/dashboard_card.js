import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import "./dashboard_card.css";

function DashboardCard(props) {
  var cardIconAddress = props.cardIconAddress;
  var cardInfoTitle = props.cardInfoTitle;
  var cardInfoSubtitle = props.cardInfoSubtitle;
  var cardText = props.cardText;
  var cardSubText = props.cardSubText;

  return (
    <>
      <div className="number-card">
        <div className="heading-row">
          <img className="card-icon" src={cardIconAddress}></img>
          <div className="card-info">
            <p className="bodyText">{cardInfoTitle}</p>
            <p className="subHeading2">{cardInfoSubtitle}</p>
          </div>
        </div>
        <p className="headline card-number">{cardText}</p>
        <p className="subHeading2 card-subtext">{cardSubText}</p>
      </div>
    </>
  );
}

export default DashboardCard;
