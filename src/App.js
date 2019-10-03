import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import { compose } from 'recompose';
import Inputs from './components/Inputs'
const mapStateToProps = ({
  placeInfo,
  errors
}) => ({
  placeInfo,
  errors
});

export function TodoApp(props) {
  return (
    <div className="todo-app">
      {JSON.stringify(props.placeInfo)}
      <Inputs  />
      {
        props.errors.has('get-place-info-error')
        ? (
          <div>
            {props.errors.get('get-place-info-error')}
          </div>
        ) : null
      }
       <Router>
      <div>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <hr />
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </div>
    </Router>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}


export const App = compose(
  connect(mapStateToProps),
)(TodoApp);
