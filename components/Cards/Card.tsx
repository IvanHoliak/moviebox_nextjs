import Image from "next/image";
import { FC } from "react";
import { IMovie } from "../Sliders/SliderMovies";
import styles from "./Cards.module.scss";



const Card: FC<IMovie> = ({
    adult,
    backdrop_path,
    genre_ids,
    id,
    original_language,
    original_title,
    overview,
    popularity,
    poster_path,
    release_date,
    title,
    video,
    vote_average,
    vote_count,
}) => {
    const imageLoader = () => {
        return `https://image.tmdb.org/t/p/w500${poster_path}`;
    };

    return (
        <div
            className={styles.card_wrapper}
        >
            <Image 
                priority
                loader={imageLoader}
                src={poster_path}
                alt="Movie image"
                width="250px"
                height="370px"
            />
        </div>
    );
};

export default Card;
