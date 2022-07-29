import Image from "next/image";
import { FC } from "react";
import { genres } from "../../libs/genres";
import { IActor } from "../../types";
import styles from "./Cards.module.scss";

const CardActor: FC<IActor> = ({
    adult,
    gender,
    id,
    known_for,
    known_for_department,
    name,
    popularity,
    profile_path,
}) => {
    const imageLoader = () => {
        return `https://image.tmdb.org/t/p/w500${profile_path}`;
    };

    return (
        <div className={styles.card}>
            <div className={styles.card_wrapper}>
                <Image
                    priority
                    loader={imageLoader}
                    src={profile_path}
                    alt="Movie image"
                    width="250px"
                    height="370px"
                    className={styles.card_wrapper__image}
                />
                <div className={styles.card_wrapper__body}>
                    <h3 className={styles.card_wrapper__body_name}>
                        {name}
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default CardActor;
