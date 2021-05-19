import { FC } from 'react';

/**
 * a component type which returns styled component and redirect html element attributes props to it.
 * ref type from IntrinsicElements is incompatible with styles-components, type ref in P.
 * @param T - element name ('p', 'div', 'input'...)
 * @param P - props
 * @param O - exclude attributes ('type', 'type' | 'value')
 */
export type TRSC<T extends keyof JSX.IntrinsicElements, P = {}, O = undefined> =
  FC<
    Omit<
      JSX.IntrinsicElements[T],
      O extends keyof Omit<JSX.IntrinsicElements[T], 'ref'> ? 'ref' | O : 'ref'
    > &
      P
  >;
