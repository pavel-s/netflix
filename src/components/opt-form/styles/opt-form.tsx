import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 0.85rem;

  @media (max-width: 949px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 549px) {
    padding: 0 5%;
  }
`;

export const Input = styled.input`
  box-sizing: border-box;
  max-width: 450px;
  width: 100%;
  height: 60px;
  padding: 10px;
  border: 0;

  @media (max-width: 949px) {
    margin: 10px 0;
    max-width: 500px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  min-height: 60px;
  font-size: 1.625rem;
  font-weight: 400;
  letter-spacing: 0.1px;
  color: #fff;
  background-color: #e50914;
  border: 0;
  padding: 0 1em;
  cursor: pointer;

  :hover {
    background-color: #f40612;
  }

  & > img {
    filter: brightness(0) invert(1);
    width: 1.2rem;
    margin-left: 10px;
  }

  @media (max-width: 949px) {
    margin: 10px 0;
    font-size: 1rem;
    min-height: 40px;

    & img {
      width: 1rem;
    }
  }
`;

export const Text = styled.h3`
  color: #fff;
  font-weight: 400;
  font-size: 1.2rem;
  text-align: center;
  padding-bottom: 20px;
  margin: 0;

  @media (max-width: 949px) {
    padding: 0 10%;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;
