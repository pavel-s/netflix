import { Background, Container, Logo, SignButton } from './styles/header';
import { LinkProps } from 'react-router-dom';
import { TRSC } from '../../types';

type THeader = TRSC<'div'> & {
  // Container: TRSC<'div'>;
  Logo: TRSC<'img'>;
  Frame: TRSC<'div'>;
  SignButton: TRSC<'a', LinkProps>;
};

const Header: THeader = ({ children, ...rest }) => {
  return <Background {...rest}>{children}</Background>;
};

Header.Frame = function HeaderFrame({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ children, ...rest }) {
  return <Logo {...rest} />;
};

Header.SignButton = function HeaderSignButton({ children, ...rest }) {
  return <SignButton {...rest}>{children}</SignButton>;
};

export default Header;
