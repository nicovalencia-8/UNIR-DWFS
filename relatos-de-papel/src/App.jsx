import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} 
  from 'react-router-dom'
import MainLayout from './layouts/MainLayout';
import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FavoritesPage from './pages/FavoritesPage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout/>}>
        <Route path='/home' element={<HomePage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/favorites' element={<FavoritesPage/>} />
        <Route path='/user' element={<UserPage/>} />
        <Route path='/*' element={<NotFoundPage/>}/>
      </Route>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>

    </>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
