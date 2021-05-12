import React from 'react';
import ReactDom from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './components/FoundationStyles';
import Canvas from './components/Canvas';
import log from 'electron-log';

const container = document.getElementById('contents');

log.info('initial');

ReactDom.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Canvas />
  </ThemeProvider>,
  container,
);
