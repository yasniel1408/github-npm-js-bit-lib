import type { ReactNode } from 'react';

export type HelloWorldProps = {
  children?: ReactNode;
};

export function HelloWorld({ children }: HelloWorldProps) {
  return (
    <div>
      <h1>Esto es desde la libreria de bit con github package regitry</h1>
      {children}
    </div>
  );
}
