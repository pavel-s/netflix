import { FC } from 'react';

// a component which returns styled component and redirect html element attributes props to it
// export type TRSC<T, P = {}> = FC<HTMLAttributes<T> & P>;
export type TRSC<T extends keyof JSX.IntrinsicElements, P = {}> = FC<
  Omit<JSX.IntrinsicElements[T], 'ref'> & P
>;
// ref type is incompatible with styles-components
