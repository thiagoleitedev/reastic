import React from 'react';
import {
  space,
  color,
  fontSize,
  width,
  display,
  zIndex,
  position,
  verticalAlign,
  flexDirection,
  FlexDirectionProps,
  VerticalAlignProps,
  PositionProps,
  ZIndexProps,
  DisplayProps,
  ColorProps,
  TextColorProps,
  MarginProps,
} from 'styled-system';
import styled from 'styled-components';

type BoxProps = ColorProps &
  TextColorProps &
  MarginProps &
  DisplayProps &
  VerticalAlignProps &
  PositionProps &
  FlexDirectionProps &
  ZIndexProps;

const Box = styled.div<BoxProps>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${position}
  ${display}
  ${flexDirection}
  ${zIndex}
  ${verticalAlign}

`;

export default Box;
