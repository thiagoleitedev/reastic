import { css } from 'styled-components';

export const space = (spacing: number) => 8 * spacing;

export const sourcePro = (fontSize: number, family: string = 'regular') => {
  return css`
    font-family: ${(fontFamily.sourcePro as any)[family]};
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
