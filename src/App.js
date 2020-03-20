import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'

function App() {
  return (
    <div className="App">
      <Router>
      <h1>Clean BnB</h1>
      <Route exact path="/" component={LandingPage}/>
      </Router>
    </div>
  );
}

export default App;
