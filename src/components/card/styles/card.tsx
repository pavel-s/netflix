import styled from 'styled-components/macro';
import { media } from '../../../helpers/styled-media';

export const Container = styled.div`
  margin: -150px 3.5rem 0;
  padding-bottom: 50px;

  ${media.huge} {
    margin-top: 0;
  }

  ${media.small} {
    margin: 0 5%;
  }
`;

export const CardContainer = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  color: #e5e5e5;
`;

export const Items = styled.div`
  display: flex;
`;

export const ItemImage = styled.img`
  width: 100%;
`;

export const Meta = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0 5px;
  background: #0000008f;
  opacity: 0;
  transition: opacity 0.3s;
`;

export const Item = styled.button`
  border: none;
  background: transparent;
  padding: 0;

  width: 20%;
  margin: 0 5px;
  position: relative;
  transition: transform 0.2s;
  cursor: pointer;
  overflow: hidden;
  display: flex;

  :hover,
  :focus-visible {
    transform: scale(1.3);
    z-index: 999;
    box-shadow: 5px 5px 5px #000;
  }

  :hover ${Meta}, :focus-visible ${Meta} {
    opacity: 1;
  }

  ${media.huge} {
    :hover ${Meta}, :focus-visible ${Meta} {
      opacity: 0;
    }
  }
`;

export const Subtitle = styled.h3`
  color: #fff;
  font-size: 16px;
  margin: 5px;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 4px 0;
`;

export const Feature = styled.div<{
  /** background image*/ url: string;
}>`
  background: ${({ url }) => (url ? `url(${url})` : 'none')};
  background-position-x: right;
  background-size: 70%;
  background-repeat: no-repeat;
  padding: 40px 60% 10px 5px;
  min-height: 360px;
  margin: 10px 0;
  position: relative;
  transition: background 0.5s;

  ${Subtitle} {
    font-size: 18px;
    margin: 5px 0;
  }
  ${Text} {
    font-size: 14px;
    margin: 15px 0;
  }

  ${media.big} {
    background-size: 80%;
    padding-right: 30%;
    padding-top: 50px;
  }

  ${media.middle} {
    background-size: 100%;
    padding-right: 5px;
    padding-top: 40px;

    ${Text} {
      background: #0000008f;
    }
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Maturity = styled.div<{ maturity: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #fff;
  width: 1.7em;
  height: 1.7em;
  margin: 10px 10px 10px 0;
  border-radius: 50%;
  background-color: ${({ maturity }) => (maturity <= 12 ? 'green' : 'red')};
`;

export const FeatureClose = styled.button`
  border: none;
  background: transparent;
  padding: 0;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  transition: transform 0.2s;

  > img {
    width: 32px;
    filter: brightness(0) invert(1);
  }

  :hover,
  :focus-visible {
    transform: scale(1.2);
  }
`;
