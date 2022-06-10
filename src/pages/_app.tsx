import '../../styles/globals.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { NextIntlProvider } from 'next-intl';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { useMemo } from 'react';
import { useRouter } from 'next/router';

import English from "../locales/en.json";
import Portuguese from "../locales/pt.json";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { locale } = useRouter();
  const [shortLocale] = locale ? locale.split("-") : ["en"];

  const messages = useMemo(() => {
      switch (shortLocale) {
          case "pt":
              return Portuguese;
          case "en":
              return English;
          default:
              return English;
      }
  }, [shortLocale]);

  return (
    <ThemeProvider attribute="class">
        <NextIntlProvider messages={messages}>
          <NavBar />
            <Component {...pageProps} />
          <Footer />
        </NextIntlProvider>
    </ThemeProvider>
  )
}

export default MyApp;