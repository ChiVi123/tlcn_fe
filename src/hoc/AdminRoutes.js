import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { pathNames } from '~/routes';
import { userSelector } from '~/redux';

function AdminRoutes() {
    const user = useSelector(userSelector.getUser);

    return user.role === 'role_admin' ? (
        <Outlet />
    ) : (
        <Navigate to={pathNames.loginAdmin} />
    );
}

export default AdminRoutes;
