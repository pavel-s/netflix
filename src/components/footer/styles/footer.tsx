import styled from 'styled-components/macro';

export const Container = styled.div`
  box-sizing: content-box;
  max-width: 1000px;
  margin: 0 auto;
  padding: 70px 45px 20px 45px;
  color: #757575;

  @media (max-width: 550px) {
    padding: 50px 5%;
  }
`;

export const Inner = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Title = styled.p`
  margin: 0 0 30px 0;

  & > a {
    text-decoration: none;
    color: #757575;
  }
  & > a:hover {
    text-decoration: underline;
  }
`;

export const Links = styled.ul`
  padding: 0;
  max-width: 1000px;
  font-size: 13px;
`;

export const Link = styled.li`
  list-style: none;
  margin-bottom: 16px;
  padding-right: 12px;
  display: inline-block;
  width: 25%;
  min-width: 100px;
  vertical-align: top;

  & > a {
    text-decoration: none;
    color: #757575;
  }
  & > a:hover {
    text-decoration: underline;
  }

  @media (max-width: 740px) {
    width: 33%;
  }
  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const Text = styled.p`
  font-size: 13px;
`;
