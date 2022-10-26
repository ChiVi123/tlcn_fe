import { NotBreadCrumb, AddressLayout } from '~/layouts';

import {
    Home,
    PageNotFound,
    ProductDetail,
    Login,
    Register,
    Cart,
    Addresses,
    AddressForm,
} from '~/pages';

const publicRoutes = [
    { path: '/', component: Home, layout: NotBreadCrumb },
    { path: '/product', component: ProductDetail },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '*', component: PageNotFound, layout: null },
    { path: '/cart', component: Cart },
    { path: '/addresses', component: Addresses, layout: AddressLayout },
    { path: '/address-form', component: AddressForm, layout: AddressLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
