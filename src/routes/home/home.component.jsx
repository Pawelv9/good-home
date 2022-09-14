import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const categories = [
  {
    id: 1,
    title: 'Lamps',
    imageUrl: 'https://i.ibb.co/HqPNCjP/lamps-main.jpg'
  },
  {
    id: 2,
    title: 'Bookshelves',
    imageUrl: 'https://i.ibb.co/TrrbMgr/bookshelves-main.jpg'
  }
]

const Home = () => {
  return (
    <>
      <Outlet />
      <Directory categories={categories} />
    </>
  );
}

export default Home;
