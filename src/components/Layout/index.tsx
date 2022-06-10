import Footer from "../Footer";
import NavBar from "../NavBar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <NavBar />
            <div className="container mx-auto flex flex-col min-h-screen">
                <main className="flex-1">{children}</main>
            </div>
            <Footer />
        </div>
    )
}

export default Layout;