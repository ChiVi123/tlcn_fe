import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import classNames from 'classnames/bind';
import {
    faLock,
    faLockOpen,
    faUser,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons';

import { ButtonCustomize } from '~/admin/components';
import * as services from '~/services/services';
import styles from './UserItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function UserItem({ user }) {
    const navigate = useNavigate();
    const isActive = user.state === 'active';

    const handleRole = ({ id, role }) => {
        Swal.fire({
            title: 'Chọn vai trò cho thành viên',
            input: 'radio',
            inputOptions: {
                role_admin: 'Quản trị viên',
                role_user: 'Người dùng',
            },
            inputValue: role,
            inputValidator: (value) => {
                if (!value) {
                    return 'Chưa chọn vai trò cho thành viên!';
                }
            },
        }).then(async ({ isConfirmed, value }) => {
            if (isConfirmed) {
                const result = await services.adminSetRoleUserById({
                    id,
                    data: { role: value },
                });
                const expectMessage = 'Get user success';

                if (result?.message === expectMessage) {
                    navigate(0);
                } else {
                    toast.error('Không thể chỉnh vai trò cho người dùng này');
                }
            }
        });
    };

    const handleIsActivate = async ({ id, state }) => {
        switch (state) {
            case 'active':
                const resultBlock = await services.adminBlockUserById({ id });
                const expectMessageBlock = 'Delete user success';

                if (resultBlock?.message === expectMessageBlock) {
                    navigate(0);
                } else {
                    toast.error('Không thể khóa cho người dùng này');
                }
                break;
            case 'block':
                const resultActive = await services.adminUnblockUserById({
                    id,
                });
                const expectMessageUnblock = 'Unblock user success';

                if (resultActive?.message === expectMessageUnblock) {
                    navigate(0);
                } else {
                    toast.error('Không thể mở khóa cho người dùng này');
                }
                break;
            default:
                break;
        }
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
                <ButtonCustomize
                    onClick={() =>
                        handleRole({
                            id: user.id,
                            role: user.role,
                        })
                    }
                >
                    <FontAwesomeIcon
                        icon={user.role === 'role_admin' ? faUserTie : faUser}
                    />
                </ButtonCustomize>

                {user.state === 'not_verify' || (
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
