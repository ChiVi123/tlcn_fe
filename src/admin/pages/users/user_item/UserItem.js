import { toast } from 'react-toastify';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

import { ButtonCustomize } from '~/admin/components';
import { userServices } from '~/services';
import styles from './UserItem.module.scss';

const cx = classNames.bind(styles);

function UserItem({ user, page, fetchApi }) {
    const isActive = user.state === 'active';
    let isBlock = true;

    if (user.role === 'role_admin') {
        isBlock = false;
    }

    if (user.state === 'not_verify') {
        isBlock = false;
    }

    const handleIsActivate = async ({ id, state }) => {
        switch (state) {
            case 'active':
                const resultBlock = await userServices.adminBlockUserById({
                    id,
                });
                const expectMessageBlock = 'Delete user success';

                if (resultBlock?.message === expectMessageBlock) {
                    toast.success('Khóa người dùng thành công');
                } else {
                    toast.error('Không thể khóa người dùng này');
                }
                break;
            case 'block':
                const resultActive = await userServices.adminUnblockUserById({
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
