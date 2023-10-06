import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './../Header/Header';
import Loader from './../Loader/Loader';

import Wrapper from './Layout.styled';

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<Loader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
