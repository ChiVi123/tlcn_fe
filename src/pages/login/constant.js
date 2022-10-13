import classNames from 'classnames/bind';
import styles from './Login.module.scss';

const cx = classNames.bind(styles);
const context = {
    title: 'Đăng nhập tài khoản',
    login: 'Đăng nhập',
    forgotPass: 'Quên mật khẩu',
    fieldPassword: 'Mật khẩu',
    messageSignIn: 'Bạn không có tài khoản. Đăng ký',
    createAcc: 'Tại đây',
};

export { cx, context };
