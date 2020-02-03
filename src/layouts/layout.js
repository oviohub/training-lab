/**
 * The Layout component just add a theme to the website
 * ❌ No need to edit ❌
 */

import React from 'react';
import PropTypes from 'prop-types';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import './layout.css';
import { colors } from '../constants';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: `${colors.white}`,
    },
    secondary: {
      main: `${colors.darkBlue}`,
    },
    text: {
      primary: colors.darkBlue,
      secondary: colors.orange,
    },
  },
});

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <main>{children}</main>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
