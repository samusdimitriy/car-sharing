import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const Catalog = lazy(() => import('pages/Catalog/Catalog'));
const Favorites = lazy(() => import('pages/Favorites/Favorites'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        transition={Slide}
        theme="light"
      />
    </>
  );
}

export default App;
