import { useEffect, useState } from 'react';
import { Loading } from '../components';
import BrowseContainer from '../containers/browse';
import ProfileSelector from '../containers/ProfileSelector';
import { useAuthUser } from '../hooks';
import { TUserProfile } from '../types';

const Browse = () => {
  const user = useAuthUser();

  const [loading, setLoading] = useState(true);

  const [profile, setProfile] = useState<TUserProfile | null>(null);

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
    <ProfileSelector user={user} setProfile={setProfile} />
  );
};

export default Browse;
