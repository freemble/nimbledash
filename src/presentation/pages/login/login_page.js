import React from "react";
import "./login_page.css";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { useNavigate } from "react-router";
import { DASHBOARD_PAGE_ROUTE } from "presentation/routes/route-paths";
import axios from "axios";
import { ACCESS_TOKEN } from "core/constants";

function LoginPage() {
  const navigateTo = useNavigate();

  const handleLoginSuccess = (response) => {
    console.log(response);
    navigateTo(DASHBOARD_PAGE_ROUTE);
  };

  const handleLoginFailure = () => {};

  const googleLogin = useGoogleLogin({
    // flow: "auth-code",
    onSuccess: async tokenResponse => {
      console.log(tokenResponse);
      
      localStorage.setItem(ACCESS_TOKEN,tokenResponse.access_token);

      const userInfo = await axios
        .get('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: { Authorization: `Bearer ${tokenResponse.access_token}` },
        })
        .then(res => res.data);

      console.log(userInfo.email);
    },
    onError: (errorResponse) => console.log(errorResponse),
  });

  return (
    <div className="loginPage">
      <img
        className="loginPage-main-logo"
        src="/assets/logo_expanded.png"
      ></img>
      <div className="loginPage-left-pane">
        <img className="loginPage-img" src="/assets/login_bg.jpg"></img>
      </div>
      <div className="loginPage-right-pane">
        <div className="center-vertically">
          <p className="heading2">Welcome back!</p>
          <p className="subHeading margin-top-8 force-one-line">
            Please login to proceed to the dashboard.
          </p>
          <div className="custom-loginPage-button clickable" onClick={() => googleLogin()}>
            <img className="buttonLogo" src="/assets/logo_google.png" height={"28px"}></img>
            <p className="buttonText">Login using Google</p>
          </div>
          {/* <div className="loginPage-button">
            <GoogleLogin
              theme="filled_blue"
              text="continue_with"
              auto_select={true}
              useOneTap={true}
              state_cookie_domain="single_host_origin"
              onSuccess={handleLoginSuccess}
              onError={handleLoginFailure}
            />
          </div> */}
        </div>
        <p className="clickableLink">Can't login? Contact us</p>
      </div>
    </div>
  );
}

export default LoginPage;
