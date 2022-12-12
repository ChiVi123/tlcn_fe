import { toast } from 'react-toastify';
// import Swal from 'sweetalert2';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLock,
    faLockOpen,
    // faUser,
    // faUserTie,
} from '@fortawesome/free-solid-svg-icons';
// import { useSelector } from 'react-redux';

import { ButtonCustomize } from '~/admin/components';
import * as services from '~/services/services';
// import { userSelector } from '~/redux';
import styles from './UserItem.module.scss';

const cx = classNames.bind(styles);

function UserItem({ user, page, fetchApi }) {
    const isActive = user.state === 'active';
    // const userId = useSelector(userSelector.getUserId);
    // const isSetRole = userId !== user.id;
    let isBlock = true;

    if (user.role === 'role_admin') {
        isBlock = false;
    }

    if (user.state === 'not_verify') {
        isBlock = false;
    }

    /*
    là admin thì không thể block (cả trường hợp dòng là chính user đang đăng nhập)
    user có trạng thái chưa kích hoạt
    */

    // const handleRole = ({ id, role }) => {
    //     Swal.fire({
    //         title: 'Chọn vai trò cho thành viên',
    //         input: 'radio',
    //         inputOptions: {
    //             role_admin: 'Quản trị viên',
    //             role_user: 'Người dùng',
    //         },
    //         inputValue: role,
    //         inputValidator: (value) => {
    //             if (!value) {
    //                 return 'Chưa chọn vai trò cho thành viên!';
    //             }
    //         },
    //         confirmButtonText: 'Xác nhận',
    //     }).then(async ({ isConfirmed, value }) => {
    //         if (isConfirmed) {
    //             const result = await services.adminSetRoleUserById({
    //                 id,
    //                 data: { role: value },
    //             });
    //             const expectMessage = 'Get user success';

    //             if (result?.message === expectMessage) {
    //                 toast.success('Vai trò người dùng đã được cập nhật');
    //             } else {
    //                 toast.error(
    //                     'Không thể chỉnh sửa vai trò của người dùng này',
    //                 );
    //             }

    //             fetchApi({ currentPage: page - 1 });
    //         }
    //     });
    // };

    const handleIsActivate = async ({ id, state }) => {
        switch (state) {
            case 'active':
                const resultBlock = await services.adminBlockUserById({ id });
                const expectMessageBlock = 'Delete user success';

                if (resultBlock?.message === expectMessageBlock) {
                    toast.success('Khóa người dùng thành công');
                } else {
                    toast.error('Không thể khóa người dùng này');
                }
                break;
            case 'block':
                const resultActive = await services.adminUnblockUserById({
                    id,
                });
                const expectMessageUnblock = 'Unblock user success';

                if (resultActive?.message === expectMessageUnblock) {
                    toast.success('Mở khóa người dùng thành công');
                } else {
                    toast.error('Không thể mở khóa người dùng này');
                }
                break;
            default:
                break;
        }

        fetchApi({ currentPage: page - 1 });
    };

    return (
        <tr>
            <td className={cx('td-id')} title={user.id}>
                {user.id}
            </td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.state}</td>
            <td>
                {/* {isSetRole && (
                    <ButtonCustomize
                        onClick={() =>
                            handleRole({
                                id: user.id,
                                role: user.role,
                            })
                        }
                    >
                        <FontAwesomeIcon
                            icon={
                                user.role === 'role_admin' ? faUserTie : faUser
                            }
                        />
                    </ButtonCustomize>
                )} */}

                {isBlock && (
                    <ButtonCustomize
                        isEdit={!isActive}
                        isDelete={isActive}
                        onClick={() =>
                            handleIsActivate({
                                id: user.id,
                                state: user.state,
                            })
                        }
                    >
                        <FontAwesomeIcon
                            icon={isActive ? faLock : faLockOpen}
                        />
                    </ButtonCustomize>
                )}
            </td>
        </tr>
    );
}

export default UserItem;
