import * as React from 'react';
import { render } from 'react-dom';
const { AppContainer } = require('react-hot-loader');
import { Router, Route, Link, browserHistory } from 'react-router';

// import { Front } from 'views/Front';
import routes from 'routes';
declare var module: { hot: any };

const rootEl = document.getElementById('app');

render(
  <Router history={browserHistory}>
      {routes}
  </Router>,
  rootEl
)
// render(
//   <AppContainer>
//     <Front />
//   </AppContainer>,
//   rootEl
// )

// if (module.hot) {
//   module.hot.accept('./views/Front', () => {
//     const NextApp = require('./views/Front').default;

//     render(
//       <AppContainer>
//          <NextApp />
//       </AppContainer>,
//       rootEl
//     )
//   })
// }