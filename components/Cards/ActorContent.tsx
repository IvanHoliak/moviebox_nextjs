import Link from "next/link";
import { FC } from "react";
import { IActor } from "../../types";
import ImageBox from "../Image/ImageBox";

import styles from "./Cards.module.scss";

const ActorContent: FC<IActor> = ({id, name, profile_path, character}) => {
    return (
        <Link href={`/actors/${id}`}>
            <a>
                <div className={styles.card_wrapper__image_box}>
                    <ImageBox
                        src={profile_path || ""}
                        srcError="/assets/img/no_image.png"
                        alt="Actor image"
                        width="250"
                        height="370"
                        className={styles.card_wrapper__image_box__image}
                    />
                </div>
                <div className={styles.card_wrapper__body}>
                    <h3 className={styles.card_wrapper__body_name}>
                        {name}
                    </h3>
                    {character && (
                        <>
                            <div className="line"></div>
                            <p className={styles.card_wrapper__body_character}>{character}</p>
                        </>
                    )}
                </div>
            </a>
        </Link>
    );
};

export default ActorContent;