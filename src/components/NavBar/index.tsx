import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import LanguageSwitch from '../LanguageSwitch';
import Links from '../Links';
import Logo from '../Logo';
import ThemeSwitch from '../ThemeSwitch';

interface NavLinkParams { 
	to: string;
	children: React.ReactNode;
}

interface MobileNavProps { 
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavLink: React.FC<NavLinkParams> = ({ to, children }) => {
	const { locale, pathname } = useRouter();

	return (
		<Link href={to} locale={locale}>
			<a className={`mx-5 text-2xl font-bold hover:text-primary ${pathname === to ? 'text-primary' : ''}`}>
				{children}
			</a>
		</Link>
	);
};

const MobileNav: React.FC<MobileNavProps> = ({ open, setOpen }) => {
	const t = useTranslations('NavBar');
	const { locale, pathname } = useRouter();

	return (
		<section className={`absolute top-0 left-0 h-screen min-w-full bg-main-color transform ${open ? '-translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
			<section className="flex items-center justify-center h-20 bg-main-color filter drop-shadow-md">
				<Logo />
			</section>

			<section className="flex m-4 justify-between">
				<LanguageSwitch />
				<ThemeSwitch />
				<Links />
			</section>

			<section className="flex flex-col ml-4 text-xl font-bold">

				<Link href="/home" locale={locale}>
					<a
						className={`my-4 ${pathname === '/home' ? 'text-primary' : ''}`}
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
						className={`my-4 ${pathname === '/about' ? 'text-primary' : ''}`}
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
						className={`my-4 ${pathname === '/projects' ? 'text-primary' : ''}`}
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
						className={`my-4 ${pathname === '/blog' ? 'text-primary' : ''}`}
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
		</section>
	);
};

const NavBar: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);

	const t = useTranslations('NavBar');

	return (
		<nav className="flex justify-between h-20 px-4 py-4 filter drop-shadow-md">
			<MobileNav open={open} setOpen={setOpen} />

			<section className="flex justify-start w-3/12">
				<Logo />
			</section>

			<section className="flex items-center justify-end">
				<section
					className="relative z-50 flex flex-col items-center justify-between w-8 h-8 md:hidden"
					onClick={() => {
						setOpen(!open);
					}}
				>
					<span
						className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3.5' : ''
							}`}
					/>
					<span
						className={`h-1 w-full bg-primary rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'
							}`}
					/>
					<span
						className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3.5' : ''
							}`}
					/>
				</section>

			</section>

			<section className="hidden md:flex justify-center items-center w-6/12">
				<NavLink to="/home">{t('home')}</NavLink>

				<NavLink to="/about">{t('about')}</NavLink>

				<NavLink to="/projects">{t('projects')}</NavLink>

				<NavLink to="/blog">{t('blog')}</NavLink>
			</section>

			<section className="hidden flex-wrap md:flex justify-end w-3/12">
				<LanguageSwitch />
				<ThemeSwitch />
				<Links />
			</section>
		</nav>
	);
};

export default NavBar;
