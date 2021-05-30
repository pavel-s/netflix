import { fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { Header } from '../../components';
import * as ROUTES from './../../constants/routes';

const DEFAULT_USER_PHOTO = 'images/users/1.png';
const BACKGROUND_IMAGE = 'images/misc/joker1.jpg';
const LOGO = 'images/misc/logo.svg';

describe('<Header />', () => {
  it('renders full Header', () => {
    const setCategory = jest.fn();

    const searchTerm = 'frozen';
    const setSearchTerm = jest.fn();

    const profile = {
      displayName: 'Steve',
      photoURL: '/images/users/2.png',
    };

    const signOut = jest.fn();

    const { container, queryByText, queryByAltText, getByText, getByTestId } =
      render(
        <Header url={BACKGROUND_IMAGE} hideOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} src={LOGO} alt='Netflix' />
              <Header.TextButton active onClick={() => setCategory('films')}>
                Films
              </Header.TextButton>
              <Header.TextButton onClick={() => setCategory('series')}>
                Series
              </Header.TextButton>
            </Header.Group>
            <Header.Group>
              <Header.Search
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Header.Profile>
                <Header.ProfileImage
                  url={profile.photoURL ? profile.photoURL : DEFAULT_USER_PHOTO}
                />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.ProfileImage
                      url={
                        profile.photoURL ? profile.photoURL : DEFAULT_USER_PHOTO
                      }
                    />
                    <Header.TextButton>{profile.displayName}</Header.TextButton>
                  </Header.Group>
                  <Header.TextButton onClick={signOut}>
                    Sign out
                  </Header.TextButton>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>
          <Header.Feature>
            <Header.FeatureCallOut>Watch Joker now.</Header.FeatureCallOut>
            <Header.Text>Forever alone in a crowd</Header.Text>
            <Header.PlayButton>Play</Header.PlayButton>
          </Header.Feature>
        </Header>,
        { wrapper: MemoryRouter }
      );
    // logo
    expect(queryByAltText('Netflix')).toBeTruthy();

    // category
    const categoryButton = getByText('Films');
    expect(categoryButton).toBeTruthy();
    fireEvent.click(categoryButton);
    expect(setCategory).toBeCalled();

    // search
    const searchInput = getByTestId('search-input');
    expect(searchInput).not.toHaveFocus();
    fireEvent.click(getByTestId('search-button'));
    expect(searchInput).toHaveFocus();

    fireEvent.change(searchInput, {
      target: { value: 'Joker' },
    });
    expect(setSearchTerm).toBeCalledWith('Joker');

    // sign out button
    expect(queryByText('Sign out')).toBeTruthy();

    // feature callout
    expect(queryByText('Watch Joker now.')).toBeTruthy();

    // header text
    expect(queryByText('Forever alone in a crowd')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders basic Header with background', () => {
    const { container, queryByText, queryByAltText } = render(
      <Header url={'/images/misc/home-bg.jpg'}>
        <Header.Frame>
          <Header.Logo src='/images/misc/logo.svg' alt='Netflix' />
          <Header.SignButton to={'/login'}>Sign In</Header.SignButton>
        </Header.Frame>
      </Header>,
      { wrapper: MemoryRouter }
    );

    expect(queryByAltText('Netflix')).toBeTruthy();
    expect(queryByText('Sign In')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders basic Header without background', () => {
    const { container, queryByText, queryByAltText } = render(
      <Header>
        <Header.Frame>
          <Header.Logo src='/images/misc/logo.svg' alt='Netflix' />
          <Header.SignButton to={'/login'}>Sign In</Header.SignButton>
        </Header.Frame>
      </Header>,
      { wrapper: MemoryRouter }
    );

    expect(queryByAltText('Netflix')).toBeTruthy();
    expect(queryByText('Sign In')).toBeTruthy();

    expect(container.firstChild).toMatchSnapshot();
  });
});
