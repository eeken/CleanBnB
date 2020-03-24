import React from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./sass/style.scss";
import LandingPage from "./Pages/LandingPage";
import Explore from "./Pages/Explore";
import About from "./Pages/About";
import Login from "./Pages/Login";

function App() {
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
        <Header menuData={menu} userIsLoggedIn={userIsLoggedIn} style={{height: '10vh'}} />
        <main className="container mt-4" style={{minHeight: '71vh'}}>
          {/* <Router> */}
          <Switch>
            <Route exact path="/">
              <LandingPage></LandingPage>
            </Route>
            <Route exact path="/explore">
              <Explore></Explore>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </main>
        <Footer className="footer" style={{height: '5vh'}}/>
      </Router>
  </div>
  );
}

export default App;
