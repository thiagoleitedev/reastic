import React from 'react';
import { Button as ReakitButton } from 'reakit/Button';
import styled from 'styled-components';
import { space, sourcePro } from '../pallete';

export const Button = (props: any) => <StyledButton>asdasd</StyledButton>;

export const StyledButton = styled(ReakitButton)`
  background-image: linear-gradient(to right, rgb(102, 229, 181), rgb(41, 224, 105));
  color: rgb(255, 255, 255);
  box-shadow: rgba(64, 229, 131, 0.4) 0px 0.125rem 0.19rem 0px;
  padding: ${space(1)}px ${space(2)}px;
  ${sourcePro(18)}
  border-radius: 30px;
`;

export default Button;
