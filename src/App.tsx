import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
import './App.css';

const theme = {};

const App: React.FC = () => {
  return <ThemeProvider theme={theme} />;
};

export default App;
