import React from 'react';
import { Button as ReakitButton } from 'reakit/Button';
import { unstable_FormSubmitButton as FormSubmitButton } from 'reakit/Form';
import styled from 'styled-components';
import { space } from '../pallete';
import FormContext from '../Form/FormContext';

type sizeStyleType = 'small' | 'medium' | 'large';
type variantStyleType = 'default' | 'outlined' | 'flat';

interface StyledButtonType {
  readonly size: sizeStyleType;
  readonly variant: variantStyleType;
}

const sizeStyle = (size: sizeStyleType) => {
  const sizes = {
    small: `${space(0.5)}px ${space(1)}px`,
    medium: `${space(1)}px ${space(2)}px`,
    large: `${space(2)}px ${space(4)}px`,
  };
  return (sizes as any)[size];
};

const variantStyle = (variant: variantStyleType) => {
  const variants = {
    default: `
      background-image: linear-gradient(to right, rgb(102, 229, 181), rgb(41, 224, 105));
      box-shadow: rgba(64, 229, 131, 0.4) 0px 0.125rem 0.19rem 0px;

      &:hover:not(:disabled) {
        opacity: 0.85;
      }
      &:focus,
      &:active {
        filter: brightness(85%);
      }`,
    outlined: `
      background-color: transparent;
      border: .125rem solid rgb(64, 229, 131);
      color: rgb(64, 229, 131);
      &:hover:not(:disabled) {
        background-color: rgba(64, 229, 131, 0.2);
      }
    `,
    flat: `
      border: 0 solid transparent;
      color: rgb(64, 229, 131);
      &:hover:not(:disabled) {
        background-color: rgba(64, 229, 131, 0.2);
      }
    `,
  };
  return (variants as any)[variant];
};

export const ButtonStyled = styled(ReakitButton)<StyledButtonType>`
  color: rgb(255, 255, 255);
  padding: ${props => sizeStyle(props.size)};
  font-size: 1rem;
  border: 0;
  border-radius: 1.5rem;
  letter-spacing: 0.032rem;
  text-decoration: none;
  text-transform: uppercase;
  opacity: ${props => (props.disabled ? 0.4 : 1)};
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
  ${props => variantStyle(props.variant)}
`;

interface ButtonPropType {
  className?: string;
  children: React.ReactNode;
  disabled?: boolean;
  variant: variantStyleType;
  size: sizeStyleType;
  type: any;
}

export const Button: React.FunctionComponent<ButtonPropType> = props => {
  const {
    className,
    children,
    disabled = false,
    variant = 'default',
    size = 'medium',
    type,
    ...other
  } = props;
  const form = React.useContext(FormContext);

  return (
    <ButtonStyled
      as={type === 'submit' ? FormSubmitButton : undefined}
      className={className}
      disabled={disabled}
      size={size}
      variant={variant}
      {...form}
      {...other}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
