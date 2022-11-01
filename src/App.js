import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { privateRoutes, publicRoutes } from './routes';
import { DefaultLayout } from './layouts';
import PrivateRoutes from './hoc/PrivateRoutes';

function App() {
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
