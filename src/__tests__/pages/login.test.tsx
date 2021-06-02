import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';
import { useAuth } from '../../hooks';
import Login from '../../pages/login';

jest.mock('../../hooks', () => {
  return {
    useAuth: jest.fn(),
  };
});

const CAPTCHA_TERMS =
  'The information collected by Google reCAPTCHA is subject to the Google Privacy Policy and Terms of Service, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalized advertising by Google).';

describe('<Login />', () => {
  it('renders Login page', async () => {
    // @ts-ignore
    useAuth.mockReturnValue({
      signIn: () => Promise.resolve('sign in success'),
    });
    const {
      container,
      getByTestId,
      getByPlaceholderText,
      queryByTestId,
      getAllByTestId,
      getByText,
      queryByText,
    } = render(<Login />, {
      wrapper: MemoryRouter,
    });

    // no error
    expect(queryByTestId('form-error')).toBeFalsy();

    // enter incorrect values
    await act(async () => {
      fireEvent.change(getByPlaceholderText('Email or phone number'), {
        target: { value: 'gg' },
      });
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'tt' },
      });
    });

    // error
    expect(getAllByTestId('form-error')).toBeTruthy();

    // enter correct values
    await act(async () => {
      fireEvent.change(getByPlaceholderText('Email or phone number'), {
        target: { value: 'gggrres@fffg.cc' },
      });
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'ttttt7777qqqq' },
      });
    });

    // submit
    await act(async () => {
      fireEvent.click(getByTestId('form-submit'));
    });

    // new inputs values
    expect(getByPlaceholderText('Email or phone number')).toHaveValue(
      'gggrres@fffg.cc'
    );
    expect(getByPlaceholderText('Password')).toHaveValue('ttttt7777qqqq');

    // captcha terms hidden
    expect(queryByText(CAPTCHA_TERMS)).toBeFalsy();

    // show captcha terms button
    expect(getByText('Learn more.')).toBeTruthy();
    fireEvent.click(getByText('Learn more.'));

    // captcha terms
    expect(queryByText(CAPTCHA_TERMS)).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('submit form return error', async () => {
    // @ts-ignore
    useAuth.mockReturnValue({
      signIn: () => Promise.reject({ message: 'sign in reject' }),
    });

    const { container, getByTestId, getByPlaceholderText, getByText } = render(
      <Login />,
      {
        wrapper: MemoryRouter,
      }
    );

    // enter correct values
    await act(async () => {
      fireEvent.change(getByPlaceholderText('Email or phone number'), {
        target: { value: 'gggrres@fffg.cc' },
      });
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'ttttt7777qqqq' },
      });
    });

    // submit
    await act(async () => {
      fireEvent.click(getByTestId('form-submit'));
    });

    // submit error
    expect(getByText('sign in reject')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
