import { Home, PageNotFound, Product } from '~/pages';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '*', component: PageNotFound, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
