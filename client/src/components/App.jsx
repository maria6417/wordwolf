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
      <div>
        <Link to={`sample/1`}>Click Here</Link>
        <Link to={`home`}>Home</Link>
      </div>
  )
}