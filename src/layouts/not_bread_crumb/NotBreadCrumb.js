import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function NotBreadCrumb({ children }) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}

export default NotBreadCrumb;
