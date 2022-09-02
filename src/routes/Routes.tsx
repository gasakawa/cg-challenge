import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Workout from '../pages/Workout';

const Routes = () => {
  return (
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/workout/:id' component={Workout} />
    </Router>
  );
};

export default Routes;
