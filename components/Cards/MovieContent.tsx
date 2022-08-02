import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import { genres } from "../../libs/genres";
import { IMovie } from "../../types";
import ImageBox from "../Image/ImageBox";

import styles from "./Cards.module.scss";

const MovieContent: FC<IMovie> = ({id, genre_ids, poster_path, release_date, title, vote_average}) => {
    const { locale } = useRouter();

    genre_ids = genres((genre_ids as number[] | []), locale || "en");

    return (
        <Link href={`/movie/${id}`}>
            <a>
                <div className={styles.card_wrapper__image_box}>
                    <ImageBox
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
                        <span>{vote_average * 10}.0 / 100</span>
                    </div>
                    <p className={styles.card_wrapper__body_genres}>{genre_ids?.join(", ")}</p>
                </div>
            </a>
        </Link>
    );
};

export default MovieContent;