import { TRSC } from '../../types';
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  Subtitle,
  Image,
  TFlexDirection,
} from './styles/jumbotron';

type TJumbotron = TRSC<typeof Item, { direction: TFlexDirection }> & {
  Container: TRSC<typeof Container>;
  Pane: TRSC<typeof Pane>;
  Title: TRSC<typeof Title>;
  Subtitle: TRSC<typeof Subtitle>;
  Image: TRSC<typeof Image>;
};

const Jumbotron: TJumbotron = ({ direction = 'row', children, ...rest }) => {
  return (
    <Item {...rest}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
};

Jumbotron.Container = function JumbotronContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ direction, children, ...rest }) {
  return (
    <Pane direction={direction} {...rest}>
      {children}
    </Pane>
  );
};

Jumbotron.Title = function JumbotronTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Jumbotron.Image = function JumbotronImage({ children, ...rest }) {
  return (
    <div>
      <Image {...rest} />
    </div>
  );
};

export default Jumbotron;
