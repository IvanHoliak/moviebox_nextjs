import Image from "next/image";
import { FC } from "react";
import { ISlideHeader } from "../../types";

import styles from "./SliderHeader.module.scss";

const SlideHeader: FC<ISlideHeader> = ({id, title, body, rate, img_src}) => {
    return (
        <div
            className={styles.slider__slides_slide}
        >
            <Image 
                priority
                src={img_src}
                alt={"Slide" + id}
                layout="fill"
                objectFit="cover"
            />
            <div className={styles.slider__slides_slide__body}>
                <div className="container">
                    <div className="row">
                        <div className={styles.slider__slides_slide__body_info}>
                            <h2>{title}</h2>
                            <div
                                className={styles.slider__slides_slide__body_rate}
                            >
                                <div
                                    className={styles.__imdb}
                                >
                                    <Image 
                                        priority
                                        src="/assets/img/imdb.svg"
                                        alt="IMDB"
                                        width="35"
                                        height="17"
                                    />
                                    <span>
                                        {rate.imdb}
                                    </span>
                                </div>
                                <div
                                    className={styles.__tomato}
                                >
                                    <Image 
                                        priority
                                        src="/assets/img/tomato.svg"
                                        alt="IMDB"
                                        width="16"
                                        height="17"
                                    />
                                    <span>
                                        {rate.tomato}
                                    </span>
                                </div>
                            </div>
                            <p>
                                {body}
                            </p>
                            <button
                                className={styles.slider__slides_slide__body_button}
                            >
                                <Image 
                                    priority
                                    src="/assets/img/play.svg"
                                    alt="IMDB"
                                    width="16"
                                    height="16"
                                />
                                <span>
                                    Watch trailer
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SlideHeader;
