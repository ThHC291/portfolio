import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from "next-themes";
import { NextIntlProvider } from 'next-intl';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
        <NextIntlProvider messages={pageProps.messages}>
          <Component {...pageProps} />
        </NextIntlProvider>
    </ThemeProvider>
  )
}

export default MyApp;