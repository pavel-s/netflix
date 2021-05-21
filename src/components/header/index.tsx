import { Background, Container, Logo, SignButton } from './styles/header';
import { TRSC } from '../../types';

type THeader = TRSC<typeof Background> & {
  Logo: TRSC<typeof Logo>;
  Frame: TRSC<typeof Container>;
  SignButton: TRSC<typeof SignButton>;
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
