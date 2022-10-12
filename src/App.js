import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from './routes';
import { DefaultLayout } from './layouts';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {publicRoutes.map((item, index) => {
                    const Layout = item.layout === null ? Fragment : DefaultLayout;

                    const Page = item.component;
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
