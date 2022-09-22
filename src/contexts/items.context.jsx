import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const ItemsContext = createContext({
  items: [],
});

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState({});

  useEffect(() => {
    const getItems = async () => {
      const item = await getCategoriesAndDocuments('categories');
      setItems(item);
    }
    getItems();
  }, [])

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', STORE_DATA)
  // }, [])

  const value = { items };
  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};