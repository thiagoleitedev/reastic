import React from 'react';
import styled from 'styled-components';
import TableKindContext, { TableKindContextType } from '../Table/TableKindContext';
import pallete, { space } from '../pallete';

const variantStyle = {
  head: `
    font-size: .625rem;
    border-bottom: 2px solid #34495e;
    line-height: 1.2;
    font-weight: 700;
    text-transform: uppercase;
    color: #34495e;
  `,
  body: `
    vertical-align: middle;
  `,
};

const alignStyle = {
  left: `
    text-align: left;
  `,
  center: `
    text-align: center;
  `,
  right: `
    text-align: right;
    flexDirection: 'row-reverse';
  `,
  justify: `
    text-align: justify;
  `,
};

const TableCellStyle = styled.td<TableCellPropTypes>`
  display: table-cell;
  vertical-align: inherit;
  padding: ${space(1.5)}px;
  ${pallete.font(16)};
  ${props => (variantStyle as any)[props.variant]}
  ${props => (alignStyle as any)[props.align]}
`;
type TableCellPropTypes = {
  className?: string;
  children: React.ReactNode;
  align: 'left' | 'center' | 'right' | 'justify';
  as: 'td' | 'th';
  variant: 'body' | 'footer' | 'head';
};

export const TableCell: React.FunctionComponent<TableCellPropTypes> = props => {
  const { className, children, align = 'left', variant: variantProp, ...other } = props;
  const tableKind = React.useContext(TableKindContext);

  const component = tableKind && tableKind.variant === 'head' ? 'th' : 'td';
  const variant = variantProp || (tableKind && tableKind.variant);

  return (
    <TableCellStyle as={component} variant={variant} align={align} className={className} {...other}>
      {children}
    </TableCellStyle>
  );
};

export default TableCell;
