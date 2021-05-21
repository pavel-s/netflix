const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  custom: customMediaQuery,
  small: customMediaQuery(549),
  middle: customMediaQuery(768),
  big: customMediaQuery(949),
  huge: customMediaQuery(1200),
};
