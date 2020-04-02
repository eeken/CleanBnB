import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./sass/style.scss";
import LandingPage from "./Pages/LandingPage";
import Explore from "./Pages/Explore";
import About from "./Pages/About";
import Login from "./Pages/Login";
import ResidenceDetailsPage from "./Pages/ResidenceDetailsPage";
import ResidenceContextProvider from "./contexts/ResidenceContextProvider";
import ImageContextProvider from "./contexts/ImageContextProvider";

function App() {
  let menu = [
    { label: "Home", route: "/" },
    { label: "Explore", route: "/explore" },
    { label: "About", route: "/about" },
    { label: "Log In", route: "/login" }
  ];

  let userIsLoggedIn = false;

  return (
    <div className="App">
      <ResidenceContextProvider>
        <ImageContextProvider>
          <Router>
            <Header menuData={menu} userIsLoggedIn={userIsLoggedIn} className="asdf"/>
            <main className="mt-4">
              {/* <Router> */}
              <Switch>
                <Route exact path="/">
                  <LandingPage></LandingPage>
                </Route>
                <Route exact path="/explore">
                  <Explore></Explore>
                </Route>
                <Route
                  exact
                  path="/explore/destination=:destination?&guests=:numberofguests?"
                >
                  <Explore
                  key={window.location.pathname}></Explore>
                </Route>
                <Route exact path="/about">
                  <About></About>
                </Route>
                <Route exact path="/login">
                  <Login></Login>
                </Route>
                <Route path="/details/residence_id=:id?">
                  <ResidenceDetailsPage></ResidenceDetailsPage>
                </Route>
              </Switch>
            </main>
            <Footer className="footer" />
          </Router>
        </ImageContextProvider>
      </ResidenceContextProvider>
    </div>
  );
}

export default App;
