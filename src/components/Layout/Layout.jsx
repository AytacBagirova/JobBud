import React from 'react';
import Header from '../Header/Header';

const Layout = ({children}) => {
    return (
      <div className="container-fluid p-3 justify-content-center h-100 min-vh-100 mt-3">
      {children}
      </div>
    );
};

export default Layout;