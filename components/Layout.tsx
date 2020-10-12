import React from 'react';
import LayoutCSS from './Layout.module.scss';

const Layout: React.FC = ({ children }) => {
  return <div className={LayoutCSS.container}>{children}</div>;
};

export default Layout;
