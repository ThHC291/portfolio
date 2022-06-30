// 404.js
import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const FourOhFour: NextPage = () => {
  const t = useTranslations('pages.404');

  return (
    <>
      <section className="container flex flex-col items-center p-4 xl:flex-row gap-x-12">

        <section className="flex flex-grow flex-col md:w-2/5 justify-center items-start text-center md:text-left lg:w-1/2 xl:w-1/2">
          <section className="w-full my-3 text-9xl font-bold text-primary">
            404
          </section>
          <section className="w-full text-xl font-semibold lg:text-4xl xl:text-4xl">
            {t('errorMessage')}
            <br />
            {t('funnyMessage')}
          </section>
        </section>

        <section className="my-6">
          <Image src="/ghost.png" width={700} height={600}></Image>
        </section>

      </section>
    </>
  );
};

export default FourOhFour;
