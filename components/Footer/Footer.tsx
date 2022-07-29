import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.scss";

type Props = {};

const Footer = (props: Props) => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.social_links}>
                    <Link 
                        href="https://www.facebook.com/"
                        passHref={true}
                    >
                        <a
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image 
                                src="/assets/img/facebook.svg"
                                alt="Facebook"
                                width="24px"
                                height="24px"    
                            />
                        </a>
                    </Link>
                    <Link 
                        href="https://instagram.com/"
                        passHref={true}
                    >
                        <a
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image 
                                src="/assets/img/insta.svg"
                                alt="Instagram"
                                width="24px"
                                height="24px"
                            />
                        </a>
                    </Link>
                    <Link 
                        href="https://twitter.com/"
                        passHref={true}
                        >
                        <a
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image 
                                src="/assets/img/twitter.svg"
                                alt="Twitter"
                                width="24px"
                                height="24px"
                            />
                        </a>
                    </Link>
                    <Link 
                        href="https://youtube.com/"
                        passHref={true}    
                    >
                        <a
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Image 
                                src="/assets/img/youtube.svg"
                                alt="YouTube"
                                width="24px"
                                height="24px"
                            />
                        </a>
                    </Link>
                </div>
                <div className={styles.useful_links}>
                <Link 
                        href="#"
                    >
                        <a>Conditions of Use</a>
                    </Link>
                    <Link 
                        href="#"
                    >
                        <a>Privacy & Policy</a>
                    </Link>
                    <Link 
                        href="#"
                    >
                        <a>Press Room</a>
                    </Link>
                </div>
                <h3 className={styles.autor_sign}>© 2022 MovieBox by Ivan Holiak a.k.a. rockwell__</h3>
            </div>
        </div>
    );
};

export default Footer;
