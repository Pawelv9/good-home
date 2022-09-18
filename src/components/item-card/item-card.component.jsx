import Button from '../button/button.component';
import './item-card.styles.scss';

const ItemCard = ({ item }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className='item-card-container'>
      <img src={imageUrl} alt={`${name}`} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <Button buttonType='inverted'>Add to card</Button>
    </div>
  );
};

export default ItemCard;