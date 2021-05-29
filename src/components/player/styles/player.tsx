import styled, { createGlobalStyle } from 'styled-components/macro';
import { media } from '../../../helpers/styled-media';

export const Container = styled.div``;

export const Button = styled.button`
  background-color: #e50914;
  border-color: #ff0a16;
  width: 115px;
  height: 45px;
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  font-size: 18px;
  height: 45px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 0;

  :hover,
  :focus-visible {
    transform: scale(1.05);
    background-color: #ff0a16;
  }
`;

export const Close = styled.button`
  border: none;
  padding: 0;
  background: none;

  position: absolute;
  top: 16px;
  right: 16px;
  width: 32px;
  height: 32px;
  cursor: pointer;

  > img {
    width: 100%;
    filter: brightness(0) invert(1);
  }

  :hover,
  :focus-visible {
    opacity: 1;
    transform: scale(1.2);
  }
`;

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #000000bf;
  z-index: 9999;
`;

export const Video = styled.video`
  width: 70%;

  ${media.middle} {
    width: 100%;
  }
`;
