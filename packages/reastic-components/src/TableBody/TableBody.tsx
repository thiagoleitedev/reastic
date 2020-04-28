import React from 'react';
import styled from 'styled-components';
import TableKindContext, { TableKindContextType } from '../Table/TableKindContext';

export const TableBodyStyled = styled.tbody`
  display: table-row-group;
`;

const tableKind: TableKindContextType = {
  variant: 'body',
};

type TableBodyPropTypes = {
  className?: string;
  children: React.ReactNode;
};

export const TableBody: React.FunctionComponent<TableBodyPropTypes> = props => {
  const { className, ...other } = props;
  return (
    <TableKindContext.Provider value={tableKind}>
      <TableBodyStyled className={className} {...other}>
        {props.children}
      </TableBodyStyled>
    </TableKindContext.Provider>
  );
};

export default TableBody;
