import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCard from '../../components/item-card/item-card.component';
import { ItemsContext } from '../../contexts/items.context';
import './item.styles.scss';

const Item = () => {
  const { item } = useParams();
  const { itemsMap } = useContext(ItemsContext);
  const [items, setItems] = useState(itemsMap[item])

  useEffect(() => {
    setItems(itemsMap[item]);
  }, [item, itemsMap]);

  return (
    <>
      <h2 className="item-title">{item.toUpperCase()}</h2>
      <div className="item-container">
        {items &&
          items.map(item => (
            <ItemCard key={item.id} item={item} />
          ))
        }
      </div>
    </>
  )
}

export default Item;