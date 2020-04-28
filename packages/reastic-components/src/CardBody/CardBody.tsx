import React from 'react';
import styled from 'styled-components';

export const CardBodyStyled = styled.div`
  display: flex;
  padding: 1.25rem 1.25rem;
  min-height: 3.5rem;
  align-items: center;
`;

type CardBodyPropTypes = {
  className?: string;
  children: React.ReactNode;
};

export const CardBody: React.FunctionComponent<CardBodyPropTypes> = props => {
  const { className, ...other } = props;
  return (
    <CardBodyStyled className={className} {...other}>
      {props.children}
    </CardBodyStyled>
  );
};

export default CardBody;
