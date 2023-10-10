import React, { PropsWithChildren } from 'react';

export const Center = ({ children }: PropsWithChildren) => {
  return <div style={{ margin: '3em' }}>{children}</div>;
};
