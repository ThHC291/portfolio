import Footer from "../Footer";
import NavBar from "../NavBar";

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <div className="h-screen">
                <NavBar />
                <main className="container mx-auto">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Layout;