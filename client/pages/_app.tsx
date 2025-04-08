import '@/styles/globals.css';
import '@/styles/globals.scss';

import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import type { ReactElement, ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import ModalWrapper from '@/modals';
import store, { persistor } from '@/store';

NProgress.configure({
  minimum: 0.3,
  easing: 'ease',
  speed: 800,
  showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export type NextPageWithLayout<P = Record<string, unknown>, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const Application: React.FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  const ComponentWithLayout = getLayout(<Component {...pageProps} />);

  return (
    <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {ComponentWithLayout}
        <ModalWrapper />
      </PersistGate>
    </ReduxProvider>
  );
};

export default Application;
