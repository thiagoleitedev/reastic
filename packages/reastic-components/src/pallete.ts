import { css } from 'styled-components';

export const space = (spacing: number) => 8 * spacing;

const font = (fontSize: number) => {
  const fontFamily = {
    sourcePro: 'Source Sans Pro, sans-serif',
  };
  return css`
    font-family: ${fontFamily.sourcePro}};
    font-size: ${fontSize}px;
  `;
};

export default {
  font,
};
