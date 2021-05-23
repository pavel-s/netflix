import { Header } from '../components';
import { TFirebaseUser } from '../lib/firebase.prod';
import * as ROUTES from '../constants/routes';
import Profiles from '../components/profiles';

const ProfileSelector = ({
  user,
  setProfile,
}: {
  user: TFirebaseUser | null;
  setProfile: (profile: any) => any;
}) => {
  const handleSelect = () =>
    setProfile(
      user ? { displayName: user.displayName, photoURL: user.photoURL } : null
    );
  return (
    <>
      <Header>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src='/images/misc/logo.svg'
            alt='Netflix'
          />
        </Header.Frame>
        <Profiles>
          <Profiles.Title>Who is watching?</Profiles.Title>
          <Profiles.List>
            <Profiles.User onClick={handleSelect}>
              <Profiles.Avatar src='images/users/1.png' />
              <Profiles.Name>{user?.displayName}</Profiles.Name>
            </Profiles.User>
            <Profiles.User onClick={handleSelect}>
              <Profiles.Avatar src='images/users/1.png' />
              <Profiles.Name>{user?.displayName}</Profiles.Name>
            </Profiles.User>
            <Profiles.User onClick={handleSelect}>
              <Profiles.Avatar src='images/users/1.png' />
              <Profiles.Name>{user?.displayName}</Profiles.Name>
            </Profiles.User>
          </Profiles.List>
        </Profiles>
      </Header>
    </>
  );
};

export default ProfileSelector;
