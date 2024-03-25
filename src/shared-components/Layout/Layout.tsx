import {Outlet} from "react-router-dom";
import React from "react";
import {Header} from "./Header/Header";
import './styles.css';
import {Footer} from "./Footer/Footer";

export const Layout = () => {
    return (
        <div className={"layout-wrapper"}>
            <Header />

            <main className="main-content">
                <Outlet/>
            </main>


            <Footer />
        </div>

    );
}