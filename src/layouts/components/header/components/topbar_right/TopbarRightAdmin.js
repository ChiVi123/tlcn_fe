import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faInfo,
    // faAddressBook,
    faArrowRightFromBracket,
    faTable,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';

import { Button } from '~/components';
import { cartActions, userActions } from '~/redux';

function TopbarRightAdmin({ topbarSection, topbarItem, btn }) {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(userActions.resetUser());
        dispatch(cartActions.resetCart());
    };

    return (
        <ul className={topbarSection}>
            <li className={topbarItem}>
                <Button className={btn} reset={true} to={'/profile'}>
                    <FontAwesomeIcon icon={faInfo} />
                    <span>Thông tin tài khoản</span>
                </Button>
            </li>
            <li className={topbarItem}>
                <Button className={btn} reset={true} to={'/admin/products'}>
                    <FontAwesomeIcon icon={faTable} />
                    <span>Trang quản trị</span>
                </Button>
            </li>
            {/* <li className={topbarItem}>
                <Button className={btn} reset={true} to={'/addresses'}>
                    <FontAwesomeIcon icon={faAddressBook} />
                    <span>Sổ địa chỉ</span>
                </Button>
            </li> */}
            <li className={topbarItem}>
                <Button className={btn} reset={true} onClick={handleLogout}>
                    <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    <span>Đăng xuất</span>
                </Button>
            </li>
        </ul>
    );
}

export default TopbarRightAdmin;
