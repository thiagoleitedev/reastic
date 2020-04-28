import React from 'react';
import styled from 'styled-components';

export const TableRowStyled = styled.tr`
  display: table-row;
  color: inherit;
  vertical-align: 'middle',
  outline: 0;
`;

export const TableRow: React.FunctionComponent<any> = props => {
  const { className, ...other } = props;
  return (
    <TableRowStyled className={className} {...other}>
      {props.children}
    </TableRowStyled>
  );
};

export default TableRow;
