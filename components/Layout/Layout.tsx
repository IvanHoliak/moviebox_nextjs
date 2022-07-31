import React, { FC } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import SliderHeader from "../SliderHeader/SliderHeader";

interface ILayout {
    children: React.ReactNode;
}

const Layout: FC<ILayout> = ({children}) => {
    return (
        <>
            <header>
                <Navbar />
                <SliderHeader />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Layout;
