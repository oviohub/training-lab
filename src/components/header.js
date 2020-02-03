/**
 * The header (including the Nav Bar) of the website.
 * ❌ No need to edit ❌
 */

import React from 'react';
import { Grid, AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
import { Link } from 'gatsby';

import Logo from './ui/Logo';

const pages = [
  { text: 'Home', path: '/' },
  { text: 'Fractal', path: '/fractal' },
  { text: 'Rank', path: '/rank' },
];

const Header = ({ classes }) => (
  <div className={classes.root}>
    <AppBar position="static">
      <Toolbar variant="dense">
        <Grid container>
          <Grid item xs={6}>
            <Logo />
          </Grid>

          <Grid item xs={6} className={classes.menu}>
            {pages.map(({ text, path }) => (
              <Link key={path} to={path} className={classes.menuItem}>
                <Typography>{text}</Typography>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  </div>
);

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  menu: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  menuItem: {
    margin: 16,
    textDecoration: 'none',
    color: theme.palette.secondary.main,
  },
});


export default withStyles(styles)(Header);
