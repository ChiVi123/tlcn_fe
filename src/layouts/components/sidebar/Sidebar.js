import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';

import { imgLogo } from '~/assets/images/logo';
import { Title } from '~/components';
import { userSelector } from '~/redux';
import { pathNames } from '~/routes';

import { cx, sidebarItems } from './constant';

function Sidebar() {
    const user = useSelector(userSelector.getUser);

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
                            <FontAwesomeIcon
                                icon={item.icon}
                                className={cx('font-icon')}
                            />
                            <span className={cx('context')}>
                                {item.context}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Sidebar;
