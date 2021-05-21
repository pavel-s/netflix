import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { useAuth } from '../hooks';

const EMAIL_ERROR = 'Please enter a valid email.';
const PASSWORD_ERROR =
  'Your password must contain between 4 and 60 characters.';

const validationSchema = yup.object({
  name: yup.string().required('Please enter your name.'),
  email: yup.string().email(EMAIL_ERROR).required(EMAIL_ERROR),
  password: yup
    .string()
    .min(4, PASSWORD_ERROR)
    .max(60, PASSWORD_ERROR)
    .required(PASSWORD_ERROR),
});

const SignUpForm = () => {
  const history = useHistory();
  const [resultError, setResultError] = useState('');

  const { signUp } = useAuth();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values) => {
      signUp(values)
        .then(() => {
          formik.setSubmitting(false);
          history.push(ROUTES.HOME);
        })
        .catch((error) => {
          formik.setSubmitting(false);
          setResultError(error.message);
        });
    },
  });

  return (
    <Form>
      <Form.Title>Sign In</Form.Title>
      <Form.Base onSubmit={formik.handleSubmit}>
        {resultError && <Form.Error>{resultError}</Form.Error>}
        <Form.Input
          type='text'
          id='name'
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
          placeholder='Name'
        />
        {formik.errors.name && <Form.Error>{formik.errors.name}</Form.Error>}
        <Form.Input
          type='text'
          id='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          placeholder='Email or phone number'
        />
        {formik.errors.email && <Form.Error>{formik.errors.email}</Form.Error>}
        <Form.Input
          type='password'
          id='password'
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          placeholder='Password'
        />
        {formik.errors.password && (
          <Form.Error>{formik.errors.password}</Form.Error>
        )}
        <Form.Submit
          disabled={formik.isSubmitting}
          isLoading={formik.isSubmitting}
        >
          Sign Up
        </Form.Submit>
      </Form.Base>
      <Form.TextBig>
        Already a user?{' '}
        <Form.Link to={ROUTES.LOGIN} color='#fff'>
          Sign in
        </Form.Link>
      </Form.TextBig>
    </Form>
  );
};

export default SignUpForm;
