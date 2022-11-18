import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { adminRoutes, pathNames, privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import PrivateRoutes from './hoc/PrivateRoutes';
import AdminRoutes from './hoc/AdminRoutes';
import { getAllCategory } from './redux/async_thunk/categoriesAsync';
import { Modal } from './components';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllCategory());

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
