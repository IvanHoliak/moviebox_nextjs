import Image from "next/image";
import { FC, useState } from "react";
import { IActor } from "../../types";

import styles from "./Cards.module.scss";

const ActorContent: FC<IActor> = ({adult, gender, id, known_for, known_for_department, name, popularity, profile_path}) => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    return (
        <div className={isLoaded ? "" : styles.card_wrapper__skeleton}>
            {
                profile_path ? (
                    <Image
                        loader={() => `https://image.tmdb.org/t/p/w500${profile_path}`}
                        src={profile_path}
                        alt="Actor image"
                        width="250px"
                        height="370px"
                        className={styles.card_wrapper__image}
                        onLoadingComplete={() => setIsLoaded(true)}
                    />
                ) : (
                    <Image
                        src={"/assets/img/default_user.jpg"}
                        alt="Actor image"
                        width="250px"
                        height="370px"
                        className={styles.card_wrapper__image}
                        onLoadingComplete={() => setIsLoaded(true)}
                    />
                )
            }
            <div className={styles.card_wrapper__body}>
                <h3 className={styles.card_wrapper__body_name}>
                    {name}
                </h3>
            </div>
        </div>
    );
};

export default ActorContent;