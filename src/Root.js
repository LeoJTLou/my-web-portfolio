import React from 'react';
import { Outlet, useLocation, ScrollRestoration } from 'react-router-dom';
import HeaderMenu from './components/HeaderMenu';
import Footer from './components/Footer';

// Root Layout for all pages
export default function Root () {
    const location = useLocation();
    return (
        <React.Fragment>
            <ScrollRestoration/>
            <HeaderMenu/>
            <main>
                <Outlet key={location.pathname}/>
            </main>
            <Footer/>
        </React.Fragment>
    )
}