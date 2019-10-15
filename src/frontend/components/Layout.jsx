import React from 'react';

const Layout = ({ children }) => (
  <>
    <div>Header</div>
    <div>{children}</div>
    <div>Footer</div>
  </>
);

export default Layout;
