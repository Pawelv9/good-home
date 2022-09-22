import { Fragment, useContext } from 'react';
import ItemCard from '../../components/item-card/item-card.component';
import { ItemsContext } from '../../contexts/items.context';
import './shop.styles.scss'

const Shop = () => {
  const { items } = useContext(ItemsContext);

  return (
    <>
      {Object.keys(items).map(title => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='items-container'>
            {items[title].map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;