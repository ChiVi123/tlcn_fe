import classNames from 'classnames/bind';
import { Button } from '~/components';
import styles from './ButtonCustomize.module.scss';

const cx = classNames.bind(styles);

function ButtonCustomize({ children, isEdit, isDelete, ...props }) {
    const classes = cx('btn', {
        'btn--edit': isEdit,
        'btn--delete': isDelete,
    });

    return (
        <Button solid={true} className={classes} {...props}>
            {children}
        </Button>
    );
}

export default ButtonCustomize;
