import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

const cx = classNames.bind();

function Button({ children, onClick, to, href, className, ...passProps }) {
    let Component = 'button';
    const props = { onClick, ...passProps };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    const classes = cx({
        [className]: className,
    });

    return (
        <Component className={classes} {...props}>
            {children}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func,
    to: PropTypes.string,
    href: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
