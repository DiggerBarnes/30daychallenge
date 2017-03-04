import React from 'react';
import classNames from 'classnames';
import Meta from '../meta';
import Footer from '../footer';


const Layout = (props) => (
  <article {...props} className={classNames('c-layout', props.className)}>
    <Meta
      titleTemplate="%s • 30 Day Challenge"
      defaultTitle="30 Day Challenge"
    />
    {props.children}
    <Footer />
  </article>
);

export default Layout;
