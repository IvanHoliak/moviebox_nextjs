import React, { FC, useState } from "react";
import { IActor, ICardContent, IMovie } from "../../types";
import ActorContent from "./ActorContent";
import styles from "./Cards.module.scss";
import MovieContent from "./MovieContent";

const CardContent: FC<ICardContent<IMovie, IActor>> = ({ data, type }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                {type === "movies" && <MovieContent {...(data as IMovie)}/>}
                {type === "actors" && <ActorContent {...(data as IActor)}/>}
            </div>
        </div>
    );
};

export default CardContent;
