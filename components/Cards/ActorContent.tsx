import Image from "next/image";
import { FC } from "react";
import { IActor } from "../../types";

import styles from "./Cards.module.scss";

const ActorContent: FC<IActor> = ({adult, gender, id, known_for, known_for_department, name, popularity, profile_path}) => {
    return (
        <>
            <Image
                priority
                loader={() => `https://image.tmdb.org/t/p/w500${profile_path}`}
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
        </>
    );
};

export default ActorContent;