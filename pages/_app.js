import Head from 'next/head';

import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/globals.css';

import useWindowSize from '../hooks/useWindowSize';
import MobileHeader from '../components/MobileHeader';

function MyApp({ Component, pageProps }) {
  const screen = useWindowSize();
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Roboto:wght@300;500;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      {screen.width < 769 ? <MobileHeader /> : <Header />}
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
