import React from 'react';

export interface TableKindContextType {
  variant: 'head' | 'body' | 'footer';
}

const TableKindContext = React.createContext<TableKindContextType | null>(null);

export default TableKindContext;
