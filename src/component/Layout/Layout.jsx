import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from '../Header/Header';
import CustomLoader from 'component/CustomLoader/CustomLoader';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background-color: var(--bgColor);

  @supports (overflow: clip) {
    overflow: clip;
  }

  min-height: 100vh;

  & > main {
    flex: 1 1 auto;
  }

  & > * {
    min-width: 0;
  }
`;

const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <Suspense fallback={<CustomLoader />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Wrapper>
  );
};

export default Layout;
