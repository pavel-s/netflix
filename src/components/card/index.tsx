import { TRSC } from '../../types';

import {
  Container,
  CardContainer,
  Group,
  Title,
  Items,
  Item,
  ItemImage,
  Meta,
  Subtitle,
  Text,
  Feature,
  Maturity,
  FeatureClose,
} from './styles/card';

type TCard = TRSC<typeof Container> & {
  Container: TRSC<typeof Container>;
  Group: TRSC<typeof Group>;
  Title: TRSC<typeof Title>;
  Items: TRSC<typeof Items>;
  Item: TRSC<typeof Item>;
  ItemImage: TRSC<typeof ItemImage>;
  Meta: TRSC<typeof Meta>;
  Subtitle: TRSC<typeof Subtitle>;
  Text: TRSC<typeof Text>;
  Feature: TRSC<typeof Feature>;
  Maturity: TRSC<typeof Maturity>;
  FeatureClose: TRSC<typeof FeatureClose>;
};

const Card: TCard = ({ children, ...rest }) => {
  return <CardContainer {...rest}>{children}</CardContainer>;
};

Card.Container = function CardCardContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Card.Group = function CardGroup({ children, ...rest }) {
  return <Group {...rest}>{children}</Group>;
};

Card.Title = function CardTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Card.Items = function CardItems({ children, ...rest }) {
  return <Items {...rest}>{children}</Items>;
};

Card.Item = function CardItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Card.ItemImage = function CardItemImage({ children, ...rest }) {
  return <ItemImage {...rest}>{children}</ItemImage>;
};

Card.Meta = function CardMeta({ children, ...rest }) {
  return <Meta {...rest}>{children}</Meta>;
};

Card.Subtitle = function CardSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Card.Text = function CardText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Card.Feature = function CardFeature({ children, ...rest }) {
  return <Feature {...rest}>{children}</Feature>;
};

Card.Maturity = function CardMaturity({ maturity, ...rest }) {
  return (
    <Maturity maturity={maturity} {...rest}>
      {maturity}
    </Maturity>
  );
};

Card.FeatureClose = function CardFeatureClose({ children, ...rest }) {
  return <FeatureClose {...rest}>{children}</FeatureClose>;
};

export default Card;
