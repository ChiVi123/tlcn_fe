import { NotBreadCrumb } from '~/layouts';
import { Home, PageNotFound, ProductDetail, Login, Register } from '~/pages';

const publicRoutes = [
    { path: '/', component: Home, layout: NotBreadCrumb },
    { path: '/product', component: ProductDetail },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '*', component: PageNotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
