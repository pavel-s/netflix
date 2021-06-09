import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Browse from '../../pages/browse';

jest.mock('../../containers/browse', () => {
  return () => <div>Browse Container</div>;
});

beforeEach(() => {
  jest.useFakeTimers();
});
afterEach(() => {
  jest.useRealTimers();
});

describe('<Browse />', () => {
  it('renders Browse page and select profile', async () => {
    const { queryByText, getAllByText, queryAllByText, queryByTestId } = render(
      <Browse user={{ displayName: 'Bob', photoURL: '/images/users/1.png' }} />,
      { wrapper: MemoryRouter }
    );

    // profile selector
    expect(getAllByText('Bob')[0]).toBeTruthy();

    fireEvent.click(getAllByText('Bob')[0]);

    // no profile selector
    expect(queryAllByText('Bob')[0]).toBeFalsy();

    // loading
    expect(queryByTestId('loading')).toBeTruthy();

    act(() => {
      jest.advanceTimersByTime(1100);
    });

    // no loading
    expect(queryByTestId('loading')).toBeFalsy();

    // browse container
    expect(queryByText('Browse Container')).toBeTruthy();
  });

  it('renders Browser page with user without photo', () => {
    const { queryByText, getAllByText, queryAllByText, queryByTestId } = render(
      <Browse user={{ displayName: 'Bob', photoURL: null }} />,
      { wrapper: MemoryRouter }
    );

    // pick profile
    fireEvent.click(getAllByText('Bob')[0]);

    // loading
    expect(queryByTestId('loading')).toBeTruthy();
  });
});
