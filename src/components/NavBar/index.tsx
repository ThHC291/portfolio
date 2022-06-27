import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useState } from 'react';
import LanguageSwitch from '../LanguageSwitch';
import Links from '../Links';
import Logo from '../Logo';
import ThemeSwitch from '../ThemeSwitch';

interface NavLinkParams {
	to: string;
	children: React.ReactNode;
}

const routes = ['home', 'about', 'projects', 'blog']

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

const MobileNav: React.FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const { locale, pathname } = useRouter();
	const t = useTranslations('NavBar');

	const onToggleNav = () => {
		setOpen((status) => {
			document.body.style.overflow = status ? 'auto' : 'hidden';
			return !status
		})
	}

	return (
		<nav>
			<section className="flex items-center">
				<section className="flex w-1/2">
					<Logo />
				</section>

				<section className="flex m-5 justify-end w-1/2">
					<section
						className="relative z-20 flex flex-col items-center justify-between w-8 h-8 md:hidden"
						onClick={onToggleNav}
					>
						<span className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-3.5' : ''}`} />
						<span className={`h-1 w-full bg-primary rounded-lg transition-all duration-300 ease-in-out ${open ? 'w-0' : 'w-full'}`} />
						<span className={`h-1 w-full bg-primary rounded-lg transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-3.5' : ''}`} />
					</section>

				</section>
			</section>
			{/* {`fixed w-full h-full top-24 right-0 bg-gray-200 dark:bg-gray-800 opacity-95 z-10 transform ease-in-out duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`} */}
			<section className={`fixed w-full h-full top-0 right-0 left-0 bg-main-color z-10 transform ease-in-out duration-300 ${open ? 'translate-x-0' : 'translate-x-full'} `}>
				<section className="flex items-center justify-center h-20 bg-main-color filter drop-shadow-md">
					<Logo />
				</section>

				<section className="flex m-4 justify-between">
					<LanguageSwitch />
					<ThemeSwitch />
					<Links />
				</section>

				<section className="flex flex-col ml-4 text-xl font-bold">
					{routes.map((route, key) => {
						return <Link key={key} href={`/${route}`} locale={locale}>
							<a
								className={`my-4 ${pathname === `/${route}` ? 'text-primary' : ''}`}
								onClick={onToggleNav}
							>
								{t(route)}
							</a>
						</Link>
					})}
				</section>
			</section>
		</nav>
	);
};

const NavigationBar: React.FC = () => {
	const t = useTranslations('NavBar');

	return (
		<nav className="flex justify-between h-20 px-4 py-4 filter drop-shadow-md">

			<section className="flex justify-start w-3/12">
				<Logo />
			</section>

			<section className="hidden md:flex justify-center items-center w-6/12">
				{routes.map((route, key) => <NavLink key={key} to={`/${route}`}>{t(route)}</NavLink>)}
			</section>

			<section className="hidden flex-wrap md:flex justify-end w-3/12">
				<LanguageSwitch />
				<ThemeSwitch />
				<Links />
			</section>
		</nav>
	)
}

const NavBar: React.FC = () => {
	const [windowDimension, setWindowDimension] = useState<number>(0);

	useEffect(() => {
		setWindowDimension(window.innerWidth);
	}, []);

	useEffect(() => {
		function handleResize() {
			setWindowDimension(window.innerWidth);
		}

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const isMobile = windowDimension <= 640;

	return (
		isMobile ? <MobileNav /> : <NavigationBar />
	);
};

export default NavBar;
