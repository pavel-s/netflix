import { fireEvent, render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router';
import { useAuth } from '../../hooks';
import SignUP from '../../pages/signup';

jest.mock('../../hooks', () => {
  return { useAuth: jest.fn() };
});

describe('<SignUp />', () => {
  it('renders SignUp page', async () => {
    // @ts-ignore
    useAuth.mockReturnValue({
      signUp: () => Promise.resolve('sign up success'),
    });
    const {
      container,
      queryByTestId,
      getByPlaceholderText,
      getByTestId,
      getAllByTestId,
    } = render(<SignUP />, {
      wrapper: MemoryRouter,
    });

    // no error
    expect(queryByTestId('form-error')).toBeFalsy();

    // enter incorrect values
    await act(async () => {
      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: '' },
      });
      fireEvent.change(getByPlaceholderText('Email or phone number'), {
        target: { value: 'gg' },
      });
      fireEvent.change(getByPlaceholderText('Password'), {
        target: { value: 'gg' },
      });
    });

    await act(async () => {
      fireEvent.click(getByTestId('form-submit'));
    });

    // errors
    expect(getAllByTestId('form-error')).toBeTruthy();

    // enter correct values
    await act(async () => {
      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'Bob' },
      });
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
    expect(getByPlaceholderText('Name')).toHaveValue('Bob');
    expect(getByPlaceholderText('Email or phone number')).toHaveValue(
      'gggrres@fffg.cc'
    );
    expect(getByPlaceholderText('Password')).toHaveValue('ttttt7777qqqq');

    expect(container.firstChild).toMatchSnapshot();
  });

  it('submit form return error', async () => {
    // @ts-ignore
    useAuth.mockReturnValue({
      signUp: () => Promise.reject({ message: 'sign up reject' }),
    });

    const { container, getByTestId, getByPlaceholderText, getByText } = render(
      <SignUP />,
      {
        wrapper: MemoryRouter,
      }
    );

    // enter correct values
    await act(async () => {
      fireEvent.change(getByPlaceholderText('Name'), {
        target: { value: 'Bob' },
      });
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
    expect(getByText('sign up reject')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
