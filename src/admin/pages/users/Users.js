import { useEffect, useState, useCallback } from 'react';

import { ButtonPagination, Title } from '~/components';
import { userServices } from '~/services';
import { context } from './constant';
import UserItem from './user_item/UserItem';

function Users() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(0);
    const [rangeDisplay, setRangeDisplay] = useState(3);
    const fetchApi = useCallback(async ({ currentPage }) => {
        const result = await userServices.getUsers({ page: currentPage });

        setUsers(result.list);
        setTotalPage(result.totalPage);
        setRangeDisplay(() => {
            if (result.totalPage > 5) {
                return 5;
            } else {
                return result.totalPage;
            }
        });
    }, []);

    useEffect(() => {
        fetchApi({ currentPage: page - 1 });
    }, [fetchApi, page]);

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
                        <UserItem
                            key={index}
                            user={item}
                            page={page}
                            fetchApi={fetchApi}
                        />
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
