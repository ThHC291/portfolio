import Footer from '../Footer';
import NavBar from '../NavBar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<section className="flex flex-col justify-between min-h-screen">
				<NavBar />
				<section className="mx-auto">{children}</section>
				<Footer />
			</section>
		</>
	);
};

export default Layout;
