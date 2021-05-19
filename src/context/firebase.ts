import { createContext } from 'react';
import { TFirebase } from '../lib/firebase.prod';

export const FirebaseContext = createContext<TFirebase | null>(null);
