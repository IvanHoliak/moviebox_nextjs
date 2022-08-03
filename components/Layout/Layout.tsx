import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface ILayout {
    children: React.ReactNode;
    home: boolean;
}

const Layout: FC<ILayout> = ({children, home}) => {
    return (
        <>
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
