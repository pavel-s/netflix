import styled from 'styled-components/macro';
import { media } from '../../../helpers/styled-media';

export const Container = styled.div`
  padding: 50px;
  margin: 0 auto;

  ${media.small} {
    padding: 5%;
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: #fff;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  align-content: center;
  justify-content: center;

  ${media.small} {
    flex-direction: column;
  }
`;

export const ListItem = styled.li`
  max-width: 20%;
  margin: 10px;
  text-align: center;
  cursor: pointer;

  :last-of-type {
    margin-right: 0;
  }

  ${media.big} {
    max-width: 30%;
  }

  ${media.middle} {
    max-width: 40%;
  }

  ${media.small} {
    max-width: 60%;
  }
`;

export const Avatar = styled.img`
  max-width: 100%;
`;

export const Name = styled.p`
  color: #aaa;
`;

export const User = styled.button`
  border: none;
  background-color: inherit;
  transition: opacity 0.3s;

  :hover ${Avatar}, :focus-visible ${Avatar} {
    outline: 2px solid #fff;
  }

  :hover ${Name}, :focus-visible ${Name} {
    color: #fff;
  }

  :active {
    opacity: 0.5;
  }
`;
