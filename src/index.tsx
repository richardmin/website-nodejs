import * as React from 'react';
import { render } from 'react-dom';
const { AppContainer } = require('react-hot-loader');
import { Router, Route, Link, browserHistory } from 'react-router';

import routes from 'routes';
declare var module: { hot: any };

const rootEl = document.getElementById('app');


require("./css/main.scss");

render(
  <AppContainer>
    <Router history={browserHistory}>
        {routes}
    </Router>
  </AppContainer>,
  rootEl
);

if (module.hot) {
  module.hot.accept('routes', () => {
    const newRoutes = require('routes').default;

    render(
      <AppContainer>
        <Router history={browserHistory}>
            {newRoutes}
        </Router>
      </AppContainer>,
      rootEl
    )
  });
}