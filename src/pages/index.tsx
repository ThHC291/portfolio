import type { NextPage } from 'next';
import { useTranslations } from 'next-intl';

const Home: NextPage = () => {
  const t = useTranslations('NavBar');
  
  return (
    <h1>{t('home')}</h1>
  )
}

export default Home;
