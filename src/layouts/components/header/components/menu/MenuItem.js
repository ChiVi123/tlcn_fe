import PropTypes from 'prop-types';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import Menu from './Menu';
import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ item, side }) {
    const classes = cx('menu-item', { side });
    const [menu, setMenu] = useState(false);

    const handleMouseEnter = () => setMenu(true);
    const handleMouseLeave = () => setMenu(false);

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <NavLink to={`/search?category=${item.id}`} className={classes}>
                <div className={cx('menu-item__left')}>
                    {item['categoryimage'] && (
                        <img
                            className={cx('menu-item__img')}
                            src={item['categoryimage']}
                            alt={item.name}
                        />
                    )}
                    <span className={cx('menu-item__context')}>
                        {item.name}
                    </span>
                </div>
                {item?.subMenu && (
                    <FontAwesomeIcon
                        className={cx('menu-item__right')}
                        icon={faCaretRight}
                    />
                )}
            </NavLink>
            {item?.subMenu && menu && <Menu items={item?.subMenu} side />}
        </li>
    );
}

MenuItem.propTypes = {
    side: PropTypes.bool,
};

export default MenuItem;
