import { FC } from 'react';
import { TRSC } from '../../types';
import { Container, Inner, Title, Links, Link, Text } from './styles/footer';

type TFooter = TRSC<typeof Container> & {
  Title: TRSC<typeof Title>;
  Links: TRSC<typeof Links>;
  Link: FC<JSX.IntrinsicElements['a']>;
  Text: TRSC<typeof Text>;
};

const Footer: TFooter = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Footer.Title = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>;
};

Footer.Links = ({ children, ...rest }) => {
  return <Links {...rest}>{children}</Links>;
};

Footer.Link = ({ children, ...rest }) => {
  return (
    <Link>
      <a {...rest}>{children}</a>
    </Link>
  );
};

Footer.Text = ({ children, ...rest }) => {
  return <Text {...rest}>{children}</Text>;
};

export default Footer;
