import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 70px 45px;
  border-bottom: 8px solid #222;
  color: #fff;

  @media (max-width: 549px) {
    padding: 50px 5%;
  }
`;

export const Inner = styled.div`
  width: 100%;
  padding: 75px 0 105px 0;
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
`;

export const Title = styled.h1`
  max-width: 640px;
  margin: 0 auto;
  font-size: 3.125rem;
  line-height: 1.1;
  text-align: center;

  @media (max-width: 549px) {
    font-size: 1.75rem;
  }
`;

export const Subtitle = styled.h2`
  max-width: 640px;
  margin: 1rem auto;
  font-size: 1.625rem;
  text-align: center;

  @media (max-width: 549px) {
    font-size: 1.125rem;
  }
`;
