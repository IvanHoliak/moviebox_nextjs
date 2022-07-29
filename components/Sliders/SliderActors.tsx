import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "./Slider.module.scss";

interface ISliderActors {
    header_title: string;
};

const SliderActors: FC<ISliderActors> = ({header_title}) => {
    return (
        <div className="slider">
            <div className="container">
                <div className="row">
                    <div className={styles.slider_wrapper__header}>
                        <h2>{header_title}</h2>
                        <Link href="#">
                            <a>
                                See more
                                <Image 
                                    src="/assets/img/arrow_right.svg" 
                                    alt="Arrow Right"
                                    width="20px"
                                    height="20px"
                                />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderActors;
