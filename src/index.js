import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import App from './pages/App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Brand from "@fortawesome/free-brands-svg-icons";
import axios from 'axios';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
