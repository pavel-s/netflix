import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { TRSC } from '../../types';
import {
  Container,
  Inner,
  Body,
  Frame,
  Header,
  Item,
  Title,
} from './styles/accordion';

type TAccordion = TRSC<typeof Container> & {
  Title: TRSC<typeof Title>;
  Frame: TRSC<typeof Frame>;
  Item: TRSC<typeof Item>;
  Header: TRSC<typeof Header>;
  Body: TRSC<typeof Body>;
};

const Accordion: TAccordion = ({ children, ...rest }) => {
  return (
    <Container {...rest}>
      <Inner>{children}</Inner>
    </Container>
  );
};

const ToggleContext = createContext<{
  show?: boolean;
  setShow?: Dispatch<SetStateAction<boolean>>;
}>({});

Accordion.Title = ({ children, ...rest }) => (
  <Title {...rest}>{children}</Title>
);

Accordion.Frame = ({ children, ...rest }) => (
  <Frame {...rest}>{children}</Frame>
);

Accordion.Item = function AccordionItem({ children, ...rest }) {
  const [show, setShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ show, setShow }}>
      <Item {...rest}>{children}</Item>
    </ToggleContext.Provider>
  );
};

Accordion.Header = function AccordionHeader({ children, ...rest }) {
  const { show, setShow } = useContext(ToggleContext);

  const toggleShow = () => {
    setShow && setShow((show: boolean) => !show);
  };

  return (
    <Header onClick={toggleShow} {...rest}>
      {children}{' '}
      {show ? (
        <img src='/images/icons/close-slim.png' alt='' />
      ) : (
        <img src='/images/icons/add.png' alt='' />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...rest }) {
  const { show } = useContext(ToggleContext);
  return (
    <Body className={show ? 'open' : 'closed'}>
      <span {...rest}>{children}</span>
    </Body>
  );
};

export default Accordion;
