import styled from 'styled-components';

export type TFlexDirection = 'row' | 'row-reverse';

export const Container = styled.div``;

export const Item = styled.div`
  padding: 70px 45px;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div<{ direction: TFlexDirection }>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  max-width: 1100px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  font-size: 1.625rem;
  color: #fff;

  & > div:first-child {
    max-width: 52%;
    padding: ${({ direction }) =>
      direction === 'row' ? '0 3rem 0 0' : '0 0 0 3rem'};
  }

  & > div:last-child {
    max-width: 48%;
  }

  @media (max-width: 949px) {
    flex-direction: column;
    text-align: center;

    & > div:first-child {
      max-width: 100%;
      padding: 0;
    }

    & > div:last-child {
      max-width: 600px;
    }
  }
`;

export const Pane = styled.div<{ direction: TFlexDirection }>`
  & > div {
    margin: -5% -5% -5% 0;
  }
`;

export const Title = styled.h1`
  font-size: 3.125rem;
  line-height: 1.1;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.h2`
  font-size: 1.625rem;
  font-weight: 400;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;
