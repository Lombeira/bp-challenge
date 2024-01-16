import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { NoMatch } from '../pages/NoMatch';
import App from '../App';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='dashboard' element={<App />} />
        <Route path='*' element={<NoMatch />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
