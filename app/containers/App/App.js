/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from 'containers/HomePage/HomePage';
import DetailPage from 'containers/DetailPage/DetailPage';
import NotFoundPage from 'containers/NotFoundPage/NotFoundPage';
import Footer from 'components/Footer';

const App = () => (
  <>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/:uuid" component={DetailPage} />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </>
);

export default App;
