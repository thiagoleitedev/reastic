import React from 'react';
import { Button as ReakitButton } from 'reakit/Button';
import styled from 'styled-components';
import { space, sourcePro } from '../pallete';

export const StyledButton = styled(ReakitButton as any)`
  color: rgb(255, 255, 255);
  padding: ${space(1)}px ${space(2)}px;
  ${sourcePro(18)}
  border: 0;
  border-radius: 1.5rem;
  letter-spacing: 0.032rem;
  text-decoration: none;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  ${props => {
    if (!props.variant) {
      return `
      background-image: linear-gradient(to right, rgb(102, 229, 181), rgb(41, 224, 105));
      box-shadow: rgba(64, 229, 131, 0.4) 0px 0.125rem 0.19rem 0px;

      &:hover:not(:disabled) {
        opacity: 0.85;
      }
      &:focus,
      &:active {
        filter: brightness(85%);
      }
      `;
    }
    if (props.variant === 'outlined') {
      return `
        background-color: transparent;
        border: .125rem solid rgb(64, 229, 131);
        color: rgb(64, 229, 131);
        &:hover:not(:disabled) {
          background-color: rgba(64, 229, 131, 0.2);
        }
      `;
    }
    if (props.variant === 'flat') {
      return `
        border: 0 solid transparent;
        color: rgb(64, 229, 131);
        &:hover:not(:disabled) {
          background-color: rgba(64, 229, 131, 0.2);
        }
    `;
    }
  }}
`;

export const Button = (props: any) => (
  <StyledButton disabled={props.disabled} variant={props.variant}>
    {props.children}
  </StyledButton>
);

export default Button;
