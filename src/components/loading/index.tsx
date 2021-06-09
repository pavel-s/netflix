import React from 'react';
import { TRSC } from '../../types';
import { Container, Image, LockBody, Spinner } from './styles/loading';

type TLoading = TRSC<
  typeof Image,
  Pick<typeof Spinner extends React.ComponentType<infer P> ? P : {}, 'size'>
>;

const Loading: TLoading = ({ size, src, ...rest }) => {
  return (
    <Container data-testid='loading'>
      <LockBody />
      <Spinner size={size}>
        {src ? <Image src={src} {...rest} /> : null}
      </Spinner>
    </Container>
  );
};

export default Loading;
