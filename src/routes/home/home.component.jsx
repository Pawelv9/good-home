import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Lamps',
      imageUrl: 'https://i.ibb.co/HqPNCjP/lamps-main.jpg',
      route: 'store/lamps',
    },
    {
      id: 2,
      title: 'Bookshelves',
      imageUrl: 'https://i.ibb.co/TrrbMgr/bookshelves-main.jpg',
      route: 'store/bookshelves',
    }
  ]

  return (
    <>
      <Directory categories={categories} />
      <Outlet />
    </>
  );
}

export default Home;
