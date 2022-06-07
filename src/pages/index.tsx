import type { GetStaticPropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';

const Home: NextPage = () => {
  const t = useTranslations('NavBar');
  
  return (
    <h1>{t('home')}</h1>
  )
}

export default Home;

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: ( await import(`../locales/${locale}.json`) ).default
    }
  };
}
