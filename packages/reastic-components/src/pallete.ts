import { css } from 'styled-components';

export const space = (spacing: number) => 8 * spacing;

export const sourcePro = (fontSize: number, family = 'regular') => {
  return css`
    font-family: ${fontFamily.sourcePro[family]};
    font-size: ${fontSize}px;
  `;
};

const fontFamily = {
  sourcePro: {
    regular: 'Source Sans Pro, sans-serif',
  },
};

export default {
  fontFamily: fontFamily.sourcePro.regular,
};
