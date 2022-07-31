import Image from "next/image";
import Link from "next/link";
import { FC, useEffect, useState } from "react";

import styles from "./Navbar.module.scss";

const Navbar: FC = () => {
    const [scrolled, setScrolled] = useState<boolean>(false);

    const onScrollHandler = () => {
        if(document.documentElement.scrollTop > 0){
            setScrolled(true);
        }else{
            setScrolled(false);
        };
    };

    useEffect(() => {
        document.addEventListener("scroll", onScrollHandler);

        return () => document.removeEventListener("scroll", onScrollHandler);
    }, []);

    return (
        <nav className={[styles.navigation, scrolled ? styles.fixed : ""].join(" ")}>
            <div className="container">
                <div className="row">
                    <div className={styles.navigation_wrapper}>
                        <Link 
                            href="/"
                        >
                            <a>
                                <Image 
                                    priority
                                    src="/assets/img/logo.svg"
                                    alt="Movie Box"
                                    width={50}
                                    height={50}
                                />
                                <h1>MovieBox</h1>
                            </a>
                        </Link>
                        <div className={styles.navigation_wrapper__body}>
                            <div className={styles.navigation_wrapper__body_language}>
                                <label htmlFor="language">
                                    <Image 
                                        src="/assets/img/language.svg"
                                        alt="Choose a language"
                                        width="40px"
                                        height="40px"
                                    />
                                </label>
                                <select name="language" id="language">
                                    <option value="uk-UK">UA</option>
                                    <option value="en-EN">EN</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
