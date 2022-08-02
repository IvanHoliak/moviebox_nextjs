import Link from "next/link";
import { FC } from "react";
import { genres } from "../../libs/genres";
import { IMovie } from "../../types";

import styles from "./Search.module.scss";

interface ISearchList extends IMovie {
    onClick: () => void;
    locale: string;
};

const  SearchList: FC<ISearchList>= ({id, title, genre_ids, vote_average, onClick, locale}) => {
    genre_ids = genres((genre_ids as number[] | []), locale);

    return (
        <Link href={`/movie/${id}`}>
            <a>
                <div 
                    className={styles.search__data_box__data}
                    onClick={onClick}
                >
                    <p
                        className={styles.search__data_box__data_title}
                    >
                        {title}
                    </p>
                    <p
                        className={styles.search__data_box__data_genres}
                    >
                        {genre_ids.length ? `(${genre_ids?.join(", ")})` : ""}
                    </p>
                    <p>
                        {vote_average ? `${vote_average * 10}.0 / 100` : ""}
                    </p>
                </div>
            </a>
        </Link>
    );
};

export default SearchList;
