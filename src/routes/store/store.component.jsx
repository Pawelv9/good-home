import { useContext } from 'react';
import ItemPreview from '../../components/item-preview/item-preview.component';
import { ItemsContext } from '../../contexts/items.context';
import './store.styles.scss'

const Store = () => {
  const { items } = useContext(ItemsContext);

  return (
    <div className='store-container'>
      {Object.keys(items).map(key => {
        const itemsStore = items[key];
        return <ItemPreview key={key} title={key} items={itemsStore} />
      })}
    </div>
  );
};

export default Store;