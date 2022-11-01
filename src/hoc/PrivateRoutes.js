import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { pathNames } from '~/routes';
import { userSelector } from '~/redux';

function PrivateRoutes() {
    const user = useSelector(userSelector.getUser);

    return user.email ? <Outlet /> : <Navigate to={pathNames.login} />;
}

export default PrivateRoutes;
