import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, Router, Link, hashHistory} from 'react-router';

import Home from './components/home.js';
import BookListing from './components/BookListing';
import BookDetail from './components/BookDetail';

export default class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <header>
          Bookstore
          <ul>
            <li>
              <Link to="/">Homepage</Link>
            </li>
            <li>
              <Link to="/books">Book listing</Link>
            </li>
          </ul>
        </header>
        <hr/>
        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

App.propTypes = {};

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="/books" component={BookListing}></Route>
      <Route path="/books/:detail" component={BookDetail}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
