import { Route, Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation.component';
import './App.css';
import Home from './routes/home/home.component';
import RegisterForm from './components/register/register-component';
import SignInForm from './components/sign-in-form/sign-in-form-component';
import Shop from './routes/shop/shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignInForm />} />
        <Route path='register' element={<RegisterForm />} />
      </Route>
    </Routes>
  );
}

export default App;
