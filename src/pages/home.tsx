import { NextPage } from 'next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const Home: NextPage = () => {
	const t = useTranslations('Home');

	return (
		<>
			<section className="container flex flex-col items-center p-4 md:flex-row gap-x-12 xl:mb-12">
				<section className="flex flex-col justify-center items-start text-center m-10 md:text-left">
					<section className="w-full font-semibold text-xl lg:text-4xl xl:text-4xl">
						{t('helloMessage')}
					</section>
					<section className="w-full my-3 text-4xl font-bold text-primary lg:text-8xl xl:text-8xl">
						Thiago Chinen
					</section>
					<section className="w-full text-xl font-semibold lg:text-4xl xl:text-4xl">
						{t('desecription')}
						<br />
						{t('slogan')}
					</section>
				</section>

				<section className="flex items-center bg-main-color justify-center rounded-xl py-6">
					<Image
						src="/photo.jfif"
						layout="intrinsic"
						width={400}
						height={300}
					/>
				</section>
			</section>
		</>
	);
};

export default Home;
