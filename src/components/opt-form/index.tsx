import { TRSC } from '../../types';
// import chevronLeftIcon from '../../../public/images/icons/chevron-left.svg';

import { Break, Button, Container, Input, Text } from './styles/opt-form';

type TOptForm = TRSC<'div'> & {
  Input: TRSC<'input'>;
  Text: TRSC<'p'>;
  Button: TRSC<'button'>;
  Break: TRSC<'div'>;
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
