import React from 'react';
import Route from 'react-router/lib/Route';


const routes = (
  <div>
    <Route path="/" component={require('./containers/home').default} />
    <Route path="/settings" component={require('./containers/settings').default} />
    <Route path="*" component={require('./containers/error_404').default} />
  </div>
);

export default routes;
