import '../styles/globals.css';
import Head from 'next/head';
// redux
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import {  ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../public/SSR/Theme';
import createEmotionCache from '../public/SSR/createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const getLayout = Component.getLayout || ((page) => page);
  return getLayout(
  
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Company</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>

  )
}

export default MyApp

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};