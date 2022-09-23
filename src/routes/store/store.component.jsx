import { Route, Routes } from 'react-router-dom';
import Item from '../item/item.component';
import ItemsPreview from '../items-preview/items-preview.component';
import './store.styles.scss'

const Store = () => {
  return (
    <Routes>
      <Route index element={<ItemsPreview />} />
      <Route path=':item' element={<Item />} />
    </Routes>
  );
};

export default Store;