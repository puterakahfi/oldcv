import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './themes/clean/layouts/App';

import * as Profile from './profile.json';


ReactDOM.render(<App  theme={Profile.theme} profile={Profile} />, document.getElementById('root'));
registerServiceWorker();
