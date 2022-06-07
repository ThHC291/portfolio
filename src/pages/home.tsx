import { GetStaticPropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import NavBar from '../components/NavBar';

const Home: NextPage = () => {
  const t = useTranslations('NavBar');

  return (
    <>
      <NavBar/>
      <div>
        <div className="mt-2 text-xl font-bold">
          Hello, i'm
        </div>
        <div className="p-0 mt-0 font-bold text-8xl text-primary">
          Thiago Chinen
        </div>
        <div className="mt-2 text-xl font-bold">
          Software developer, living in Brasil.<br></br>
          Always trying learning something new.
        </div>
      </div>
    </>
  );
}

export default Home;

export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: ( await import(`../locales/${locale}.json`) ).default
    }
  };
}
