import { GetStaticPropsContext, NextPage } from 'next';
import { useTranslations } from 'next-intl';
import NavBar from '../components/NavBar';

const Home: NextPage = () => {
  const t = useTranslations('NavBar');

  return (
    <>
      <NavBar />

      <div className="container flex flex-wrap h-screen overflow-y-auto p-4 mx-auto md:pl-24 lg:pl-24 xl:pl-24">

        <div className="flex flex-grow flex-col md:w-2/5 justify-center items-start text-center md:text-left lg:w-1/2 xl:w-1/2">
          <div className="w-full font-semibold text-xl lg:text-4xl xl:text-4xl">
            Hello, i'm
          </div>
          <div className="w-full my-3 text-5xl font-bold leading-tight text-primary lg:text-8xl xl:text-8xl">
            Thiago Chinen
          </div>
          <div className="w-full text-xl font-semibold lg:text-4xl xl:text-4xl">
            Software developer, living in Brasil.<br></br>
            Always trying learning something new.
          </div>
        </div>

        <div className="flex justify-center w-full h-full bg-main-color md:w-3/5 py-6 lg:w-1/2 xl:w-1/2">
          <img src="/photo.jfif" alt="photo"/>
        </div>

      </div>

      {/* <footer className="w-full h-2 bg-primary">

      </footer> */}

    </>
  );
}

export default Home;

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default
    }
  };
}
