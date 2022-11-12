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
    Search,
} from '~/pages';
import {
    AdminOrder,
    AdminOrders,
    Categories,
    CategoryForm,
    Dashboard,
    ProductForm,
    Products,
    Users,
} from '~/admin/pages';

const pathNames = {
    home: '/',
    product: '/product/:id',
    login: '/login',
    register: '/register',
    search: '/search/:id',
    forgotPassword: '/forgot-password',
    sales: '/sales',
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
    productFormAdd: 'product-form',
    productFormEdit: 'product-form/:id',
    categories: 'categories',
    categoryFormAdd: 'category-form',
    categoryFormEdit: 'category-form/:id',
    users: 'users',
    adminOrders: 'orders',
    orderDetail: 'order/:id',
};

const publicRoutes = [
    { path: pathNames.home, component: Home, layout: NotBreadCrumb },
    { path: pathNames.product, component: ProductDetail },
    { path: pathNames.login, component: Login },
    { path: pathNames.register, component: Register },
    { path: pathNames.any, component: PageNotFound, layout: null },
];

// private
const privateRoutes = [
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
    { path: pathNames.search, component: Search },
];

// admin
const adminRoutes = [
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
    {
        path: pathNames.productFormAdd,
        component: ProductForm,
        layout: AdminLayout,
    },
    {
        path: pathNames.productFormEdit,
        component: ProductForm,
        layout: AdminLayout,
    },
    {
        path: pathNames.categories,
        component: Categories,
        layout: AdminLayout,
    },
    {
        path: pathNames.categoryFormAdd,
        component: CategoryForm,
        layout: AdminLayout,
    },
    {
        path: pathNames.categoryFormEdit,
        component: CategoryForm,
        layout: AdminLayout,
    },
    {
        path: pathNames.adminOrders,
        component: AdminOrders,
        layout: AdminLayout,
    },
    {
        path: pathNames.orderDetail,
        component: AdminOrder,
        layout: AdminLayout,
    },
    {
        path: pathNames.users,
        component: Users,
        layout: AdminLayout,
    },
];

export { publicRoutes, privateRoutes, adminRoutes, pathNames };
