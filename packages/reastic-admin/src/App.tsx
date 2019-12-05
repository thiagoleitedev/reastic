import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Button } from '@reastic/components';

const theme = {};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button>1111</Button>
    </ThemeProvider>
  );
};

export default App;
