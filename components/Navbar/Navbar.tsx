import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.scss";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav className={styles.navigation}>
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
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
