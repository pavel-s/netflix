import styled, {
  createGlobalStyle,
  CSSObject,
  keyframes,
} from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  from {
    transform: rotate(0);
  } to {
    transform: rotate(360deg);
}
`;

export const Spinner = styled.div<{ size?: CSSObject['width'] }>`
  --spinner-size: ${({ size }) => (size ? size : '250px')};
  width: var(--spinner-size);
  height: var(--spinner-size);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    width: var(--spinner-size);
    height: var(--spinner-size);
    background: no-repeat url(images/misc/spinner.png);
    background-size: var(--spinner-size) var(--spinner-size);
    animation: ${spin} 1.3s infinite linear;
  }
`;

export const Image = styled.img`
  width: calc(var(--spinner-size) - 45%);
  position: relative;
`;

export const LockBody = createGlobalStyle`
body {
  overflow: hidden;
}
`;
