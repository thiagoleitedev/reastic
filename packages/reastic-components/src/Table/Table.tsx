import React from 'react';
import styled from 'styled-components';

export const TableStyled = styled.table`
  display: table;
  width: 100%;
  border-colapse: collapse;
  border-spacing: 0;
`;

export const Table: React.FunctionComponent<any> = props => {
  const { className, ...other } = props;
  return (
    // <TableContext.Provider value={table}>
    <TableStyled className={className} {...other}>
      {props.children}
    </TableStyled>
    // </TableContext.Provider>
  );
};

export default Table;
