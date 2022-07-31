import Image from "next/image";
import { FC } from "react";
import { genres } from "../../libs/genres";
import { IMovie } from "../../types";
import ImageCardBox from "../Image/ImageCardBox";

import styles from "./Cards.module.scss";

const MovieContent: FC<IMovie> = ({genre_ids, poster_path, release_date, title, vote_average}) => {
    genre_ids = genre_ids?.map((id) => {
        return genres.filter((genres) => genres.id === id)[0].name;
    });

    return (
        <>
            <div className={styles.card_wrapper__image_box}>
                <ImageCardBox
                    src={poster_path || ""}
                    srcError="/assets/img/no_image.png"
                    alt="Actor image"
                    width="250"
                    height="370"
                    className={styles.card_wrapper__image_box__image}
                />
            </div>
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
                    <span>{vote_average || 1 * 10}.0 / 100</span>
                </div>
                <p className={styles.card_wrapper__body_genres}>{genre_ids?.join(", ")}</p>
            </div>
        </>
    );
};

export default MovieContent;