import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 70px 45px;
  color: #fff;
  font-size: 1.625rem;
  font-weight: 400;
  border-bottom: 8px solid #222;

  @media (max-width: 949px) {
    font-size: 1.25rem;
  }

  @media (max-width: 549px) {
    padding: 50px 0;
  }
`;

export const Inner = styled.div``;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
  margin: 0 0 0.4em;
  text-align: center;

  @media (max-width: 949px) {
    font-size: 2.5rem;
  }
`;

export const Frame = styled.div`
  width: 75%;
  max-width: 815px;
  margin: 52px auto;

  @media (max-width: 949px) {
    margin: 30px auto;
    width: 90%;
  }

  @media (max-width: 549px) {
    margin: 30px auto;
    width: 100%;
  }
`;

export const Item = styled.div`
  margin-bottom: 8px;
`;

export const Header = styled.div`
  display: flex;
  padding: 0.8em 2.2em 0.8em 1.2em;
  margin-bottom: 1px;
  background-color: #303030;
  cursor: pointer;
  user-select: none;
  position: relative;
  line-height: 1.27;

  & > img {
    position: absolute;
    right: 1em;
    top: calc(50% - 0.5em);
    filter: brightness(0) invert(1);
    width: 1em;
    height: 1em;
  }
`;

export const Body = styled.div`
  background-color: #303030;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  overflow: hidden;

  &.open {
    max-height: 1200px;
  }
  &.closed {
    max-height: 0;
  }

  & > span {
    display: block;
    padding: 1.2em;
    white-space: pre-wrap;
  }
`;
