import * as React from 'react';
import { render } from 'react-dom';
const { AppContainer } = require('react-hot-loader');

import { FrontPage } from 'containers/FrontPage';

declare var module: { hot: any };

const rootEl = document.getElementById('app');

render(
  <AppContainer>
    <FrontPage />
  </AppContainer>,
  rootEl
)

if (module.hot) {
  module.hot.accept('./containers/FrontPage', () => {
    const NextApp = require('./containers/FrontPage').default;

    render(
      <AppContainer>
         <NextApp />
      </AppContainer>,
      rootEl
    )
  })
}