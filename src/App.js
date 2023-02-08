import React from 'react';
import './App.css';


import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Router>
      
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Welcome" component={Welcome} exact />
      </Switch>
      
    </Router>

    
  );
}

export default App;

