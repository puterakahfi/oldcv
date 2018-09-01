import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './layout/Layout';

import registerServiceWorker from './registerServiceWorker';
import {theme} from "./profile.json";

import App from './themes/default/App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
