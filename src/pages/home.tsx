import { NextPage } from 'next';
import { useTranslations } from 'next-intl';

const Home: NextPage = () => {
  const t = useTranslations('NavBar');

  return (
    <>
      <div className="container flex flex-wrap h-screen overflow-y-auto p-4 mx-auto md:pl-24 lg:pl-24 xl:pl-24">

        <div className="flex flex-grow flex-col md:w-2/5 justify-center items-start text-center md:text-left lg:w-1/2 xl:w-1/2">
          <div className="w-full font-semibold text-xl lg:text-4xl xl:text-4xl">
            Hello, i'm
          </div>
          <div className="w-full my-3 text-4xl font-bold text-primary lg:text-8xl xl:text-8xl">
            Thiago Chinen
          </div>
          <div className="w-full text-xl font-semibold lg:text-4xl xl:text-4xl">
            Software developer, living in Brasil.<br></br>
            Always trying learning something new.
          </div>
        </div>

        <div className="flex flex-wrap bg-main-color py-6">
          <img src="/photo.jfif" alt="photo"/>
        </div>

      </div>
    </>
  );
}

export default Home;
