/*    ----- LIBRARIES -----   */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/style.scss";

/*    ----- IMPORTS FROM /COMPONENTS -----   */
import Footer from "./components/Footer";
import Header from "./components/Header";

/*    ----- IMPORTS FROM /PAGES -----   */
import LandingPage from "./Pages/LandingPage";
import Explore from "./Pages/Explore";
import About from "./Pages/About";
import Login from "./Pages/Login";
import ResidenceDetails from "./Pages/ResidenceDetails";

function App() {
  /*    ----- MENU/ROUTES -----   */
  let menu = [
    { label: "Home", route: "/" },
    { label: "Explore", route: "/explore" },
    { label: "About", route: "/about" },
    { label: "Log In", route: "/login" }
  ];

  let userIsLoggedIn = false;

  return (
    <div className="App bg-image">
      <Router>
        <Header menuData={menu} userIsLoggedIn={userIsLoggedIn} />
        <main className="container mt-4">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/explore" component={Explore} />
            <Route exact path="/about" component={About} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/ResidenceDetails" component={ResidenceDetails} />
          </Switch>
        </main>
        <Footer className="footer" />
      </Router>
    </div>
  );
}
export default App;