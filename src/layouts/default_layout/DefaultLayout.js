import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import BreadCrumb from '../components/breadcrumb/BreadCrumb';

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            <BreadCrumb />
            {children}
            <Footer />
        </>
    );
}

export default DefaultLayout;
