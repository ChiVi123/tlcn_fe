import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { adminRoutes, pathNames, privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import PrivateRoutes from './hoc/PrivateRoutes';
import AdminRoutes from './hoc/AdminRoutes';
import { categoriesAsync, cartAsync } from './redux';
import { Modal } from './components';
import logger from './utils/logger';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(categoriesAsync.getAllCategory());
        dispatch(cartAsync.getCartByToken());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    logger({ groupName: 'App', values: ['re-render'] });

    return (
        <BrowserRouter>
            <Routes>
                {/* Public */}
                {publicRoutes.map((item, index) => {
                    const Page = item.component;
                    let Layout = DefaultLayout;

                    if (item.layout) {
                        Layout = item.layout;
                    } else if (item.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={item.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}

                {/* Private */}
                <Route element={<PrivateRoutes />}>
                    {privateRoutes.map((item, index) => {
                        const Page = item.component;
                        let Layout = DefaultLayout;

                        if (item.layout) {
                            Layout = item.layout;
                        } else if (item.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Route>

                {/* Admin */}
                <Route path={pathNames.admin} element={<AdminRoutes />}>
                    {adminRoutes.map((item, index) => {
                        const Page = item.component;
                        let Layout = DefaultLayout;

                        if (item.layout) {
                            Layout = item.layout;
                        } else if (item.layout === null) {
                            Layout = Fragment;
                        }

                        return (
                            <Route
                                key={index}
                                path={item.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Route>
            </Routes>
            <Modal />
        </BrowserRouter>
    );
}

export default App;
