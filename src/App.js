import React from "react";
import Footer from "./components/Footer";
import "./sass/style.scss";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={LandingPage} />
      </Router>
    </div>
  );
}

export default App;
