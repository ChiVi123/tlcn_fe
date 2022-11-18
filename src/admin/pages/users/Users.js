import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useEffect, useState } from 'react';

import { ButtonCustomize } from '~/admin/components';
import { Title } from '~/components';
import * as services from '~/services/services';

import { context } from './constant';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchApi = async () => {
            const result = await services.getUsers();

            setUsers(result);
        };

        fetchApi();
    }, []);
    const handleRole = () => {
        Swal.fire({
            title: 'Select role member',
            input: 'radio',
            inputOptions: {
                admin: 'Admin',
                client: 'Khach hang',
            },
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose something!';
                }
            },
        }).then((result) => console.log(result));
    };

    const handleIsActivate = () => {
        Swal.fire({
            title: 'Select user active',
            input: 'radio',
            inputOptions: {
                activated: 'Activated',
                disActivated: 'Disactivated',
            },
            inputValidator: (value) => {
                if (!value) {
                    return 'You need to choose something!';
                }
            },
        }).then((result) => console.log(result));
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
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>{item.state}</td>
                            <td>
                                <ButtonCustomize onClick={handleIsActivate}>
                                    <FontAwesomeIcon icon={faCircleCheck} />
                                </ButtonCustomize>

                                <ButtonCustomize
                                    isEdit={true}
                                    onClick={handleRole}
                                >
                                    <FontAwesomeIcon icon={faPen} />
                                </ButtonCustomize>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Users;
