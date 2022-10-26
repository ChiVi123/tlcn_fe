import { useLocation } from 'react-router-dom';

import { Button } from '~/components';
import BreadCrumb from '../components/breadcrumb/BreadCrumb';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

import { cx, context, pathName } from './constant';

function AddressLayout({ children }) {
    const location = useLocation();

    return (
        <>
            <Header />
            <BreadCrumb />
            <div className={cx('wrapper')}>
                <div className={cx('grid wide')}>
                    <div className={cx('section')}>
                        <div className={cx('row')}>
                            <div className={cx('col', 'l-12')}>
                                <h1 className={cx('title', 'title--line')}>
                                    {context.title}
                                </h1>
                            </div>
                            <div className={cx('col', 'l-12')}>
                                <Button
                                    to={
                                        location.pathname ===
                                        pathName.addressForm
                                            ? pathName.addresses
                                            : pathName.addressForm
                                    }
                                    className={cx('btn', 'btn--solid')}
                                >
                                    {location.pathname === pathName.addressForm
                                        ? context.backPageAddresses
                                        : context.addAddressBtn}
                                </Button>
                            </div>
                        </div>
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default AddressLayout;
