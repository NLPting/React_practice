import React from 'react';
import ReactDOM from 'react-dom';
//import 'bootstrap/dist/css/bootstrap.css';
//import 'bootstrap/dist/css/bootstrap-theme.css';
import 'semantic-ui-css/semantic.min.css';
import LandingPage from './Components/LandingPage.jsx'

//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './css/them.css'

var serviceName = 'React'

ReactDOM.render(

    <LandingPage serviceName = {serviceName} />,document.getElementById('root')
//<App />, document.getElementById('root')
);
registerServiceWorker();
