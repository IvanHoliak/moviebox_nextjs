import { FC, useEffect, useState } from "react";
import Image from "next/image";

import styles from "./Navbar.module.scss";

const NavbarThemeSwitcher: FC = () => {
    const [currentTheme, setCurrentTheme] = useState<string>("");

    const onClickThemeHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const getTheme: string | null = localStorage.getItem("theme");
        setCurrentTheme(prev => prev === "light" ? "dark" : "light");
        localStorage.setItem("theme", getTheme === "light" ? "dark" : "light");
        document.body.setAttribute("data-theme", getTheme === "light" ? "dark" : "light");
    };

    useEffect(() => {
        const getTheme: string | null = localStorage.getItem("theme");
        if(getTheme){
            setCurrentTheme(getTheme);
            document.body.setAttribute("data-theme", getTheme);
        }else{
            setCurrentTheme("light");
            localStorage.setItem("theme", "light");
            document.body.setAttribute("data-theme", "light");
        };
    }, []);

    if(currentTheme === "light"){
        return (
            <button
                onClick={onClickThemeHandler}
                className={styles.navigation_wrapper__body_theme}
            >
                <Image 
                    src="/assets/img/dark_theme.svg"
                    alt="Choose a theme"
                    width="30px"
                    height="30px"
                />
            </button>
        );
    };

    if(currentTheme === "dark"){
        return (
            <button
                onClick={onClickThemeHandler}
                className={styles.navigation_wrapper__body_theme}
            >
                <Image 
                    src="/assets/img/light_theme.svg"
                    alt="Choose a theme"
                    width="30px"
                    height="30px"
                />
            </button>
        );
    };

    return null;
};

export default NavbarThemeSwitcher;
