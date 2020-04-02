import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./sass/style.scss";
import LandingPage from "./Pages/LandingPage";
import Explore from "./Pages/Explore";
import About from "./Pages/About";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import ResidenceDetailsPage from "./Pages/ResidenceDetailsPage";
import ResidenceContextProvider from "./contexts/ResidenceContextProvider";
import ImageContextProvider from "./contexts/ImageContextProvider";

function App() {
  let menu = [
    { label: "Home", route: "/" },
    { label: "Explore", route: "/explore" },
    { label: "About", route: "/about" },
    { label: "Log In", route: "/login" },
    { label: "Register", route: "/register" }
  ];

  let userIsLoggedIn = false;

  return (
    <div className="App">
      <ResidenceContextProvider>
      <ImageContextProvider>
      <Router>
        <Header menuData={menu} userIsLoggedIn={userIsLoggedIn}/>
        <main className="mt-4">
          {/* <Router> */}
          <Switch>
            <Route exact path="/">
              <LandingPage></LandingPage>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
              <Explore></Explore>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login></Login>
                </Route>
                <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path={"/residence/:id"} component={ResidenceDetailsPage}>
              <ResidenceDetailsPage></ResidenceDetailsPage>
            </Route>
          </Switch>
        </main>
        <Footer className="footer"/>
      </Router>
      </ImageContextProvider>
                  path="/explore/destination=:destination?&guests=:numberofguests?"
      </ResidenceContextProvider>
    </div>
  );
}

export default App;
