import ItemCard from '../item-card/item-card.component';
import './item-preview.styles.scss';

const ItemPreview = ({ title, items }) => (
  <div className='item-preview'>
    <h2>
      <span className='title'>{title.toUpperCase()}</span>
    </h2>
    <div className="preview">
      {items
        .filter((_, i) => i < 4)
        .map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default ItemPreview;