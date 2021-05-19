import { useState } from 'react';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';
import { useFormik } from 'formik';
import * as yup from 'yup';

const EMAIL_ERROR = 'Please enter a valid email.';
const PASSWORD_ERROR =
  'Your password must contain between 4 and 60 characters.';

const validationSchema = yup.object({
  email: yup.string().email(EMAIL_ERROR).required(EMAIL_ERROR),
  password: yup
    .string()
    .min(4, PASSWORD_ERROR)
    .max(60, PASSWORD_ERROR)
    .required(PASSWORD_ERROR),
});

const LoginForm = () => {
  const [showCaptchaTerms, setShowCaptchaTerms] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Form>
      <Form.Title>Sign In</Form.Title>
      <Form.Base onSubmit={formik.handleSubmit}>
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
        <Form.Submit>Sign In</Form.Submit>
        <Form.Row>
          <Form.Row>
            <Form.Checkbox
              label='Remember me'
              id='rememberMe'
              checked={formik.values.rememberMe}
              onChange={formik.handleChange}
            />
            <label htmlFor='rememberMe'>Remember me</label>
          </Form.Row>
          <Form.Link to={ROUTES.LOGIN_HELP}>Need help?</Form.Link>
        </Form.Row>
      </Form.Base>
      <Form.TextBig>
        New to Netflix?{' '}
        <Form.Link to={ROUTES.HOME} color='#fff'>
          Sign up now
        </Form.Link>
      </Form.TextBig>
      <Form.Text>
        This page is protected by Google reCAPTCHA to ensure you're not a bot.
        {!showCaptchaTerms && (
          <Form.TextButton onClick={() => setShowCaptchaTerms((prev) => !prev)}>
            Learn more.
          </Form.TextButton>
        )}
      </Form.Text>
      {showCaptchaTerms && (
        <Form.Text>
          The information collected by Google reCAPTCHA is subject to the Google
          Privacy Policy and Terms of Service, and is used for providing,
          maintaining, and improving the reCAPTCHA service and for general
          security purposes (it is not used for personalized advertising by
          Google).
        </Form.Text>
      )}
    </Form>
  );
};

export default LoginForm;
