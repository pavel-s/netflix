import {
  Background,
  Container,
  Logo,
  LogoLink,
  SignButton,
  Feature,
  FeatureCallOut,
  Text,
  TextButton,
  Group,
  ProfileImage,
  Dropdown,
  Profile,
  Search,
  SearchIcon,
  SearchInput,
  PlayButton,
} from './styles/header';
import { TAppRoutes, TRSC } from '../../types';
import { FC, useEffect, useRef, useState } from 'react';

type THeader = TRSC<typeof Background> & {
  Logo: TRSC<typeof Logo, { to?: TAppRoutes }>;
  Frame: TRSC<typeof Container>;
  SignButton: TRSC<typeof SignButton>;
  Feature: TRSC<typeof Feature>;
  FeatureCallOut: TRSC<typeof FeatureCallOut>;
  Text: TRSC<typeof Text>;
  TextButton: TRSC<typeof TextButton>;
  Group: TRSC<typeof Group>;
  ProfileImage: TRSC<typeof ProfileImage>;
  Dropdown: TRSC<typeof Dropdown>;
  Profile: TRSC<typeof Profile>;
  Search: FC;
  PlayButton: TRSC<typeof PlayButton>;
};

const Header: THeader = ({ children, ...rest }) => {
  return <Background {...rest}>{children}</Background>;
};

Header.Frame = function HeaderFrame({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, children, ...rest }) {
  if (to) {
    return (
      <LogoLink to={to}>
        <Logo {...rest} />
      </LogoLink>
    );
  } else {
    return <Logo {...rest} />;
  }
};

Header.SignButton = function HeaderSignButton({ children, ...rest }) {
  return <SignButton {...rest}>{children}</SignButton>;
};

Header.Feature = function HeaderFeature({ children, ...rest }) {
  return <Feature {...rest}>{children}</Feature>;
};

Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...rest }) {
  return <FeatureCallOut {...rest}>{children}</FeatureCallOut>;
};

Header.Text = function HeaderText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Header.TextButton = function HeaderTextButton({ children, ...rest }) {
  return <TextButton {...rest}>{children}</TextButton>;
};

Header.Group = function HeaderGroup({ children, ...rest }) {
  return <Group {...rest}>{children}</Group>;
};

Header.ProfileImage = function HeaderProfileImage({ children, ...rest }) {
  return <ProfileImage {...rest}>{children}</ProfileImage>;
};

Header.Dropdown = function HeaderDropdown({ children, ...rest }) {
  return <Dropdown {...rest}>{children}</Dropdown>;
};

Header.Profile = function HeaderProfile({ children, ...rest }) {
  return <Profile {...rest}>{children}</Profile>;
};

Header.Search = function HeaderSearch() {
  const [active, setActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    active && inputRef.current?.focus();
  }, [active]);

  return (
    <Search active={active}>
      <button onClick={() => setActive((active) => !active)}>
        <SearchIcon src='images/icons/search.png' />
      </button>
      <SearchInput ref={inputRef} />
    </Search>
  );
};

Header.PlayButton = function HeaderPlayButton({ children, ...rest }) {
  return <PlayButton {...rest}>{children}</PlayButton>;
};

export default Header;
