import { render } from '@testing-library/react';
import { Form } from '../../components';
import { MemoryRouter } from 'react-router-dom';

describe('<Form />', () => {
  it('renders Form with populated data', () => {
    const { container, queryByText, queryByPlaceholderText, queryByTestId } =
      render(
        <Form>
          <Form.Title>Sign In Now</Form.Title>
          <Form.Base>
            <Form.Error>Form error</Form.Error>
            <Form.Input type='text' placeholder='Email or phone number' />
            <Form.Input type='password' placeholder='Password' error={true} />

            <Form.Submit isLoading={false}>Sign In</Form.Submit>

            <Form.Row>
              <Form.Row>
                <Form.Checkbox id='rememberMe' />
                <label htmlFor='rememberMe'>Remember me</label>
              </Form.Row>
              <Form.Link to={'/home'}>Need help?</Form.Link>
            </Form.Row>
          </Form.Base>
          <Form.TextBig data-testid='text-big'>
            New to Netflix?{' '}
            <Form.Link to={'/home'} color='#fff'>
              Sign up now
            </Form.Link>
          </Form.TextBig>
          <Form.Text data-testid='text'>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
            <Form.TextButton>Learn more.</Form.TextButton>
          </Form.Text>
        </Form>,
        { wrapper: MemoryRouter }
      );

    // title
    expect(queryByText('Sign In Now')).toBeTruthy();

    // error
    expect(queryByText('Form error')).toBeTruthy();

    // text input
    expect(queryByPlaceholderText('Email or phone number')).toBeTruthy();

    // password input with error=true
    expect(queryByPlaceholderText('Password')).toBeTruthy();

    // submit button
    expect(queryByText('Sign In')).toHaveAttribute('type', 'submit');

    // checkbox
    expect(container.querySelector('#rememberMe')).toBeTruthy();

    // link
    expect(queryByText('Need help?')).toBeTruthy();

    // link with color
    expect(queryByText('Sign up now')).toBeTruthy();

    // big text
    expect(queryByTestId('text-big')).toBeTruthy();

    // text
    expect(queryByTestId('text')).toBeTruthy();

    // text button
    expect(queryByText('Learn more.')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders Form with submit button in loading state', () => {
    const { container, queryByText } = render(
      <Form>
        <Form.Submit isLoading={true}>Sign In</Form.Submit>
      </Form>,
      { wrapper: MemoryRouter }
    );

    expect(queryByText('Sign In')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
