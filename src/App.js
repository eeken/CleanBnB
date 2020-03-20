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
    { label: 'CLEANBNB', route: '/'}
  ];

  let userIsLoggedIn = false;

  return (
    <Router>
    <div className="App">
      <Header menuData={menu} userIsLoggedIn={userIsLoggedIn} />
      <main className="container">
      {/* <Router> */}
      <h1>Clean BnB</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lobortis dui id consequat aliquam. Quisque ut turpis porttitor, hendrerit urna ac, placerat nisl. Phasellus mattis id nisl nec aliquet. Morbi sit amet malesuada diam. Quisque in efficitur mi. Ut imperdiet magna vel fringilla accumsan. Nunc blandit vehicula ex, vel gravida mauris viverra et. Nam eget eleifend mauris, vitae elementum dolor. Fusce ullamcorper metus non massa hendrerit imperdiet. Curabitur ac ante in lectus elementum maximus in malesuada lectus. Phasellus tellus dui, ultrices ut nulla vitae, volutpat ornare dolor. Curabitur vehicula ex placerat mollis fringilla.
</p><p>
Phasellus congue porta purus, non dapibus urna. Sed egestas sollicitudin scelerisque. Morbi ligula augue, vehicula eu pellentesque quis, rutrum mattis libero. Sed viverra turpis et risus finibus, at ullamcorper risus vulputate. Cras sagittis maximus sapien, ac pharetra nisi fringilla sit amet. Cras diam metus, porttitor in sapien sed, venenatis egestas arcu. Etiam eget erat tortor. Aenean semper nunc metus, ut egestas magna dapibus non. Nam non nisl sit amet ligula ultricies sagittis vitae vitae diam. Etiam id maximus arcu. Nulla sit amet purus quam. Integer a tincidunt risus. Nullam bibendum bibendum ex quis interdum. Nulla a dignissim erat.
</p><p>
Pellentesque condimentum ultricies massa nec lobortis. Donec egestas sapien ut sapien sollicitudin, eu auctor lacus semper. Proin ac bibendum mauris, id gravida nunc. Cras condimentum congue mi id semper. Nulla condimentum, tellus id efficitur condimentum, dui quam ultrices erat, et porta magna mauris id justo. Etiam in ullamcorper est, a malesuada mi. Praesent non libero vel ante pulvinar dignissim. Sed dictum purus sit amet tincidunt condimentum. Aenean congue est ligula, at elementum ante sodales elementum. Quisque euismod in nisl at ornare. Fusce rutrum, felis vitae feugiat tristique, enim sapien tristique massa, sed porta neque diam eu magna. Etiam id scelerisque tortor.
</p><p>
Sed in ante in quam ullamcorper euismod. Suspendisse viverra rutrum est ac dapibus. Donec tempus arcu urna, a eleifend ipsum commodo quis. Integer pellentesque et turpis ac efficitur. Mauris eget metus at lectus venenatis posuere eu a dolor. Quisque fringilla mi sed justo mattis volutpat in in nibh. Suspendisse finibus urna eu metus semper, vel vestibulum elit iaculis. </p>
        
      </main>
      <Footer/>
      {/* <Route exact path="/" component={LandingPage}/>
      </Router> */}
    </div>
    </Router>
  );
}

export default App;
