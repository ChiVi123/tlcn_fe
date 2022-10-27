import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ children, line, center, right, as }) {
    const classNames = cx('title', {
        line,
        center,
        right,
        [as]: as,
    });

    const Component = as;

    return <Component className={classNames}>{children}</Component>;
}

Title.propTypes = {
    children: PropTypes.node.isRequired,
    line: PropTypes.bool,
    center: PropTypes.bool,
    right: PropTypes.bool,
    as: PropTypes.string,
};

export default Title;
