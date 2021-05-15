import { TRSC } from '../../types';
import { Container, Inner, Title, Subtitle } from './styles/feature';

type TFeature = TRSC<'div'> & {
  Title: TRSC<'h1'>;
  Subtitle: TRSC<'h2'>;
};

const Feature: TFeature = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Inner>{children}</Inner>
    </Container>
  );
};

Feature.Title = function FeatureTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Feature.Subtitle = function FeatureSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

export default Feature;
