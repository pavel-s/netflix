import { TRSC } from '../../types';
import { Container, Inner, Title, Subtitle } from './styles/feature';

type TFeature = TRSC<typeof Container> & {
  Title: TRSC<typeof Title>;
  Subtitle: TRSC<typeof Subtitle>;
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
