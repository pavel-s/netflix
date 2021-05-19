import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Background = styled.div`
  background: url(/images/misc/home-bg.jpg);
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.8) 0,
      rgba(0, 0, 0, 0.5) 40%,
      rgba(0, 0, 0, 0.5) 75%,
      rgba(0, 0, 0, 0.8) 100%
    );
    z-index: -1;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 28px;
  margin: 0 3.5rem;
  min-height: 5rem;

  @media (max-width: 549px) {
    margin: 0 5%;
  }
`;

export const Logo = styled.img`
  width: 8.375rem;
  height: 2.25rem;
`;

export const SignButton = styled(RouterLink)`
  background-color: #e50914;
  line-height: normal;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  border-radius: 3px;
  margin: 0;
  flex-grow: 0;
`;
