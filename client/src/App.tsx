import { RouterProvider } from 'react-router-dom';

import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './react-query/queryClient';
import { router } from './routes/router';

import { GlobalStyle } from './styles/globalStyle';
import { theme } from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <RouterProvider router={router} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
