import React from 'react';
import styled from 'styled-components';
import TableKindContext, { TableKindContextType } from '../Table/TableKindContext';

export const TableHeadStyled = styled.thead`
  display: 'table-header-group';
`;

const tableKind: TableKindContextType = {
  variant: 'head',
};

type TableHeadPropTypes = {
  className?: string;
  children: React.ReactNode;
};

export const TableHead: React.FunctionComponent<TableHeadPropTypes> = props => {
  const { className, ...other } = props;
  return (
    <TableKindContext.Provider value={tableKind}>
      <TableHeadStyled className={className} {...other}>
        {props.children}
      </TableHeadStyled>
    </TableKindContext.Provider>
  );
};

export default TableHead;
