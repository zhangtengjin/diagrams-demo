import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import DiagramsDemo from './DiagramsDemo';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
ReactDOM.render(
  // https://github.com/projectstorm/react-diagrams/issues/598
  // <React.StrictMode>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            {/* <Home /> */}
          <DiagramsDemo />
          </Route>
          <Route path="/about">
            {'about'}
          </Route>
          <Route path="/dashboard">
            {'dashboard'}
          </Route>
        </Switch>
      </div>
    </Router>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
