import '../../styles/globals.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { NextIntlProvider } from 'next-intl';

import { useMemo } from 'react';
import { useRouter } from 'next/router';

import English from "../locales/en.json";
import Portuguese from "../locales/pt.json";
import Layout from '../components/Layout';

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
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextIntlProvider>
    </ThemeProvider>
  )
}

export default MyApp;