import '../styles/globals.css';
import Header from '@components/Header';
import type { AppProps } from 'next/app';
import AppContext from '@context/AppContext';
import useInitialState from '@hooks/useInitialState';

export default function App({ Component, pageProps }: AppProps) {
  const initialState = useInitialState();

  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}
