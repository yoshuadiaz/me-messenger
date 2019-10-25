import React from 'react';
import { GlobalStyles } from '../assets/styles/GlobalStyles';

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    <div>{children}</div>
  </>
);

export default Layout;
