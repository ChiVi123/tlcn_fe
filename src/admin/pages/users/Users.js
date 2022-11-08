import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPen } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

import { ButtonCustomize } from '~/admin/components';
import { Title } from '~/components';
import { user } from '~/utils/constant';

import { context } from './constant';

function Users() {
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
                    <tr>
                        <td>1</td>
                        <td>
                            {user.lastName} {user.firstName}
                        </td>
                        <td>{user.email}</td>
                        <td>{user.role}</td>
                        <td>Activated</td>
                        <td>
                            <ButtonCustomize onClick={handleIsActivate}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </ButtonCustomize>

                            <ButtonCustomize isEdit={true} onClick={handleRole}>
                                <FontAwesomeIcon icon={faPen} />
                            </ButtonCustomize>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

export default Users;
