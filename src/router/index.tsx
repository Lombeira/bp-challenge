import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { NoMatch } from '../pages/NoMatch';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/dashboard' element={<Layout />}>
        <Route path='home' element={<Home />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
      {/* <Route path='*' element={<NoMatch />} /> */}
    </Routes>
  </BrowserRouter>
);
