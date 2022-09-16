import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as HomeLogo } from '../../assets/home.svg'
import { UserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.styles.scss';

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHangdler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <HomeLogo className='logo' />
        </Link>
        <div className="nav-links-container">
          <Link className='nav-link' to='/shop'>
            Discover
          </Link>
          {
            currentUser ? (
              <Link onClick={signOutHangdler} className='nav-link'>Sign Out</Link>
            ) : (
              <Link className='nav-link' to='/sign-in'>
                Sign In
              </Link>)
          }

          <Link className='nav-link' to='/register'>
            Register
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;