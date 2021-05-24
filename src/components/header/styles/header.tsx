import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { media } from '../../../helpers/styled-media';

export const Background = styled.div<{
  /** background image url */ url?: string;
  /** hide background */ hideOnSmallViewPort?: boolean;
}>`
  background: ${({ url }) =>
    url
      ? `linear-gradient(
      to top,
      rgba(0, 0, 0, 0.9) 0,
      rgba(0, 0, 0, 0.5) 40%,
      rgba(0, 0, 0, 0.5) 75%,
      rgba(0, 0, 0, 0.9) 100%
    ), url(${url}) top left / cover no-repeat`
      : 'none'};

  ${media.huge} {
    ${({ hideOnSmallViewPort }) => hideOnSmallViewPort && 'background: none;'}
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

  ${media.small} {
    margin: 0 5%;
  }
`;

export const Logo = styled.img`
  width: 10.4375rem;
  height: 2.8125rem;

  ${media.huge} {
    width: 8.375rem;
    height: 2.25rem;
  }

  ${media.small} {
    width: 6.75rem;
    height: 2rem;
  }
`;

export const LogoLink = styled(RouterLink)`
  margin-right: 50px;

  :focus-visible {
    opacity: 0.5;
  }
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

export const Feature = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  padding: 150px 56px 500px 56px;
  color: #fff;

  ${media.huge} {
    display: none;
  }
`;
export const FeatureCallOut = styled.h2`
  color: #fff;
  font-size: 50px;
  line-height: normal;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: #fff;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const TextButton = styled.button<{ active?: boolean }>`
  color: #fff;
  border: none;
  background: none;
  font-size: 20px;
  text-decoration: none;
  font-weight: ${({ active }) => (active ? '700' : '400')};
  margin-right: 30px;
  cursor: pointer;

  :last-of-type {
    margin-right: 0;
  }

  :hover {
    text-decoration: underline;
  }

  :focus-visible {
    text-decoration: underline;
  }

  ${media.middle} {
    margin-right: 10px;
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const ProfileImage = styled.div<{
  /** user avatar url */ url: string;
}>`
  border: none;
  background: ${({ url }) => `url(${url}) top left / cover no-repeat`};
  width: 32px;
  height: 32px;
  margin-right: 6px;
`;

export const Dropdown = styled.div`
  opacity: 0;
  background: #000000;
  position: absolute;
  top: 32px;
  right: 0;
  padding: 10px;
  z-index: -999;
  transition: opacity 0.3s;
  cursor: default;

  ${TextButton} {
    margin: 0;
    font-size: 18px;
  }

  ${Group} {
    padding-bottom: 10px;
  }

  :focus-within,
  :hover {
    opacity: 1;
    z-index: 0;
  }
`;

export const Profile = styled.div`
  position: relative;
  cursor: pointer;

  ${ProfileImage}:hover + ${Dropdown} {
    opacity: 1;
    z-index: 0;
  }
`;

export const SearchIcon = styled.img`
  filter: brightness(0) invert(1);
  width: 16px;
`;

export const SearchInput = styled.input.attrs({ type: 'text' })`
  background-color: #44444459;
  transition: width 0.3s ease;
  color: #fff;
  height: 30px;
`;

export const Search = styled.div<{ active: boolean }>`
  display: flex;
  margin-right: 20px;

  button {
    border: none;
    background: transparent;
    margin-right: 6px;
    cursor: pointer;
    display: flex;
    align-items: center;

    :focus-visible {
      outline: 1px solid #fff;
    }
  }

  ${SearchInput} {
    width: ${({ active }) => (active ? '200px' : '0')};
    border: ${({ active }) => (active ? '1px solid #fff' : 'none')};
    padding: ${({ active }) => (active ? '2px 4px' : '0')};
  }
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 130px;
  font-weight: 700;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  :hover,
  :focus-visible {
    background-color: #ff1e1e;
    color: white;
  }
`;
