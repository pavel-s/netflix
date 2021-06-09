import { useEffect, useState } from 'react';
import { Loading } from '../components';
import BrowseContainer from '../containers/browse';
import ProfileSelector from '../containers/profile-selector';
import { TFirebaseUser } from '../lib/firebase.prod';
import { TUserProfile } from '../types';

const Browse = ({
  user,
}: {
  user: Pick<TFirebaseUser, 'displayName' | 'photoURL'>;
}) => {
  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState<TUserProfile | null>(null);

  const handleSetProfile = (profile: TUserProfile | null) => {
    setLoading(true);
    setProfile(profile);
  };

  // fake data loading
  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [profile?.displayName]);

  return profile ? (
    loading ? (
      <Loading
        size='15rem'
        src={profile.photoURL ? String(profile.photoURL) : undefined}
      />
    ) : (
      <BrowseContainer profile={profile} />
    )
  ) : (
    <ProfileSelector user={user} setProfile={handleSetProfile} />
  );
};

export default Browse;
