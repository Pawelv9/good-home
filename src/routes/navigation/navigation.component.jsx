import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as HomeLogo } from '../../assets/home.svg'
import CartDropdown from '../../components/card-dropdown/card-dropdown.component';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <HomeLogo className='logo' />
        </Link>
        <CartIcon />
        <div className="nav-links-container">
          <Link className='nav-link' to='/store'>
            Discover
          </Link>
          {
            currentUser ? (
              <Link onClick={signOutUser} className='nav-link'>Sign Out</Link>
            ) : (
              <Link className='nav-link' to='/sign-in'>
                Sign In
              </Link>)
          }

          <Link className='nav-link' to='/register'>
            Register
          </Link>
        </div>
        {
          isCartOpen &&
          <CartDropdown />}
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;