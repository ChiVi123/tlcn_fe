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
    Orders,
    Checkout,
} from '~/pages';

const pathNames = {
    home: '/',
    product: '/product',
    login: '/login',
    register: '/register',
    search: '/search',
    checkout: '/checkout',
    forgotPassword: '/forgot-password',
    any: '/*',

    // private
    cart: '/cart',
    addresses: '/addresses',
    addressForm: '/address-form',
    orders: '/orders',
};

const publicRoutes = [
    { path: pathNames.home, component: Home, layout: NotBreadCrumb },
    { path: pathNames.product, component: ProductDetail },
    { path: pathNames.login, component: Login },
    { path: pathNames.register, component: Register },
    { path: pathNames.any, component: PageNotFound, layout: null },

    // private
    { path: pathNames.cart, component: Cart },
    { path: pathNames.addresses, component: Addresses, layout: AddressLayout },
    {
        path: pathNames.addressForm,
        component: AddressForm,
        layout: AddressLayout,
    },
    { path: pathNames.orders, component: Orders },
    { path: pathNames.checkout, component: Checkout, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes, pathNames };
