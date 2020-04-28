import React from 'react';
import styled from 'styled-components';

export const CardStyled = styled.div`
  border-radius: 0.375rem;
  box-shadow: 0 2px 3px 0 rgba(52, 56, 85, 0.25);
  overflow: hidden;
  background-color: #fff;
`;

type CardPropTypes = {
  className?: string;
  children: React.ReactNode;
};

export const Card: React.FunctionComponent<CardPropTypes> = props => {
  const { className, ...other } = props;
  return (
    <CardStyled className={className} {...other}>
      {props.children}
    </CardStyled>
  );
};

export default Card;
