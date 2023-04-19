import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { SnackbarProvider } from 'notistack';

const myCache = createCache({
  key: 'my-prefix-key',
  stylisPlugins: [],
  insertionPoint: document.getElementById('emotion-insertion-point'),
});

const Layout = () => {
  return (
    <>
      <CacheProvider value={myCache}>
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <Header />
          <main>
            <Outlet />
          </main>
        </SnackbarProvider>
      </CacheProvider>
    </>
  );
};

export default Layout;
