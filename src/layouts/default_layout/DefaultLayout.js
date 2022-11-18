import classNames from 'classnames/bind';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
// import BreadCrumb from '../components/breadcrumb/BreadCrumb';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <>
            <Header />
            {/* <BreadCrumb /> */}
            <div className={cx('wrapper')}> {children}</div>
            <Footer />
        </>
    );
}

export default DefaultLayout;
