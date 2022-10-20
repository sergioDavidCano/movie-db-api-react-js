import React from 'react';

import { Routes, Route } from "react-router-dom";
import { Home } from '../pages/Home';

// import Home from '../pages/Home';
// import Catalog from '../pages/Catalog';
import { Detail } from '../pages/detail/Detail';

export const RoutesApp = () => {
    return (
        <Routes>
            {/* <Route
                path='/:category/search/:keyword'
                component={Catalog}
            />
            <Route
            path='/:category'
            component={Catalog}
        /> */}
            <Route
                path='/:category/:id'
                element={<Detail/>}
            />
            <Route
                path='/home'
                exact
                element={<Home />}
            />
        </Routes>
    );
}
