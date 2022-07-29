import Image from "next/image";
import { FC } from "react";

import styles from "./Slider.module.scss";

interface ISliderArrow {
    className?: string;
    style?: string;
    onClick: () => void;
};

const PrevArrow: FC<ISliderArrow> = ({className, style, onClick}) => {
    return (
        <button
            className={[styles.prev_arrow_slider, className].join(" ")}
            onClick={onClick}
        >
            <Image 
                src="/assets/img/prev_slider.svg"
                alt="Left Arrow Slider"
                width="14px"
                height="28px"
            />
        </button>
    );
};

export default PrevArrow;
