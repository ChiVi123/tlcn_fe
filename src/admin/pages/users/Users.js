import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLock,
    faLockOpen,
    faUser,
    faUserTie,
} from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import { ButtonCustomize } from '~/admin/components';
import { ButtonPagination, Title } from '~/components';
import * as services from '~/services/services';

import { cx, context } from './constant';

function Users() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [rangeDisplay, setRangeDisplay] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchApi = async ({ currentPage }) => {
            const result = await services.getUsers({ currentPage });

            setUsers(result.list);
            setTotalPage(result.totalPage);
            setRangeDisplay((prev) => {
                if (result.totalPage > 5) {
                    return 5;
                } else {
                    return prev;
                }
            });
        };

        fetchApi({ currentPage: page });
    }, [page]);

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
        <>
            <Title as='h1'>{context.title}</Title>

            <table>
                <thead>
                    <tr>
                        <th>{context.idCol}</th>
                        <th>{context.userNameCol}</th>
                        <th>{context.emailCol}</th>
                        <th>{context.roleCol}</th>
                        <th>{context.isActivatelCol}</th>
                        <th>{context.actionsCol}</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((item, index) => (
                        <tr key={index}>
                            <td className={cx('td-id')} title={item.id}>
                                {item.id}
                            </td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>{item.state}</td>
                            <td>
                                <ButtonCustomize
                                    onClick={() =>
                                        handleRole({
                                            id: item.id,
                                            role: item.role,
                                        })
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={
                                            item.role === 'role_admin'
                                                ? faUserTie
                                                : faUser
                                        }
                                    />
                                </ButtonCustomize>

                                <ButtonCustomize
                                    isEdit={item.state !== 'active'}
                                    isDelete={item.state === 'active'}
                                    onClick={() =>
                                        handleIsActivate({
                                            id: item.id,
                                            state: item.state,
                                        })
                                    }
                                >
                                    <FontAwesomeIcon
                                        icon={
                                            item.state === 'active'
                                                ? faLock
                                                : faLockOpen
                                        }
                                    />
                                </ButtonCustomize>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {totalPage > 1 && (
                <ButtonPagination
                    nextLabel={'next >'}
                    previousLabel={'< previous'}
                    currentPage={page}
                    rangeDisplay={rangeDisplay}
                    totalPage={totalPage}
                    onClick={(value) => setPage(value)}
                />
            )}
        </>
    );
}

export default Users;
