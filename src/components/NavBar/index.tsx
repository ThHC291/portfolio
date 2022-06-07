// import Logo from "../Logo";
// import LanguageSwitch from "../LanguageSwitch";
// import Links from "../Links";
// import ThemeSwitch from "../ThemeSwitch";

// import { useTranslations } from "next-intl";
// import { useRouter } from "next/router";
// import Link from "next/link";
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LanguageSwitch from '../LanguageSwitch';
import Links from '../Links';
import Logo from '../Logo';
import ThemeSwitch from '../ThemeSwitch';

const NavLink = ({ to, children }: any) => {
	const { locale } = useRouter();

	return (
		<Link href={to} locale={locale}>
			<a className="mx-4 text-2xl font-bold">{children}</a>
		</Link>
	);
};

const MobileNav = ({ open, setOpen }: any) => {
	const t = useTranslations('NavBar');
	const { locale } = useRouter();

	return (
		<div
			className={`absolute top-0 left-0 h-screen w-screen bg-main-color transform ${
				open ? '-translate-x-0' : '-translate-x-full'
			} transition-transform duration-300 ease-in-out filter drop-shadow-md `}
		>
			<div className="flex items-center justify-center h-20 bg-main-color filter drop-shadow-md">
				<Logo />
			</div>

			<section className="flex flex-col ml-4 text-xl font-semibold">
				<Link href="/home" locale={locale}>
					<a
						className="my-4"
						onClick={() =>
							setTimeout(() => {
								setOpen(!open);
							}, 100)
						}
					>
						{t('home')}
					</a>
				</Link>
				<Link href="/about" locale={locale}>
					<a
						className="my-4"
						onClick={() =>
							setTimeout(() => {
								setOpen(!open);
							}, 100)
						}
					>
						{t('about')}
					</a>
				</Link>
				<Link href="/projects" locale={locale}>
					<a
						className="my-4"
						onClick={() =>
							setTimeout(() => {
								setOpen(!open);
							}, 100)
						}
					>
						{t('projects')}
					</a>
				</Link>
				<Link href="/blog" locale={locale}>
					<a
						className="my-4"
						onClick={() =>
							setTimeout(() => {
								setOpen(!open);
							}, 100)
						}
					>
						{t('blog')}
					</a>
				</Link>
			</section>
		</div>
	);
};

const NavBar: React.FC = () => {
	const [open, setOpen] = useState(false);

	const t = useTranslations('NavBar');

	return (
		<nav className="flex justify-between h-20 px-4 py-4 filter drop-shadow-md">
			<MobileNav open={open} setOpen={setOpen} />

			<section className="flex justify-start w-3/12">
				<Logo />
			</section>

			<section className="flex justify-center w-6/12">
				<section
					className="relative z-50 flex flex-col items-center justify-between w-8 h-8 md:hidden"
					onClick={() => {
						setOpen(!open);
					}}
				>
					<span
						className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${
							open ? 'rotate-45 translate-y-3.5' : ''
						}`}
					/>
					<span
						className={`h-1 w-full bg-primary rounded-lg transition-all duration-300 ease-in-out ${
							open ? 'w-0' : 'w-full'
						}`}
					/>
					<span
						className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${
							open ? '-rotate-45 -translate-y-3.5' : ''
						}`}
					/>
				</section>

				<section className="hidden md:flex">
					<NavLink to="/home">{t('home')}</NavLink>

					<NavLink to="/about">{t('about')}</NavLink>

					<NavLink to="/projects">{t('projects')}</NavLink>

					<NavLink to="/blog">{t('blog')}</NavLink>
				</section>
			</section>

			<section className="flex justify-end w-3/12">
				<section className="hidden md:flex">
					<LanguageSwitch />
					<ThemeSwitch />
					<Links />
				</section>
			</section>
		</nav>
	);
};

export default NavBar;
