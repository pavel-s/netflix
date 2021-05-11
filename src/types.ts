import { FC, HTMLAttributes } from 'react';

// a component which returns styled component and redirect html element attributes props to it
export type TRSC<T, P = {}> = FC<HTMLAttributes<T> & P>;
