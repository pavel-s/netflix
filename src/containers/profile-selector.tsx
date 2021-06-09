import { Header } from '../components';
import { TFirebaseUser } from '../lib/firebase.prod';
import * as ROUTES from '../constants/routes';
import Profiles from '../components/profiles';
import { TUserProfile } from '../types';
import { Dispatch } from 'react';

const ProfileSelector = ({
  user,
  setProfile,
}: {
  user: Pick<TFirebaseUser, 'photoURL' | 'displayName'>;
  setProfile: Dispatch<TUserProfile | null>;
}) => {
  const handleSelect = () =>
    setProfile({ displayName: user.displayName, photoURL: user.photoURL });

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
