import { NotBreadCrumb, AddressLayout, AdminLayout } from '~/layouts';
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
    Profile,
} from '~/pages';
import { Dashboard, Products } from '~/admin/pages';

const pathNames = {
    home: '/',
    product: '/product',
    login: '/login',
    register: '/register',
    search: '/search',
    forgotPassword: '/forgot-password',
    sales: '/sales',
    logout: '/logout',
    any: '/*',

    // private
    cart: '/cart',
    addresses: '/addresses',
    addressForm: '/address-form',
    orders: '/orders',
    checkout: '/checkout',
    profile: '/profile',

    //admin
    admin: 'admin/*',
    dasboard: 'dashboard',
    products: 'products',
    productForm: 'product-form',
    categories: 'categories',
    categoryForm: 'category-form',
    users: 'users',
    userForm: 'user-form',
    adminOrders: 'orders',
    orderForm: 'order-form',
    adminSales: 'sales',
    saleForm: 'sale-form',
};

const publicRoutes = [
    { path: pathNames.home, component: Home, layout: NotBreadCrumb },
    { path: pathNames.product, component: ProductDetail },
    { path: pathNames.login, component: Login },
    { path: pathNames.register, component: Register },
    { path: pathNames.any, component: PageNotFound, layout: null },
];

const privateRoutes = [
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
    { path: pathNames.profile, component: Profile },
];

const adminRoutes = [
    // admin
    {
        path: pathNames.admin,
        component: PageNotFound,
        layout: null,
    },
    {
        path: pathNames.dasboard,
        component: Dashboard,
        layout: AdminLayout,
    },
    {
        path: pathNames.products,
        component: Products,
        layout: AdminLayout,
    },
];

export { publicRoutes, privateRoutes, adminRoutes, pathNames };
