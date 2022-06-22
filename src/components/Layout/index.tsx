import Footer from '../Footer';
import NavBar from '../NavBar';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<div className="flex flex-col justify-between h-screen">
				<NavBar />
				<section className="mx-auto">{children}</section>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
