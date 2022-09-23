import { useContext } from 'react';
import ItemPreview from '../../components/item-preview/item-preview.component';
import { ItemsContext } from '../../contexts/items.context';
import './shop.styles.scss'

const Shop = () => {
  const { items } = useContext(ItemsContext);

  return (
    <>
      {Object.keys(items).map(key => {
        const itemsStore = items[key];
        return <ItemPreview key={key} title={key} items={itemsStore} />
      })}
    </>
  );
};

export default Shop;