import Image from "next/image";
import Link from "next/link";
import { FC, createRef } from "react";
import Slider from "react-slick";
import { IMovie, IActor, ISliderData } from "../../types";
import CardContent from "../Cards/CardContent";

import styles from "./Slider.module.scss";
import SliderArrow from "./SliderArrow";

const SliderContent: FC<ISliderData<IMovie, IActor>> = ({ header_title, data, next, type }) => {
    const customeSlider = createRef<Slider>();

    const settingsSlider = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        variableWidth: true,
        nextArrow: (
            <SliderArrow
                className="slick-arrow slick-next slick-disabled"
                onClick={() => customeSlider.current?.slickNext()}
                src="/assets/img/next_slider.svg"
                alt="Next Arrow"
                customClass="next_arrow_slider"
            />
        ),
        prevArrow: (
            <SliderArrow
                className="slick-arrow slick-prev slick-disabled"
                onClick={() => customeSlider.current?.slickPrev()}
                src="/assets/img/prev_slider.svg"
                alt="Prev Arrow"
                customClass="prev_arrow_slider"
            />
        ),
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: false,
                    dots: false,
                    variableWidth: false,
                },
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false,
                    variableWidth: false,
                },
            },
        ],
    };

    return (
        <div className={styles.slider}>
            <div className="container">
                <div className="row">
                    <div className={styles.slider_wrapper__header}>
                        <h2>{header_title}</h2>
                        <Link href={next}>
                            <a>
                                See more
                                <Image
                                    priority
                                    src="/assets/img/arrow_right.svg"
                                    alt="Arrow Right"
                                    width="20px"
                                    height="20px"
                                />
                            </a>
                        </Link>
                    </div>
                    <div className={styles.slider_wrapper__body}>
                        <Slider {...settingsSlider} ref={customeSlider}>
                            {data?.map((item) => (
                                <CardContent key={item.id} data={item} type={type} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderContent;
