import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as HomeLogo } from '../../assets/home.svg'
import './navigation.styles.scss';

const Navigation = () => {
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
          <Link className='nav-link' to='/sign-in'>
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;