import React from 'react';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import Footer from './components/Footer';

// Root Layout for all pages
export default function Root () {
    const location = useLocation();
    const hideLayout = location.pathname.includes('valentines-letter-lucinda');
    return (
        <React.Fragment>
            <ScrollRestoration/>
            {!hideLayout && <HeaderMenu />}
            <main>
                <Outlet key={location.pathname}/>
            </main>
            {!hideLayout && <Footer />}
        </React.Fragment>
    )
}