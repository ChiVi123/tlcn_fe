import classNames from 'classnames/bind';
import styles from './Users.module.scss';

export const cx = classNames.bind(styles);
export const context = {
    title: 'Danh sách người dùng',
    idCol: 'ID',
    userNameCol: 'Tên người dùng',
    emailCol: 'Email',
    roleCol: 'Vai trò',
    isActivatelCol: 'Trạng thái kích hoạt',
    actionsCol: 'Hoạt động',
};
