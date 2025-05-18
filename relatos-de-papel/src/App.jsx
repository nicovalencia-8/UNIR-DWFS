import {
  Route, 
  createBrowserRouter, 
  createRoutesFromElements, 
  RouterProvider} 
  from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import MainLayout from './layouts/MainLayout';
import Categories from './pages/Categories';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<MainLayout/>}>
        <Route path='/home' element={<LandingPage/>} />
        <Route path='/categorias' element={<Categories/>} />
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
