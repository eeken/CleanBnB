import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Footer from './components/Footer';
import Header from './components/Header'
import './sass/style.scss'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage'

function App() {

  let menu = [
    { label: 'Home', route: '/' },
    { label: 'Explore', route: '/explore' },
    { label: 'About', route: '/about' },
    { label: 'Log In', route: '/login' },
  ];

  let userIsLoggedIn = false;

  return (
    <Router>
    <div className="App">
      <Header menuData={menu} userIsLoggedIn={userIsLoggedIn} />
      <main className="container mt-4">
          {/* <Router> */}
          <Switch>
            <Route exact path="/">Home</Route>
          </Switch>
      <h1>Clean BnB</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis dui id consequat aliquam. Quisque ut turpis porttitor, hendrerit urna ac, placerat nisl. Phasellus mattis id nisl nec aliquet. Morbi sit amet malesuada diam. Quisque in efficitur mi. Ut imperdiet magna vel fringilla accumsan. Nunc blandit vehicula ex, vel gravida mauris viverra et. Nam eget eleifend mauris, vitae elementum dolor. Fusce ullamcorper metus non massa hendrerit imperdiet. Curabitur ac ante in lectus elementum maximus in malesuada lectus. Phasellus tellus dui, ultrices ut nulla vitae, volutpat ornare dolor. Curabitur vehicula ex placerat mollis fringilla.</p>
        
      </main>
      <Footer/>
      {/* <Route exact path="/" component={LandingPage}/>
      </Router> */}
    </div>
    </Router>
  );
}

export default App;
