import { Global } from '@emotion/react';

import { reset } from './reset';

export function GlobalStyle() {
  return <Global styles={reset} />;
}
