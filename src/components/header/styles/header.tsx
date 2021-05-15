import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';

export const Background = styled.div`
  background: url(/images/misc/home-bg.jpg);
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
