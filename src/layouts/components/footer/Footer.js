import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <footer className={cx('footer')}>
            <span className={cx('footer__context')}>
                Copyright © 2022 TLCN CLC Tiếng Việt
            </span>
        </footer>
    );
}

export default Footer;
