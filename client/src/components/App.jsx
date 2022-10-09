import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './Home';
import Main from './Main';

export default function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Main">Main</Link>
      </div>

      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/Main">
          <Main />
        </Route>
      </Switch>
    </Router>
  )
}