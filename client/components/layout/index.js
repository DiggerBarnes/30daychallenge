import React from 'react';
import classNames from 'classnames';
import Meta from '../meta';
import Link from '../link';
import NavLink from './nav_link';


const Layout = (props) => (
  <article {...props} className={classNames('c-layout', props.className)}>
    <Meta
      titleTemplate="%s • Windi"
      defaultTitle="Windi"
    />
      <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Link to="/" className="navbar-brand">Windi</Link>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/settings">Settings</NavLink>
          </div>
        </div>
      </nav>
      <div className="container">
        {props.children}
      </div>
  </article>
);

export default Layout;
