import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';

import { router } from './routes/router';

import { GlobalStyle } from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
