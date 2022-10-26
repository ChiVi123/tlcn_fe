import classNames from 'classnames/bind';
import styles from './Register.module.scss';

const cx = classNames.bind(styles);
const context = {
    title: 'Đăng ký tài khoản',
    register: 'Đăng ký',
    login: 'Đăng nhập',
    firstName: 'Tên',
    lastName: 'Họ',
    retypePassword: 'Nhập lại mật khẩu',
    fieldPassword: 'Mật khẩu',
    messageSignIn: 'Bạn không có tài khoản. Đăng ký',
    createAcc: 'Tại đây',
};

const placeHolder = {
    firstName: 'Nhập tên',
    lastName: 'Nhập họ',
    retypePassword: 'Nhập lại mật khẩu',
    fieldPassword: 'Nhập mật khẩu',
    messageSignIn: 'Bạn không có tài khoản. Đăng ký',
    createAcc: 'Tại đây',
};

export { cx, context, placeHolder };
