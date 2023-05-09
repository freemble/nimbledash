import React from "react";
import "./login_page.css";

function LoginPage() {
  return (
    <div className="loginPage">
      <img className="loginPage-main-logo" src="/assets/logo_expanded.png"></img>
      <div className="loginPage-left-pane">
        <img className="loginPage-img" src="/assets/login_bg.jpg"></img>
      </div>
      <div className="loginPage-right-pane">
        <div className="center-vertically">
          <p className="heading2">Welcome back!</p>
          <p className="subHeading margin-top-8 force-one-line">
            Please login to proceed to the dashboard.
          </p>
          <div className="loginPage-button">
            <img className="buttonLogo" src="/assets/logo_google.png"></img>
            <p className="buttonText">Login using Google</p>
          </div>
        </div>
        <p className="clickableLink">Can't login? Contact us</p>
      </div>
    </div>
  );
}

export default LoginPage;
