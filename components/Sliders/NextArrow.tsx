import Image from "next/image";
import { FC } from "react";
import { ISliderArrow } from "../../types";

import styles from "./Slider.module.scss";

const NextArrow: FC<ISliderArrow> = ({className, style, onClick}) => {
    const joinClass = () => {
        return `${styles.next_arrow_slider} ${className}`
    };
    return (
        <button
            className={[styles.next_arrow_slider, className].join(" ")}
            onClick={onClick}
        >
            <Image 
                src="/assets/img/next_slider.svg"
                alt="Left Arrow Slider"
                width="14px"
                height="28px"
            />
        </button>
    );
};

export default NextArrow;
