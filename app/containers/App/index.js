/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import GlobalStyle from '../../global-styles';

import Task1 from '../Task1';
// import Task2 from '../Task2';
// import Task3 from '../Task3';
// import Task4 from '../Task4';
// import Task5 from '../Task5';
// import Task6 from '../Task6';
// import Task7 from '../Task7';
// import Task8 from '../Task8';
// import Task9 from '../Task9';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/task-1" component={Task1} />
        {/* <Route exact path="/task-2" component={Task2} /> */}
        {/* <Route exact path="/task-3" component={Task3} /> */}
        {/* <Route exact path="/task-4" component={Task4} /> */}
        {/* <Route exact path="/task-5" component={Task5} /> */}
        {/* <Route exact path="/task-5" component={Task6} /> */}
        {/* <Route exact path="/task-5" component={Task7} /> */}
        {/* <Route exact path="/task-5" component={Task8} /> */}
        {/* <Route exact path="/task-5" component={Task9} /> */}
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
