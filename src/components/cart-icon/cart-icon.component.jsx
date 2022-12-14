import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/cart.svg'
import { CartContext } from '../../contexts/cart.context'
import { useContext } from 'react';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartItemCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <span className='item-count'>{cartItemCount}</span>
      <ShoppingIcon className='shopping-icon' />
    </div>
  )
}

export default CartIcon;