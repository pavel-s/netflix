import { FC } from 'react';

/**
 * infer props from styled component
 * @param C - typeof component
 * @param P - props
 * @example
 * const StyledDiv = styled.div<{ bgColor: CSSObject['backgroundColor'] }>`
 *  background-color: ${({ bgColor }) => bgColor};
 * `;
 * const MyComponent: TRSC<typeof StyledDiv> = ({ bgColor }) => <StyledDiv bgColor={bgColor}>Hello!</StyledDiv>
 */
export type TRSC<C extends React.ComponentType, P = {}> = FC<
  C extends React.ComponentType<infer CP> ? CP & P : P
>;

export type TMediaItem = {
  maturity: string;
  slug: string;
  title: string;
  description: string;
  id: string;
  genre: string;
  docId: string;
};
