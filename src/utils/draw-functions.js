// https://progur.com/2016/10/procedural-generation-create-fractal-trees-javascript.html

import { colors } from '../constants';

export function draw(ctx, startX, startY, len, angle, branchWidth = 10, color, leaf, shadow) {
  ctx.beginPath();
  ctx.save();
  ctx.lineWidth = branchWidth;

  ctx.strokeStyle = colors[color] || 'black';
  ctx.fillStyle = colors[color] || 'black';

  if (shadow) {
    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(0,0,0,0.8)";
  }

  ctx.translate(startX, startY);
  ctx.rotate(angle * Math.PI/180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -len);
  ctx.stroke();

  if(len < 10) {

    if (leaf) {
      ctx.beginPath();
      ctx.arc(0, -len, 10, 0, Math.PI/2);
      ctx.fill();
    }


    ctx.restore();
    return;
  }

  draw(ctx, 0, -len, len*0.8, -15, branchWidth * 0.8, color, leaf, shadow);
  draw(ctx, 0, -len, len*0.8, 15, branchWidth * 0.8, color, leaf, shadow);

  ctx.restore();
}
