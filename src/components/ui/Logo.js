/**
 * The logo of the website
 * ❌ No need to edit ❌
 */

import React from 'react';
import { withStyles } from '@material-ui/core';
import { Link } from 'gatsby';

import logo from '../../images/logo.svg';

const Logo = ({ classes }) => (
  <div className={classes.root}>
    <Link to="/">
      <img className={classes.logo} src={logo} alt="Ovio lab logo" />
    </Link>
  </div>
);

const styles = (theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
  },
  logo: {
    margin: 'auto',
  },
});


export default withStyles(styles)(Logo);
