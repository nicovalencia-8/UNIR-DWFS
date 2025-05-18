import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} 
  from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import MainLayout from './layouts/MainLayout';
import CategoriesPage from './pages/CategoriesPage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import FavoritesPage from './pages/FavoritesPage';
import UserPage from './pages/UserPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout/>}>
        <Route path='/home' element={<LandingPage/>} />
        <Route path='/categorias' element={<CategoriesPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/cart' element={<CartPage/>} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/favorites' element={<FavoritesPage/>} />
        <Route path='/user' element={<UserPage/>} />
      </Route>
      <Route path='/' element={<LoginPage/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
}

export default App
