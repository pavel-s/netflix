import { TRSC } from '../../types';
// import chevronLeftIcon from '../../../public/images/icons/chevron-left.svg';

import { Break, Button, Container, Input, Text } from './styles/opt-form';

type TOptForm = TRSC<HTMLDivElement> & {
  Input: TRSC<HTMLInputElement>;
  Text: TRSC<HTMLParagraphElement>;
  Button: TRSC<HTMLButtonElement>;
  Break: TRSC<HTMLDivElement>;
};

const OptForm: TOptForm = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

OptForm.Button = ({ children, ...rest }) => (
  <Button {...rest}>
    {children} <img src='/images/icons/chevron-right.png' alt='' />
  </Button>
);

OptForm.Text = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;

OptForm.Input = ({ children, ...rest }) => <Input {...rest} />;

OptForm.Break = () => <Break />;

export default OptForm;
