import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Location from './pages/Location';
import Contest from './pages/Contest';
import Askus from './pages/Askus';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/gallery' component={Gallery}></Route>
      <Route exact path='/location' component={Location}></Route>
      <Route exact path='/contest' component={Contest}></Route>
      <Route exact path='/askus' component={Askus}></Route>
    </Switch>
  );
}

export default Main;
