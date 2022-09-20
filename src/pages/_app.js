import AppContext from '@context/AppContext';
import Header from '@components/Header';
import useInitialState from '@hooks/useInitialState';
import PresentationCointainer from '@containers/PresentationCointainer';
import '@styles/globals.css';

function MyApp({ Component, pageProps }) {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <Header />
      <PresentationCointainer />
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
