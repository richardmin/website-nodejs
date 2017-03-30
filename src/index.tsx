import { AppContainer } from 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from 'App';


ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('App', () => {
    const NextApp = require('App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
