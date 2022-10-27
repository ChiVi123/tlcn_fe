import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ children, line, center, right, as }) {
    const classNames = cx('title', {
        line,
        center,
        right,
        as,
    });

    return <h1 className={classNames}>{children}</h1>;
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    line: PropTypes.bool,
    center: PropTypes.bool,
    right: PropTypes.bool,
    as: PropTypes.string,
};

export default Title;
