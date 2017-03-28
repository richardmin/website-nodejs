import * as React from 'react';
import { render } from 'react-dom';
const { AppContainer } = require('react-hot-loader');
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import routes from 'routes';
declare var module: { hot: any };

const rootEl = document.getElementById('app');

require("./css/frontpage.scss");

render(
  <AppContainer>
    <Router>
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
        <Router>
            {newRoutes}
        </Router>
      </AppContainer>,
      rootEl
    )
  });
}