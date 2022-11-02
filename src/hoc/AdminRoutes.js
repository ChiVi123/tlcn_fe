import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { pathNames } from '~/routes';
import { userSelector } from '~/redux';

function AdminRoutes() {
    const user = useSelector(userSelector.getUser);

    return user.role === 'admin' ? (
        <Outlet />
    ) : (
        <Navigate to={pathNames.home} />
    );
}

export default AdminRoutes;
