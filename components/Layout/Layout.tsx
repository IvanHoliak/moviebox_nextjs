import Head from "next/head";
import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface ILayout {
    children: React.ReactNode;
    home: boolean;
    title: string;
}

const Layout: FC<ILayout> = ({children, home, title}) => {
    return (
        <>
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="apple-mobile-web-app-title" content="Movie Box" />
                <meta name="application-name" content="Movie Box" />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="msapplication-config" content="/browserconfig.xml" />
                <meta name="theme-color" content="#ffffff" />
                <title>{title}</title>
            </Head>
            <header>
                <Navbar home={home}/>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
            <div id="modal-root"></div>
        </>
    );
};

export default Layout;
