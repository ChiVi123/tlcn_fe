import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { imgLogo } from '~/assets/images/logo';
import { Title } from '~/components';
import { userActions, userSelector } from '~/redux';
import { pathNames } from '~/routes';

import { cx, sidebarItems } from './constant';

function Sidebar() {
    const user = useSelector(userSelector.getUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(userActions.resetUser());
        navigate('/admin/login');
    };

    return (
        <div className={cx('wrapper')}>
            <Link to={pathNames.home} className={cx('logo')}>
                <img src={imgLogo} alt='logo' className={cx('logo-img')} />
            </Link>

            <Title as={'h2'}>
                {'Xin chào '}
                {user.name}
            </Title>

            <ul className={cx('sidebar')}>
                {sidebarItems.map((item, index) => (
                    <li key={index} className={cx('item')}>
                        <NavLink
                            to={item.navTo}
                            className={({ isActive }) =>
                                cx('link', { active: isActive })
                            }
                        >
                            <div className={cx('mt-2')}>
                                <FontAwesomeIcon
                                    icon={item.icon}
                                    className={cx('font-icon')}
                                />
                            </div>
                            <span className={cx('context')}>
                                {item.context}
                            </span>
                        </NavLink>
                    </li>
                ))}
                <li key={sidebarItems.length} className={cx('item')}>
                    <button className={cx('link')} onClick={handleLogout}>
                        <FontAwesomeIcon
                            icon={faArrowRightFromBracket}
                            className={cx('font-icon')}
                        />
                        <span className={cx('context')}>Đăng xuất</span>
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
