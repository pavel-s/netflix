import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { useAuth } from '../hooks';
import { TUserProfile } from '../types';

const DEFAULT_USER_PHOTO = 'images/users/1.png';
const BACKGROUND_IMAGE = 'images/misc/joker1.jpg';
const LOGO = 'images/misc/logo.svg';

const BrowseContainer = ({ profile }: { profile: TUserProfile }) => {
  const { signOut } = useAuth();

  return (
    <Header url={BACKGROUND_IMAGE} hideOnSmallViewPort>
      <Header.Frame>
        <Header.Group>
          <Header.Logo to={ROUTES.HOME} src={LOGO} />
          <Header.TextButton active>Films</Header.TextButton>
          <Header.TextButton>Series</Header.TextButton>
        </Header.Group>
        <Header.Group>
          <Header.Search />
          <Header.Profile>
            <Header.ProfileImage
              url={profile.photoURL ? profile.photoURL : DEFAULT_USER_PHOTO}
            />
            <Header.Dropdown>
              <Header.Group>
                <Header.ProfileImage
                  url={profile.photoURL ? profile.photoURL : DEFAULT_USER_PHOTO}
                />
                <Header.TextButton>{profile.displayName}</Header.TextButton>
              </Header.Group>
              <Header.TextButton onClick={signOut}>Sign out</Header.TextButton>
            </Header.Dropdown>
          </Header.Profile>
        </Header.Group>
      </Header.Frame>
      <Header.Feature>
        <Header.FeatureCallOut>Watch Joker now.</Header.FeatureCallOut>
        <Header.Text>
          Forever alone in a crowd, failed comedian Arthur Fleck seeks
          connection as he walks the streets of Gotham City. Arthur wears two
          masks -- the one he paints for his day job as a clown, and the guise
          he projects in a futile attempt to feel like he's part of the world
          around him.
        </Header.Text>
        <Header.PlayButton>Play</Header.PlayButton>
      </Header.Feature>
    </Header>
  );
};

export default BrowseContainer;
