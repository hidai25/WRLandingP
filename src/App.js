import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages';
import SigninPage from './pages/signin';
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <Router basename="/WRLandingP">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
      </Switch>
      
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        cookieName="userAcceptedCookies"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150} // The number of days until the cookie expires
        onAccept={() => {
          // Code to run when consent is given, such as initializing Google Analytics
        }}
      >
        This website uses cookies to ensure you get the best experience on our website.
      </CookieConsent>
    </Router>
  );
}

export default App;
