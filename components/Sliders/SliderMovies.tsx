import Image from "next/image";
import Link from "next/link";
import { FC, createRef } from "react";
import Slider from "react-slick";
import { IMovie, ISliderData } from "../../types";
import CardMovie from "../Cards/CardMovie";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

import styles from "./Slider.module.scss";

const SliderMovies: FC<ISliderData<IMovie>> = ({ header_title, data }) => {
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
            <NextArrow
                className="slick-arrow slick-prev slick-disabled"
                onClick={() => customeSlider.current?.slickNext()}
            />
        ),
        prevArrow: (
            <PrevArrow
                className="slick-arrow slick-prev slick-disabled"
                onClick={() => customeSlider.current?.slickPrev()}
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
                        <Link href="#">
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
                                <CardMovie key={item.id} {...item} />
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderMovies;
