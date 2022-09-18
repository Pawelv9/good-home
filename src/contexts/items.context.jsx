import { createContext, useState } from 'react';

import ITEMS from '../store-data.json';

export const ItemsContext = createContext({
  items: [],
});

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(ITEMS);
  const value = { items };
  return (
    <ItemsContext.Provider value={value}>{children}</ItemsContext.Provider>
  );
};