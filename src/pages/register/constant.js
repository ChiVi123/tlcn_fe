import classNames from 'classnames/bind';
import * as yup from 'yup';

import styles from './Register.module.scss';

const cx = classNames.bind(styles);
const context = {
    title: 'Đăng ký tài khoản',
    register: 'Đăng ký',
    login: 'Đăng nhập',
    firstName: 'Tên',
    lastName: 'Họ',
    email: 'Email',
    fieldPassword: 'Mật khẩu',
    retypePassword: 'Nhập lại mật khẩu',
    messageSignIn: 'Bạn không có tài khoản. Đăng ký',
    createAcc: 'Tại đây',
};

const placeholder = {
    firstName: 'Nhập tên của bạn',
    lastName: 'Nhập họ của bạn',
    email: 'Nhập email của bạn',
    fieldPassword: 'Nhập mật khẩu của bạn',
    retypePassword: 'Nhập lại mật khẩu',
    messageSignIn: 'Bạn không có tài khoản. Đăng ký',
    createAcc: 'Tại đây',
};

const schema = yup.object({
    lastName: yup.string().trim().required(),
    firstName: yup.string().trim().required(),
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    passwordComfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Password must match'),
});

export { cx, context, placeholder, schema };
