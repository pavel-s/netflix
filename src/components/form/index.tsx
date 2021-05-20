import { LinkProps } from 'react-router-dom';
import { TRSC } from '../../types';
import {
  Container,
  Base,
  Title,
  Input,
  Error,
  Submit,
  Row,
  Checkbox,
  Text,
  TextBig,
  Link,
  TextButton,
} from './styles/form';

type TForm = TRSC<'div'> & {
  Base: TRSC<'form'>;
  Title: TRSC<'h1'>;
  Input: TRSC<'input', { error?: boolean }>;
  Error: TRSC<'p'>;
  Submit: TRSC<'button', { isLoading?: boolean }, 'type'>;
  Row: TRSC<'div'>;
  Checkbox: TRSC<'input', { label: string }, 'type'>;
  Text: TRSC<'p'>;
  TextBig: TRSC<'p'>;
  Link: TRSC<'a', LinkProps & { color?: string }>;
  TextButton: TRSC<'button'>;
};

const Form: TForm = ({ children, ...rest }) => {
  return <Container {...rest}>{children}</Container>;
};

Form.Base = function FormBase({ children, ...rest }) {
  return <Base {...rest}>{children}</Base>;
};

Form.Title = function FormTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Form.Input = function FormInput({ ...rest }) {
  return <Input {...rest} />;
};

Form.Error = function FormError({ ...rest }) {
  return <Error {...rest} />;
};

Form.Submit = function FormSubmit({ isLoading = false, children, ...rest }) {
  console.log('isLoading: ', isLoading);

  return (
    <Submit {...rest} isLoading={isLoading} type='submit'>
      {children}
    </Submit>
  );
};

Form.Row = function FormRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Form.Checkbox = function FormCheckbox({ children, ...rest }) {
  return <Checkbox {...rest}>{children}</Checkbox>;
};

Form.Text = function FormText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Form.TextBig = function FormTextBig({ children, ...rest }) {
  return <TextBig {...rest}>{children}</TextBig>;
};

Form.Link = function FormLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Form.TextButton = function FormTextButton({ children, ...rest }) {
  return <TextButton {...rest}>{children}</TextButton>;
};

export default Form;
