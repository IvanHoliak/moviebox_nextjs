import { useCallback, useEffect, useRef, useState } from "react";
import { ISlideHeader } from "../../types";
import SlideHeader from "./SlideHeader";
import styles from "./SliderHeader.module.scss";

const SliderHeaderData: ISlideHeader[] = [
    {
        id: 1,
        title: "John Wick 3 : Parabellum",
        body: "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
        rate: {
            imdb: "74.0 / 100",
            tomato: "89%"
        },
        img_src: "/assets/img/john_wick.jpg",
        link: "/movies/458156"
    },
    {
        id: 2,
        title: "Jurassic World Dominion",
        body: "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
        rate: {
            imdb: "57.0 / 100",
            tomato: "30%"
        },
        img_src: "/assets/img/jurassic_park.jpg",
        link: "/movies/507086"
    },
    {
        id: 3,
        title: "Minions: The Rise of Gru",
        body: "A fanboy of a supervillain supergroup known as the Vicious 6, Gru hatches a plan to become evil enough to join them, with the backup of his followers, the Minions.",
        rate: {
            imdb: "69.0 / 100",
            tomato: "70%"
        },
        img_src: "/assets/img/minions.jpg",
        link: "/movies/438148"
    },
    {
        id: 4,
        title: "Thor: Love and Thunder",
        body: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
        rate: {
            imdb: "68.0 / 100",
            tomato: "66%"
        },
        img_src: "/assets/img/thor.jpg",
        link: "/movies/616037"
    },
    {
        id: 5,
        title: "Top Gun: Maverick",
        body: "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen.",
        rate: {
            imdb: "86.0 / 100",
            tomato: "97%"
        },
        img_src: "/assets/img/top_gun.jpg",
        link: "/movies/361743"
    },
];

const SliderHeader = () => {
    const [activeSlide, setActiveSlide] = useState<number>(1);
    const slidesListRef = useRef<HTMLDivElement>(null);

    const changeSlideHandler = useCallback(() => {
        if(activeSlide === 5) setActiveSlide(1);
        else setActiveSlide(prev => prev += 1);
    }, [activeSlide]);

    const onClickSlidesPagination = useCallback((index: number) => {
        if(index !== activeSlide){
            setActiveSlide(index);
        };
    }, [activeSlide]);

    useEffect(() => {
        slidesListRef.current?.childNodes.forEach((slide, index) => {
            if(index < 5){
                (slide as HTMLDivElement).style.cssText = `transform: translateY(${600 * ((index + 1) - activeSlide)}px)`;
            };
        });

        const timer = setTimeout(changeSlideHandler, 10000);

        return () => clearTimeout(timer);
    }, [activeSlide, changeSlideHandler, onClickSlidesPagination]);

    return (
        <div className={styles.slider}>
            <div 
                className={styles.slider__slides}
                ref={slidesListRef}
            >
                {SliderHeaderData.map(slide => (
                    <SlideHeader 
                        key={slide.id} 
                        id={slide.id}
                        title={slide.title}
                        body={slide.body}
                        rate={slide.rate}
                        img_src={slide.img_src}
                        link={slide.link}
                    />
                ))}
                <div className={styles.slider__slides_pagination}>
                    <ul>
                        {SliderHeaderData.map((_, index) => (
                            <li 
                                key={index.toString()}
                                className={activeSlide === index + 1 ? styles.active : ""}
                                onClick={() => onClickSlidesPagination(index + 1)}        
                            >{index + 1}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SliderHeader;
