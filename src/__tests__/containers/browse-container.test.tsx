import { act, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import BrowseContainer from '../../containers/browse';
import { useAuth, useContent } from '../../hooks';
import content from './mockContent.json';

const profile = {
  displayName: 'Bob',
  photoURL: '/images/users/1.png',
};

jest.mock('../../hooks', () => {
  return {
    useContent: jest.fn(),
    useAuth: jest.fn(),
  };
});

describe('<BrowseContainer />', () => {
  it('renders BrowseContainer with populated data', async () => {
    // @ts-ignore
    useContent.mockImplementation((category) => content[category]);
    // @ts-ignore
    useAuth.mockReturnValue({
      signOut: () => Promise.resolve('sign out success'),
    });

    const { container, getByText, getByAltText, getByTestId, queryByAltText } =
      render(<BrowseContainer profile={profile} />, {
        wrapper: MemoryRouter,
      });

    // categories
    expect(getByText('Films')).toBeTruthy();
    expect(getByText('Series')).toBeTruthy();

    // item from category 'Films'
    expect(getByAltText('Kings Speech')).toBeTruthy();

    // toggle category to 'Series'
    await act(async () => {
      fireEvent.click(getByText('Series'));
    });

    expect(useContent).toHaveBeenCalledWith('series');

    // item from category 'Series'
    expect(getByAltText('The Office')).toBeTruthy();

    // search with term 'The'
    await act(async () => {
      fireEvent.change(getByTestId('search-input'), {
        target: { value: 'The' },
      });
    });

    // 'The Office' found
    expect(getByAltText('The Office')).toBeTruthy();

    // search with term 'juno'
    await act(async () => {
      fireEvent.change(getByTestId('search-input'), {
        target: { value: 'juno' },
      });
    });

    // 'The Office' not found, but 'Juno' found
    expect(queryByAltText('The Office')).toBeFalsy();
    expect(queryByAltText('Juno')).toBeTruthy();

    // card feature hidden
    expect(queryByAltText('close')).toBeFalsy();

    // click on 'Juno' card
    await act(async () => {
      fireEvent.click(getByAltText('Juno'));
    });

    // card feature show (close button)
    expect(queryByAltText('close')).toBeTruthy();

    // close card feature
    await act(async () => {
      fireEvent.click(getByAltText('close'));
    });

    // card feature hidden
    expect(queryByAltText('close')).toBeFalsy();

    // clear search and toggle back to films
    await act(async () => {
      fireEvent.change(getByTestId('search-input'), { target: { value: '' } });
      fireEvent.click(getByText('Films'));
    });

    // item from category 'Films'
    expect(getByAltText('Kings Speech')).toBeTruthy();

    expect(container).toMatchSnapshot();
  });

  it('renders BrowserContainer with profile without photo', () => {
    // @ts-ignore
    useContent.mockImplementation((category) => content[category]);
    // @ts-ignore
    useAuth.mockReturnValue({
      signOut: () => Promise.resolve('sign out success'),
    });

    const { queryByText } = render(
      <BrowseContainer profile={{ ...profile, photoURL: null }} />,
      { wrapper: MemoryRouter }
    );

    expect(queryByText('Bob')).toBeTruthy();
  });
});
