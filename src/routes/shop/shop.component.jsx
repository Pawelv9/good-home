import { useContext } from 'react';
import { ItemsContext } from '../../contexts/items.context';

const Shop = () => {
  const { items } = useContext(ItemsContext);
  return (
    <div>
      {items.map(({ id, name }) => (
        <div key={id}>
          <h1>{name}</h1>
        </div>
      ))}
    </div>
  );
};

export default Shop;