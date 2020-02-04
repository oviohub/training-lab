/**
 * Block component documentation:
 * This component display a block with a background color and containing a geometric shape
 * @param size The size of the block (a number from 0 to 12)
 * @param backgroundColor The background color of the block
 * @param shape The shape ("circle", "rectangle", "ellipse", "line" or "triangle") of
 *              the Geometric Objects contained in the block
 * @param shapeColor The color of shape contained in the block
 * Available colors are located in 'src/constants.js'
 */

import React from 'react';
import classnames from 'classnames';
import { mapValues } from 'lodash';
import { Grid, withStyles } from '@material-ui/core';

import GeometricObjects from './ui/GeometricObjects';
import { colors } from '../constants';

const Block = ({ backgroundColor, size, classes, ...props }) => (
  <Grid
    item
    xs={size || 12}
    className={classnames(classes.container, classes[backgroundColor || 'darkBlue'])}
  >
    <GeometricObjects {...props} />
  </Grid>
);

const style = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 250,
  },
  ...(mapValues(colors, (color) => ({
    backgroundColor: color,
  }))),
});

export default withStyles(style)(Block);
