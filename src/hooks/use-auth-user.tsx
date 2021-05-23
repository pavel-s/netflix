import { useEffect, useState } from 'react';
import firebase, { auth, TFirebaseUser } from '../lib/firebase.prod';

const USER_STORAGE_KEY = 'authUser';

export const useAuthUser = () => {
  const storedUser = localStorage.getItem(USER_STORAGE_KEY);

  const [user, setUser] = useState<TFirebaseUser | null>(
    storedUser ? JSON.parse(storedUser) : null
  );

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
        setUser(user);
      } else {
        localStorage.removeItem(USER_STORAGE_KEY);
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  return user;
};

const signUp = ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password: string;
}): Promise<void> => {
  return auth.createUserWithEmailAndPassword(email, password).then((result) =>
    result.user?.updateProfile({
      displayName: name,
      photoURL: `images/users/${Math.floor(Math.random() * 5) + 1}.png`,
    })
  );
};

const signOut = () => auth.signOut();

const signIn = ({ email, password }: { email: string; password: string }) => {
  return auth.signInWithEmailAndPassword(email, password);
};

const authMethods = { signUp, signOut, signIn };
export const useAuth = () => {
  return authMethods;
};
