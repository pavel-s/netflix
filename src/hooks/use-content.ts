import { useEffect, useState } from 'react';
import firebase from '../lib/firebase.prod';
import { TMediaItem } from '../types';

export const useContent = (type: 'films' | 'series') => {
  const [content, setContent] = useState<TMediaItem[]>([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection(type)
      .get()
      .then((snapshot) => {
        const result = snapshot.docs.map(
          (docObj) =>
            ({
              ...docObj.data(),
              docId: docObj.id,
            } as TMediaItem)
        );
        setContent(result);
      })
      .catch((error) => console.log(error.message));
  }, [type]);
  return content;
};
