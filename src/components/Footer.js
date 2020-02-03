/**
 * The Footer of the website
 * ❌ No need to edit ❌
 */

import React from 'react';
import { withStyles } from '@material-ui/core';

const Footer = ({ classes }) => (
  <footer className={classes.footer}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
);

const styles = () => ({
  footer: {
    marginTop: 64,
  },
});

export default withStyles(styles)(Footer);
