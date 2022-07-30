import Image from "next/image";
import { FC } from "react";
import { genres } from "../../libs/genres";
import { IMovie } from "../../types";

import styles from "./Cards.module.scss";

const MovieContent: FC<IMovie> = ({adult, backdrop_path, genre_ids, id, original_language, original_title, overview, popularity, poster_path, release_date, title, video, vote_average, vote_count}) => {
    genre_ids = genre_ids.map((id) => {
        return genres.filter((genres) => genres.id === id)[0].name;
    });
    return (
        <>
            <Image
                priority
                loader={() => `https://image.tmdb.org/t/p/w500${poster_path}`}
                src={poster_path}
                alt="Movie image"
                width="250px"
                height="370px"
                className={styles.card_wrapper__image}
            />
            <div className={styles.card_wrapper__body}>
                <p className={styles.card_wrapper__body_release_date}>{release_date}</p>
                <h3 className={styles.card_wrapper__body_title}>{title}</h3>
                <div className={styles.__imdb}>
                    <Image
                        priority
                        src="/assets/img/imdb.svg"
                        alt="IMDB"
                        width="35"
                        height="17"
                    />
                    <span>{vote_average * 10}.0 / 100</span>
                </div>
                <p className={styles.card_wrapper__body_genres}>{genre_ids.join(", ")}</p>
            </div>
        </>
    );
};

export default MovieContent;