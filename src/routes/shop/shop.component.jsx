import { useContext } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import { ItemsContext } from '../../contexts/items.context';
import './shop.styles.scss'

const Shop = () => {
  const { items } = useContext(ItemsContext);

  return (
    <div className='items-container'>
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Shop;