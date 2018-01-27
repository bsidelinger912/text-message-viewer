import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const render = (NextApp) => {
  ReactDOM.render(<NextApp />, document.getElementById('react-root'));
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const app = require('./App').default; // eslint-disable-line global-require
    render(app);
  });
}
