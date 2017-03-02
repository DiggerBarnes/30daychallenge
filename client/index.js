import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router/lib/Router';
import hashHistory from 'react-router/lib/hashHistory';

import dependencies from './dependencies';
import routes from './routes';


const App = <Router history={hashHistory} routes={routes} />;

ReactDOM.render(App, document.getElementById('root'));
