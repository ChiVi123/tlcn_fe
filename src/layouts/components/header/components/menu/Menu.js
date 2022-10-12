import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import MenuItem from './MenuItem';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ items, top, side }) {
    const classes = cx('menu', { top, side });
    return (
        <ul className={classes}>
            {items.map((item, index) => (
                <MenuItem key={index} item={item} side={side} />
            ))}
        </ul>
    );
}

Menu.propTypes = {
    items: PropTypes.array,
    top: PropTypes.bool,
    side: PropTypes.bool,
};

export default Menu;
