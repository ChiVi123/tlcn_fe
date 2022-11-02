import classNames from 'classnames/bind';

import styles from './AdminLayout.module.scss';
import Footer from '../components/footer/Footer';
import Sidebar from '../components/sidebar/Sidebar';

const cx = classNames.bind(styles);

function AdminLayout({ children }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <Sidebar />
                {children}
            </div>
            <Footer />
        </>
    );
}

export default AdminLayout;
