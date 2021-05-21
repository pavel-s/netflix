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

type TForm = TRSC<typeof Container> & {
  Base: TRSC<typeof Base>;
  Title: TRSC<typeof Title>;
  Input: TRSC<typeof Input>;
  Error: TRSC<typeof Error>;
  Submit: TRSC<typeof Submit>;
  Row: TRSC<typeof Row>;
  Checkbox: TRSC<typeof Checkbox>;
  Text: TRSC<typeof Text>;
  TextBig: TRSC<typeof TextBig>;
  Link: TRSC<typeof Link>;
  TextButton: TRSC<typeof TextButton>;
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
