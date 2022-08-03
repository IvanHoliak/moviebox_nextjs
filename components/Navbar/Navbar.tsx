import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";
import Search from "../Search/Search";

import styles from "./Navbar.module.scss";

const Navbar: FC<{home: boolean}> = ({home}) => {
    const [scrolled, setScrolled] = useState<boolean>(false);
    const router = useRouter();
    const {locale, pathname, asPath, query} = router;

    const onScrollHandler = () => {
        if(document.documentElement.scrollTop > 0){
            setScrolled(true);
        }else{
            setScrolled(false);
        };
    };

    const onChangeLanguageHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const locale = e.target.value;
        router.push({ pathname, query }, asPath, {locale});
    };

    useEffect(() => {
        if(home){
            document.addEventListener("scroll", onScrollHandler);
    
            return () => document.removeEventListener("scroll", onScrollHandler);
        };
    }, [home]);

    return (
        <nav className={[styles.navigation, scrolled || !home ? styles.fixed : ""].join(" ")}>
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
                        <Search fixed={scrolled || !home ? true : false}/>
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
                                <select 
                                    name="language" 
                                    id="language"
                                    onChange={onChangeLanguageHandler}
                                    defaultValue={locale}
                                >
                                    <option value="ua">UA</option>
                                    <option value="en">EN</option>
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
