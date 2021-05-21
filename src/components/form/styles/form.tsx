import styled, { CSSObject, keyframes } from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { media } from '../../../helpers/styled-media';

export const Container = styled.div`
  margin: 0 auto;
  /* min-height: 100vh; */
  max-width: 450px;
  min-height: 660px;
  padding: 60px 68px 40px;
  margin-bottom: 90px;
  display: flex;
  flex-direction: column;
  color: #737373;
  font-size: 13px;
  background-color: rgba(0, 0, 0, 0.75);

  ${media.small} {
    padding: 60px 5%;
  }
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  padding: 0;
  margin: 0 0 28px 0;
`;

export const Input = styled.input<{ error?: boolean }>`
  background: #333;
  border-radius: 4px;
  border: 0;
  /* border-bottom: 2px solid #333; */
  color: #fff;
  height: 50px;
  line-height: 50px;
  padding: 8px 20px 6px;
  margin-bottom: 16px;
  border-bottom: ${({ error }) =>
    error ? '2px solid #e87c03' : '2px solid #333'};

  :focus {
    background: #454545;
  }
`;

export const Error = styled.p`
  color: #e87c03;
  margin: -16px 0 16px;
  padding: 6px 3px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Submit = styled.button.attrs({ type: 'submit' })<{
  isLoading: boolean;
}>`
  position: relative;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  margin: 24px 0 12px;
  padding: 16px;
  background: #e50914;
  color: #fff;

  :disabled {
    opacity: 0.5;
  }

  :hover:not(:disabled) {
    background-color: #f40612;
  }

  :active {
    background-color: #97060d;
  }

  :focus-visible {
    outline: 1px solid #fff;
  }

  ::before {
    content: '';
    display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
    position: absolute;
    background-color: inherit;
    border-radius: inherit;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  ::after {
    content: '';
    display: ${({ isLoading }) => (isLoading ? 'block' : 'none')};
    position: absolute;
    top: calc(50% - 1em);
    left: calc(50% - 1em);
    width: 2em;
    height: 2em;
    border-top: 3px solid rgba(255, 255, 255, 0.2);
    border-right: 3px solid rgba(255, 255, 255, 0.2);
    border-bottom: 3px solid rgba(255, 255, 255, 0.2);
    border-left: 3px solid #ffffff;
    border-radius: 50%;
    animation: ${rotate} 1s infinite linear;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  --background: #737373;
  --backgroundFocus: #fff;
  appearance: none;
  position: relative;
  display: inline-block;
  background-color: var(--background);
  width: 16px;
  height: 16px;
  border: 2px solid var(--background);
  border-radius: 2px;
  overflow: hidden;
  vertical-align: bottom;
  margin: 3px 3px 3px 0;

  &::after {
    content: '';
    position: absolute;
    top: -12px;
    left: -6px;
    transform: rotate(45deg);
    border: 2px solid #000;
    height: 20px;
    width: 20px;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:checked::after {
    opacity: 1;
  }

  :focus {
    background-color: var(--backgroundFocus);
    border-color: var(--backgroundFocus);
  }

  & + label {
    color: #b3b3b3;
  }
`;

export const Text = styled.p`
  margin: 16px 0 0 0;
`;

export const TextBig = styled.p`
  font-size: 16px;
  font-weight: 500;
  margin: 16px 0 0 0;
`;

export const Link = styled(RouterLink)<{ color?: string }>`
  text-decoration: none;
  color: ${({ color }) => (color ? color : '#b3b3b3')};

  :hover,
  :focus {
    text-decoration: underline;
  }
`;

export const TextButton = styled.button`
  background-color: transparent;
  border: none;
  color: #0071eb;
  cursor: pointer;
  display: inline;
  font-family: inherit;
  font-size: inherit;
  padding: 0;
  margin: 0 0.5em;

  :hover,
  :focus {
    text-decoration: underline;
  }
`;
