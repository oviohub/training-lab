import React, { useEffect } from 'react';
import { withStyles } from '@material-ui/core';

import { draw } from '../utils/draw-functions';

const TreeFractal = ({ classes }) => {
  // ✅ Begin: Section to edit
  const canvasWidth = 1200;
  const canvasHeight = 1200;
  // ❌ End: Section to edit

  useEffect(() => {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    // ✅ Begin: Section to edit

    // draw(ctx, startX, startY, len, angle, branchWidth, color, leaf, shadow)
    // example draw(ctx, 10, 100, 120, 0, 10, 'darkBlue', true, false)
    draw(ctx, 600, 600, 120, 0, 10, 'darkBlue');

    // ❌ End: Section to edit

  }, []);

  return (
    <div className={classes.container}>
      <canvas className={classes.canvas} id="canvas" width={canvasWidth} height={canvasHeight} />
    </div>
  );
};

const styles = () => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  canvas: {
    border: '1px solid'
  },
})

export default withStyles(styles)(TreeFractal);
