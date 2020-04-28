import React from 'react';
import styled from 'styled-components';

export const CardHeaderStyled = styled.div`
  display: flex;
  padding: 0.5rem 1.25rem;
  min-height: 3.5rem;
  align-items: center;
`;

type CardHeaderPropTypes = {
  className?: string;
  children: React.ReactNode;
};

export const CardHeader: React.FunctionComponent<CardHeaderPropTypes> = props => {
  const { className, ...other } = props;
  return (
    <CardHeaderStyled className={className} {...other}>
      {props.children}
    </CardHeaderStyled>
  );
};

export default CardHeader;
