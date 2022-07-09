import '../../styles/globals.css';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { NextIntlProvider } from 'next-intl';

import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion'

import English from '../locales/en.json';
import Portuguese from '../locales/pt.json';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps, router }: AppProps) => {
	const { locale } = useRouter();
	const [shortLocale] = locale ? locale.split('-') : ['en'];

	const messages = useMemo(() => {
		switch (shortLocale) {
			case 'pt':
				return Portuguese;
			case 'en':
				return English;
			default:
				return English;
		}
	}, [shortLocale]);

	return (
		<ThemeProvider attribute="class">
			<NextIntlProvider messages={messages}>
				<Layout>
					<motion.div
						key={router.route}
						initial={{ opacity: 0, x: -200, y: 0 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						exit={{ opacity: 0, x: 0, y: -100 }}
						transition={{ type: 'linear' }}
						className=""
					>
						<Component {...pageProps} />
					</motion.div>
				</Layout>
			</NextIntlProvider>
		</ThemeProvider>
	);
};

export default MyApp;
