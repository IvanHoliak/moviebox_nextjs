import Image from "next/image";
import { FC } from "react";
import { ISliderArrow } from "../../types";

import styles from "./Slider.module.scss";

const SliderArrow: FC<ISliderArrow> = ({className, onClick, src, alt, customClass}) => {
    return (
        <button
            className={[styles[customClass], className].join(" ")}
            onClick={onClick}
        >
            <Image 
                priority
                src={src}
                alt={alt}
                width="14px"
                height="28px"
            />
        </button>
    );
};

export default SliderArrow;
