import { createContext, useEffect, useState } from 'react';

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils';

export const ItemsContext = createContext({
  itemsMap: [],
});

export const ItemsProvider = ({ children }) => {
  const [itemsMap, setItemsMap] = useState({});

  useEffect(() => {
    const getItems = async () => {
      const item = await getCategoriesAndDocuments('categories');
      setItemsMap(item);
    }
    getItems();
  }, [])

  // useEffect(() => {
  //   addCollectionAndDocuments('categories', STORE_DATA)
  // }, [])

  const value = { itemsMap };
  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};