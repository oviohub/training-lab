/**
 * GeometricObjects component documentation:
 * This component display a geometric shape
 * @param shape The shape ("cirlce", "rectangle", "ellipse", "line" or "triangle") to display
 * @param shapeColor The color of shape
 * Available colors are located in 'src/constants.js'
 * You can provide more parameters based on http://rsamec.github.io/react-shapes/ documentation
 */

import React from 'react';
import { Circle, Rectangle, Ellipse, Line, Triangle } from 'react-shapes';

import { colors } from '../../constants';

const defaultsProps = {
  cirlce: {
    r: 125,
  },
  rectangle: {
    width: 250,
    height: 250,
  },
  ellipse: {
    rx: 110,
    ry: 125,
  },
  line: {
    x1: 50,
    y1: 50,
    x2: 50,
    y2: 300,
    strokeWidth: 25
  },
  triangle: {
    width: 250,
    height: 250,
  },
}

const GeometricObjects = ({ shape = 'cirlce', shapeColor, ...props }) => {
  const defaultProps = defaultsProps[shape];
  const shapeProps = Object.assign(
    {},
    defaultProps,
    {
      fill: { color: colors[shapeColor] || 'grey' },
      stroke: { color: colors[shapeColor] || 'grey' },
    },
    props,
  );
  switch (shape) {
    case 'circle':
      return <Circle {...shapeProps} />
    case 'rectangle':
      return <Rectangle {...shapeProps} />
    case 'ellipse':
      return <Ellipse {...shapeProps} />
    case 'line':
      return <Line {...shapeProps} />
    case 'triangle':
      return <Triangle {...shapeProps} />
    default:
      return <Circle {...shapeProps} />
  }
};

export default GeometricObjects;
