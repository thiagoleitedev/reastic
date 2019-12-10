import React from 'react';
// import { ThemeProvider } from 'styled-components';
import styled from 'styled-components';
import { Button } from '@reastic/components';

const Ss = styled.div`
  background: yellow;
`;

// const theme = {};

const App: React.FC = () => {
  return (
    // <ThemeProvider theme={theme}>
    <div>
      <Ss />
      <Button />
    </div>
    /* </ThemeProvider> */
  );
};

export default App;
